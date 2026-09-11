import { NextResponse } from "next/server";
import { Resend } from "resend";

import { findServiceLocation } from "@/data/services";
import { siteConfig } from "@/data/site";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

/**
 * In-memory rate limiting, keyed by IP. This Map lives only in this
 * function instance's process memory: it resets on every cold start and is
 * NOT shared across concurrent serverless invocations on Vercel, so the
 * limit is best-effort rather than exact. For production, replace this
 * with a shared store such as Upstash Redis so the limit is enforced
 * consistently across every invocation.
 */
const submissionTimestampsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recentSubmissions = (submissionTimestampsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentSubmissions.length >= RATE_LIMIT_MAX_REQUESTS) {
    submissionTimestampsByIp.set(ip, recentSubmissions);
    return true;
  }

  recentSubmissions.push(now);
  submissionTimestampsByIp.set(ip, recentSubmissions);
  return false;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function resolveServiceLabel(service: string): string {
  return findServiceLocation(service)?.subService.title ?? service;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type EmailFields = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceLabel: string;
  budgetLabel: string;
  projectDetails: string;
  submittedAt: string;
  sourcePage: string;
};

function buildEmailHtml(fields: EmailFields): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 12px;color:#71717a;font-size:13px;font-weight:600;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#18181b;font-size:14px;">${escapeHtml(value)}</td>
    </tr>`;

  return `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#18181b;margin-bottom:16px;">New Contact Form Submission</h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e4e4e7;border-radius:8px;overflow:hidden;">
        ${row("Full Name", fields.fullName)}
        ${row("Email", fields.email)}
        ${row("Phone", fields.phone)}
        ${row("Company", fields.company)}
        ${row("Service Interested In", fields.serviceLabel)}
        ${row("Budget Range", fields.budgetLabel)}
        ${row("Submitted At", fields.submittedAt)}
        ${row("Source Page", fields.sourcePage)}
      </table>
      <div style="margin-top:16px;">
        <p style="color:#71717a;font-size:13px;font-weight:600;margin-bottom:4px;">Project Details</p>
        <p style="color:#18181b;font-size:14px;white-space:pre-wrap;border:1px solid #e4e4e7;border-radius:8px;padding:12px;margin:0;">${escapeHtml(fields.projectDetails)}</p>
      </div>
    </div>
  `;
}

type ContactApiResponse =
  | { success: true }
  | { success: false; message: string; fieldErrors?: Record<string, string[] | undefined> };

export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many submissions. Please try again in a few minutes.",
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    // Honeypot: real visitors never see or fill this field (the schema
    // rejects any non-empty value), so a violation here means the
    // submission came from a bot. Reject with a generic message instead
    // of exposing which specific check caught it.
    if (fieldErrors.honeypot) {
      return NextResponse.json(
        { success: false, message: "Submission could not be processed." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Please check the form for errors and try again.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const data: ContactFormValues = parsed.data;

  const submittedAt = new Date().toISOString();
  const sourcePage =
    request.headers.get("referer") ?? `${siteConfig.url}/contact`;

  const emailFields: EmailFields = {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone || "Not provided",
    company: data.company || "Not provided",
    serviceLabel: resolveServiceLabel(data.service),
    budgetLabel: data.budget ?? "Not specified",
    projectDetails: data.projectDetails,
    submittedAt,
    sourcePage,
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmailTo = process.env.CONTACT_EMAIL_TO || siteConfig.email;

  if (!resendApiKey) {
    // No API key configured (e.g. local development) — log the submission
    // instead of sending an email so the form still works end to end
    // without requiring real credentials.
    console.info(
      "[contact] RESEND_API_KEY not set — logging submission instead of sending email:",
      emailFields
    );
    return NextResponse.json({ success: true });
  }

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      // resend.dev is Resend's shared sandbox sender, usable without a
      // verified domain. Replace with a verified "you@yourdomain.com"
      // sender before going to production.
      from: `${siteConfig.name} Website <onboarding@resend.dev>`,
      to: contactEmailTo,
      replyTo: data.email,
      subject: `New project inquiry from ${data.fullName}`,
      html: buildEmailHtml(emailFields),
    });

    if (error) {
      console.error("[contact] Resend failed to send email:", error);
      return NextResponse.json(
        {
          success: false,
          message: "We couldn't send your message. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Unexpected error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
