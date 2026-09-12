"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { CTAButton } from "@/components/ui/cta-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import {
  BUDGET_OPTIONS,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

const PROJECT_DETAILS_MAX = 2000;

type ContactApiResponse =
  | { success: true }
  | {
      success: false;
      message?: string;
      fieldErrors?: Record<string, string[] | undefined>;
    };

const defaultValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: undefined,
  projectDetails: "",
  honeypot: "",
};

function ContactForm() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const successHeadingRef = React.useRef<HTMLHeadingElement>(null);

  // Move focus to the success message so keyboard and screen-reader users
  // land somewhere meaningful once the form is replaced, instead of losing
  // their place to document.body.
  React.useEffect(() => {
    if (isSuccess) {
      successHeadingRef.current?.focus();
    }
  }, [isSuccess]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onTouched",
  });

  const projectDetailsLength = watch("projectDetails")?.length ?? 0;

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result: ContactApiResponse = await response
        .json()
        .catch(() => ({ success: false }));

      if (response.status === 429) {
        toast.error("You've sent a few messages recently.", {
          description:
            (!result.success && result.message) ||
            "Please wait a few minutes before trying again, or reach us another way.",
          action: {
            label: "Email Us",
            onClick: () => {
              window.location.href = `mailto:${siteConfig.email}`;
            },
          },
        });
        return;
      }

      if (!response.ok || !result.success) {
        throw new Error(
          (!result.success && result.message) ||
            "Something went wrong. Please try again."
        );
      }

      toast.success("Message sent — we'll be in touch soon.");
      trackEvent("contact_form_submit", { service: values.service });
      setIsSuccess(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      toast.error(message, {
        description: "You can try again, or email us directly.",
        action: {
          label: "Retry",
          onClick: () => {
            void handleSubmit(onSubmit)();
          },
        },
        cancel: {
          label: "Email Us",
          onClick: () => {
            window.location.href = `mailto:${siteConfig.email}`;
          },
        },
      });
    }
  }

  if (isSuccess) {
    return (
      <div
        role="status"
        className="border-border bg-bg-surface flex flex-col items-center gap-4 rounded-2xl border p-10 text-center"
      >
        <CheckCircle2 className="text-success size-10" aria-hidden="true" />
        <h3 ref={successHeadingRef} tabIndex={-1} className="outline-none">
          Message sent
        </h3>
        <p className="text-text-secondary max-w-md text-sm">
          Thanks — we&apos;ll get back to you within one business day.
        </p>
        <CTAButton
          type="button"
          variant="secondary"
          onClick={() => {
            reset();
            setIsSuccess(false);
          }}
        >
          Send Another Message
        </CTAButton>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      {/* Honeypot — invisible and unreachable by keyboard/screen readers.
          Real visitors never fill this in. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="honeypot">Leave this field blank</label>
        <input
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p
              id="fullName-error"
              role="alert"
              className="text-destructive text-sm"
            >
              {errors.fullName.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p
              id="email-error"
              role="alert"
              className="text-destructive text-sm"
            >
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">
            Phone{" "}
            <span className="text-text-muted font-normal">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p
              id="phone-error"
              role="alert"
              className="text-destructive text-sm"
            >
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="company">
            Company{" "}
            <span className="text-text-muted font-normal">(optional)</span>
          </Label>
          <Input
            id="company"
            autoComplete="organization"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            {...register("company")}
          />
          {errors.company ? (
            <p
              id="company-error"
              role="alert"
              className="text-destructive text-sm"
            >
              {errors.company.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Service Interested In</Label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="service"
                  className="w-full"
                  aria-invalid={!!errors.service}
                  aria-describedby={
                    errors.service ? "service-error" : undefined
                  }
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectGroup key={category.slug}>
                      <SelectLabel>{category.title}</SelectLabel>
                      {category.subServices.map((subService) => (
                        <SelectItem
                          key={subService.slug}
                          value={subService.slug}
                        >
                          {subService.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service ? (
            <p
              id="service-error"
              role="alert"
              className="text-destructive text-sm"
            >
              {errors.service.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="budget">
            Budget Range{" "}
            <span className="text-text-muted font-normal">(optional)</span>
          </Label>
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger
                  id="budget"
                  className="w-full"
                  aria-invalid={!!errors.budget}
                  aria-describedby={errors.budget ? "budget-error" : undefined}
                >
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.budget ? (
            <p
              id="budget-error"
              role="alert"
              className="text-destructive text-sm"
            >
              {errors.budget.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="projectDetails">Project Details</Label>
          <span
            className={cn(
              "text-xs",
              projectDetailsLength > PROJECT_DETAILS_MAX
                ? "text-destructive"
                : "text-text-muted"
            )}
          >
            {projectDetailsLength} / {PROJECT_DETAILS_MAX}
          </span>
        </div>
        <Textarea
          id="projectDetails"
          rows={6}
          aria-invalid={!!errors.projectDetails}
          aria-describedby={
            errors.projectDetails
              ? "projectDetails-error"
              : "projectDetails-hint"
          }
          {...register("projectDetails")}
        />
        {errors.projectDetails ? (
          <p
            id="projectDetails-error"
            role="alert"
            className="text-destructive text-sm"
          >
            {errors.projectDetails.message}
          </p>
        ) : (
          <p id="projectDetails-hint" className="text-text-muted text-xs">
            Tell us about your goals, timeline and anything else that&apos;s
            useful context.
          </p>
        )}
      </div>

      <CTAButton
        type="submit"
        variant="primary"
        className="self-start"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : null}
        {isSubmitting ? "Sending..." : "Send Message"}
      </CTAButton>
    </form>
  );
}

export { ContactForm };
