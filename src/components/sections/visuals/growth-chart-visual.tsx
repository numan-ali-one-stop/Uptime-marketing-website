const BARS = [
  { height: 28, delay: "0s" },
  { height: 42, delay: "0.08s" },
  { height: 38, delay: "0.16s" },
  { height: 58, delay: "0.24s" },
  { height: 72, delay: "0.32s" },
  { height: 92, delay: "0.4s" },
];

function GrowthChartVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_65%)] opacity-20 blur-2xl" />

      <div className="border-border bg-bg-surface relative rounded-2xl border p-8">
        <svg viewBox="0 0 320 40" className="mb-4 h-10 w-full" fill="none">
          <path
            d="M4 34 C 60 30, 90 22, 130 20 S 220 6, 316 4"
            stroke="url(#growth-line-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
            className="animate-[dash-draw_1.6s_ease-out_forwards]"
          />
          <defs>
            <linearGradient
              id="growth-line-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-secondary)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex h-40 items-end justify-between gap-3">
          {BARS.map((bar, i) => (
            <div
              key={i}
              className="flex-1 origin-bottom animate-[float-y_4s_ease-in-out_infinite] rounded-t-md bg-[linear-gradient(180deg,var(--accent-secondary)_0%,var(--accent)_100%)]"
              style={{ height: `${bar.height}%`, animationDelay: bar.delay }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { GrowthChartVisual };
