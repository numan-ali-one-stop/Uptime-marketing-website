"use client";

import * as React from "react";
import Link from "next/link";
import { RefreshCcw } from "lucide-react";

import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--destructive)_0%,transparent_60%)] opacity-15"
      />

      <div className="relative mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-24 text-center lg:px-8">
        <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
          Something went wrong
        </GradientText>
        <h1 className="text-3xl">We hit a snag loading this page</h1>
        <p className="max-w-md text-lg">
          It&apos;s not you — something broke on our end. Try again, or head
          back to the homepage.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <CTAButton
            type="button"
            variant="primary"
            onClick={() => reset()}
          >
            <RefreshCcw className="size-4" aria-hidden="true" />
            Try Again
          </CTAButton>
          <CTAButton asChild variant="secondary">
            <Link href="/">Back to Home</Link>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
