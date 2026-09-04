import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { serviceImages } from "@/data/service-images";
import type { IconComponent } from "@/lib/icons";
import type { SubService } from "@/types/services";

type SubServiceCardProps = {
  categorySlug: string;
  subService: SubService;
  icon: IconComponent;
};

function SubServiceCard({
  categorySlug,
  subService,
  icon: Icon,
}: SubServiceCardProps) {
  const image = serviceImages[subService.slug];

  return (
    <Link
      href={`/services/${categorySlug}/${subService.slug}`}
      className="group block h-full"
    >
      <Card className="h-full gap-0 overflow-hidden p-0">
        {image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={image.card}
              alt={subService.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/25 backdrop-blur-sm">
              <Icon className="size-4 text-white" aria-hidden="true" />
            </div>
          </div>
        ) : null}
        <div className="flex flex-1 flex-col gap-1 p-5">
          {!image && <Icon className="text-accent size-6" aria-hidden="true" />}
          <h3 className="font-heading text-text-primary mt-1 text-sm font-semibold">
            {subService.title}
          </h3>
          <p className="text-text-secondary text-sm">
            {subService.shortDescription}
          </p>
          <span className="text-accent mt-auto flex items-center gap-1.5 pt-1 text-sm font-medium">
            Learn more
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}

export { SubServiceCard };
