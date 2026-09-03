function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_65%)] opacity-30 blur-2xl" />

      <svg viewBox="0 0 400 400" className="relative h-full w-full" fill="none">
        <defs>
          <linearGradient id="ring-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
          <radialGradient id="core-gradient">
            <stop offset="0%" stopColor="var(--accent-glow)" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="70"
          fill="url(#core-gradient)"
          opacity="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="26"
          fill="var(--accent)"
          className="animate-[pulse-glow_3.5s_ease-in-out_infinite]"
        />

        <circle
          cx="200"
          cy="200"
          r="110"
          stroke="url(#ring-gradient)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="url(#ring-gradient)"
          strokeOpacity="0.2"
          strokeWidth="1"
        />

        <g
          className="origin-center animate-[orbit-cw_16s_linear_infinite]"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <circle cx="310" cy="200" r="6" fill="var(--accent-glow)" />
          <circle cx="90" cy="200" r="4" fill="var(--accent-secondary)" />
        </g>

        <g
          className="origin-center animate-[orbit-ccw_24s_linear_infinite]"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <circle cx="200" cy="40" r="5" fill="var(--accent-secondary)" />
          <circle cx="266" cy="330" r="4" fill="var(--accent-glow)" />
          <circle cx="134" cy="330" r="3" fill="var(--accent)" />
        </g>

        <g
          className="origin-center animate-[orbit-cw_32s_linear_infinite]"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <circle cx="200" cy="360" r="4" fill="var(--accent)" />
        </g>
      </svg>
    </div>
  );
}

export { HeroVisual };
