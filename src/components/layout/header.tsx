"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CTAButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/data/site";
import { navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";
import { ServicesMegaMenu } from "./services-mega-menu";

const SCROLL_THRESHOLD = 20;

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const secondaryLinks = navLinks.filter((link) => link.href !== "/");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 transition-[background-color,backdrop-filter,border-color] duration-300 lg:h-20",
        scrolled
          ? "border-border bg-bg-base/80 border-b backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-text-primary text-base font-bold tracking-wide uppercase sm:text-lg"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/"
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Home
          </Link>
          <ServicesMegaMenu />
          {secondaryLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <CTAButton
            asChild
            variant="primary"
            className="hidden lg:inline-flex"
          >
            <Link href="/contact">Get Started</Link>
          </CTAButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export { Header };
