"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { serviceCategories } from "@/data/services";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

function ServicesMegaMenu({ className }: { className?: string }) {
  return (
    <NavigationMenu viewport={false} className={cn("max-w-none", className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-text-secondary hover:text-text-primary focus:text-text-primary data-[state=open]:text-text-primary h-auto bg-transparent px-0 py-0 text-sm font-medium hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className={cn(
              "md:fixed md:inset-x-0 md:top-20 md:mx-auto md:w-[calc(100%-3rem)] md:max-w-5xl md:translate-x-0",
              "group-data-[viewport=false]/navigation-menu:border-border group-data-[viewport=false]/navigation-menu:bg-bg-elevated group-data-[viewport=false]/navigation-menu:text-text-primary group-data-[viewport=false]/navigation-menu:top-20 group-data-[viewport=false]/navigation-menu:mt-0 group-data-[viewport=false]/navigation-menu:rounded-2xl group-data-[viewport=false]/navigation-menu:shadow-2xl group-data-[viewport=false]/navigation-menu:duration-200",
              "p-6",
              "data-[state=closed]:zoom-in-100 data-[state=closed]:slide-out-to-top-2 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-100 data-[state=open]:slide-in-from-top-2 data-[state=open]:fade-in-0"
            )}
          >
            <div className="grid grid-cols-5 gap-6">
              {serviceCategories.map((category) => (
                <div key={category.slug} className="flex flex-col gap-1">
                  <Link
                    href={`/services/${category.slug}`}
                    className="font-heading text-text-primary hover:text-accent mb-2 text-sm font-semibold"
                  >
                    {category.title}
                  </Link>
                  <ul className="flex flex-col gap-0.5">
                    {category.subServices.map((subService) => {
                      const Icon = getIcon(subService.icon);
                      return (
                        <li key={subService.slug}>
                          <Link
                            href={`/services/${category.slug}/${subService.slug}`}
                            className="group text-text-secondary hover:bg-bg-surface hover:text-accent flex items-start gap-2 rounded-lg px-2 py-2 text-sm transition-colors"
                          >
                            <Icon
                              className="text-text-muted group-hover:text-accent mt-0.5 size-4 shrink-0 transition-colors"
                              aria-hidden="true"
                            />
                            <span>{subService.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { ServicesMegaMenu };
