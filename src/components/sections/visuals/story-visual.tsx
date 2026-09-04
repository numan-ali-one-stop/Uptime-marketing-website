import Image from "next/image";

import { teamPhoto } from "@/data/service-images";

function StoryVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_65%)] opacity-25 blur-2xl"
      />
      <div className="border-border absolute inset-0 overflow-hidden rounded-3xl border shadow-[0_0_40px_-6px_var(--accent-glow)]">
        <Image
          src={teamPhoto}
          alt="The Uptime Marketing team at work"
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export { StoryVisual };
