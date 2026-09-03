import Link from "next/link";

import { CTAButton } from "@/components/ui/cta-button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-32 text-center lg:px-8">
      <h1>404 — Page Not Found</h1>
      <p className="max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <CTAButton asChild variant="primary">
        <Link href="/">Back to Home</Link>
      </CTAButton>
    </div>
  );
}
