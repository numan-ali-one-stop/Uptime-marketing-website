function DesignBlobsVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <div
        className="absolute top-4 left-4 h-56 w-56 animate-[blob-morph_14s_ease-in-out_infinite] bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-secondary)_100%)] opacity-70 mix-blend-screen blur-sm"
        style={{ borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" }}
      />
      <div
        className="absolute right-6 bottom-8 h-48 w-48 animate-[blob-morph_18s_ease-in-out_infinite_reverse] bg-[linear-gradient(135deg,var(--accent-secondary)_0%,var(--accent)_100%)] opacity-60 mix-blend-screen blur-sm"
        style={{ borderRadius: "58% 42% 35% 65% / 55% 60% 40% 45%" }}
      />
      <div
        className="absolute top-1/3 right-1/4 h-32 w-32 animate-[blob-morph_10s_ease-in-out_infinite] bg-[linear-gradient(135deg,var(--accent-glow)_0%,var(--accent-secondary)_100%)] opacity-50 mix-blend-screen blur-sm"
        style={{
          borderRadius: "35% 65% 55% 45% / 40% 35% 65% 60%",
          animationDelay: "-4s",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border-border bg-bg-surface/80 grid grid-cols-3 gap-2 rounded-2xl border p-4 backdrop-blur-sm">
          {[
            "var(--accent)",
            "var(--accent-secondary)",
            "var(--accent-glow)",
            "var(--success)",
            "var(--text-primary)",
            "var(--border-hover)",
          ].map((color, i) => (
            <span
              key={i}
              className="size-8 rounded-lg"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { DesignBlobsVisual };
