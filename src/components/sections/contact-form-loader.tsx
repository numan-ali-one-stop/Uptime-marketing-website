"use client";

import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

// next/dynamic only produces a real, separate chunk boundary when the call
// is made from a Client Component — calling it from the (Server Component)
// page directly does not code-split at all. This tiny client wrapper is
// what actually keeps react-hook-form + zod out of every other route's
// bundle, isolating them to the one route that renders this file.
const ContactForm = dynamic(
  () =>
    import("@/components/sections/contact-form").then((mod) => mod.ContactForm),
  {
    loading: () => (
      <div className="flex flex-col gap-6" aria-hidden="true">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Skeleton className="bg-bg-elevated h-4 w-24 rounded" />
              <Skeleton className="bg-bg-elevated h-9 w-full rounded-md" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="bg-bg-elevated h-4 w-32 rounded" />
          <Skeleton className="bg-bg-elevated h-32 w-full rounded-md" />
        </div>
        <Skeleton className="bg-bg-elevated h-12 w-36 rounded-full" />
      </div>
    ),
  }
);

function ContactFormLoader() {
  return <ContactForm />;
}

export { ContactFormLoader };
