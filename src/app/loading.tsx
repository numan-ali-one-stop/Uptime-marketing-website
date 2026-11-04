import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div aria-hidden="true" aria-label="Loading" role="status">
      {/* Hero skeleton */}
      <section className="pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-5 sm:px-6 lg:px-8">
          <Skeleton className="bg-bg-elevated h-4 w-32 rounded-full" />
          <Skeleton className="bg-bg-elevated h-12 w-full max-w-xl rounded-lg" />
          <Skeleton className="bg-bg-elevated h-5 w-full max-w-2xl rounded-lg" />
          <Skeleton className="bg-bg-elevated h-5 w-3/4 max-w-xl rounded-lg" />
          <div className="mt-2 flex flex-wrap gap-4">
            <Skeleton className="bg-bg-elevated h-12 w-44 rounded-full" />
            <Skeleton className="bg-bg-elevated h-12 w-36 rounded-full" />
          </div>
        </div>
      </section>

      {/* Card grid skeleton */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border-border flex flex-col gap-4 rounded-2xl border p-6"
            >
              <Skeleton className="bg-bg-elevated size-10 rounded-xl" />
              <Skeleton className="bg-bg-elevated h-5 w-3/4 rounded-lg" />
              <Skeleton className="bg-bg-elevated h-4 w-full rounded-lg" />
              <Skeleton className="bg-bg-elevated h-4 w-5/6 rounded-lg" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
