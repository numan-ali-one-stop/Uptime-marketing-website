const NODES = [
  { x: 60, y: 90, layer: 0 },
  { x: 60, y: 200, layer: 0 },
  { x: 60, y: 310, layer: 0 },
  { x: 200, y: 60, layer: 1 },
  { x: 200, y: 160, layer: 1 },
  { x: 200, y: 240, layer: 1 },
  { x: 200, y: 340, layer: 1 },
  { x: 340, y: 130, layer: 2 },
  { x: 340, y: 270, layer: 2 },
];

const EDGES: Array<[number, number]> = [
  [0, 3],
  [0, 4],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 5],
  [2, 6],
  [3, 7],
  [4, 7],
  [4, 8],
  [5, 7],
  [5, 8],
  [6, 8],
];

function AiNetworkVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--accent-secondary)_0%,transparent_65%)] opacity-25 blur-2xl" />

      <svg viewBox="0 0 400 400" className="relative h-full w-full" fill="none">
        <defs>
          <linearGradient id="edge-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop
              offset="100%"
              stopColor="var(--accent-secondary)"
              stopOpacity="0.5"
            />
          </linearGradient>
        </defs>

        {EDGES.map(([from, to], i) => {
          const a = NODES[from];
          const b = NODES[to];
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#edge-gradient)"
              strokeWidth="1"
              className="animate-[pulse-glow_4s_ease-in-out_infinite]"
              style={{ animationDelay: `${(i % 5) * 0.3}s` }}
            />
          );
        })}

        {NODES.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.layer === 1 ? 6 : 5}
            fill={
              node.layer === 1 ? "var(--accent-secondary)" : "var(--accent)"
            }
            className="animate-[pulse-glow_3s_ease-in-out_infinite]"
            style={{ animationDelay: `${(i % 4) * 0.4}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

export { AiNetworkVisual };
