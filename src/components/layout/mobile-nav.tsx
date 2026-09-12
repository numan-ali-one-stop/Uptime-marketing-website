"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getIcon } from "@/lib/icons";
import { navLinks } from "@/lib/nav-links";

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-text-primary hover:bg-bg-surface lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="border-border bg-bg-base flex w-full flex-col gap-0 p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-border border-b">
          <SheetTitle className="font-heading text-text-primary text-lg tracking-wide uppercase">
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                aria-current={pathname === "/" ? "page" : undefined}
                className="text-text-primary hover:bg-bg-surface block rounded-lg px-2 py-3 text-base font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Accordion type="single" collapsible>
                {serviceCategories.map((category) => (
                  <AccordionItem
                    key={category.slug}
                    value={category.slug}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-text-primary px-2 text-base font-medium hover:no-underline">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-0">
                      <ul className="flex flex-col gap-0.5 pl-4">
                        {category.subServices.map((subService) => {
                          const Icon = getIcon(subService.icon);
                          return (
                            <li key={subService.slug}>
                              <Link
                                href={`/services/${category.slug}/${subService.slug}`}
                                onClick={() => setOpen(false)}
                                className="text-text-secondary hover:bg-bg-surface hover:text-accent flex items-center gap-2 rounded-lg px-2 py-2 text-sm"
                              >
                                <Icon
                                  className="text-text-muted size-4 shrink-0"
                                  aria-hidden="true"
                                />
                                {subService.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </li>
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="text-text-primary hover:bg-bg-surface block rounded-lg px-2 py-3 text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div className="border-border border-t p-4">
          <CTAButton asChild variant="primary" className="w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </CTAButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { MobileNav };
