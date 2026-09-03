function SkeletonLine({ width }: { width: string }) {
  return (
    <div
      className="h-2.5 animate-[shimmer-sweep_2.4s_ease-in-out_infinite] rounded-full bg-[linear-gradient(90deg,var(--bg-elevated)_25%,var(--border-hover)_50%,var(--bg-elevated)_75%)] bg-[length:200%_100%]"
      style={{ width }}
    />
  );
}

function DevMockupVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_70%)] opacity-20 blur-2xl" />

      <div className="border-border bg-bg-surface/60 absolute -right-4 -bottom-4 h-full w-full rounded-2xl border" />

      <div className="animate-[float-y_6s_ease-in-out_infinite] rounded-2xl bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-secondary)_100%)] p-px shadow-2xl">
        <div className="bg-bg-surface rounded-[calc(1rem-1px)] p-5">
          <div className="mb-5 flex items-center gap-1.5">
            <span className="bg-destructive/70 size-2.5 rounded-full" />
            <span className="size-2.5 rounded-full bg-[#f5b93c]/70" />
            <span className="bg-success/70 size-2.5 rounded-full" />
          </div>

          <div className="flex flex-col gap-3">
            <SkeletonLine width="70%" />
            <SkeletonLine width="90%" />
            <SkeletonLine width="55%" />
            <div className="border-border bg-bg-elevated my-2 h-24 rounded-lg border" />
            <SkeletonLine width="80%" />
            <SkeletonLine width="40%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { DevMockupVisual };
