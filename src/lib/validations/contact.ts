import { z } from "zod";

/**
 * Single source of truth for the contact form shape. Both the client form
 * (react-hook-form + zodResolver) and the API route import this schema, so
 * client-side and server-side validation can never drift apart.
 */

export const BUDGET_OPTIONS = [
  "Under $1k",
  "$1k–$5k",
  "$5k–$15k",
  "$15k+",
  "Not sure yet",
] as const;

// Permissive international phone format: an optional leading +, then
// digits with optional spaces, dashes, dots or parentheses as separators.
const PHONE_PATTERN = /^\+?[\d\s().-]{7,20}$/;

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || PHONE_PATTERN.test(value), {
      message: "Please enter a valid phone number.",
    }),
  company: z.string().trim().optional(),
  service: z.string().trim().min(1, "Please select a service."),
  budget: z.enum(BUDGET_OPTIONS).optional(),
  projectDetails: z
    .string()
    .trim()
    .min(20, "Please share a few more details (20 characters minimum).")
    .max(2000, "Please keep this under 2000 characters."),
  // Honeypot: real visitors never see or fill this field. Any non-empty
  // value means the submission came from a bot.
  honeypot: z.string().max(0, "Spam detected.").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
