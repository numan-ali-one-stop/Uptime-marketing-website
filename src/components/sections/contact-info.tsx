import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Card } from "@/components/ui/card";
import { siteConfig } from "@/data/site";
import { getIcon } from "@/lib/icons";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${siteConfig.whatsappNumber}`,
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: siteConfig.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: siteConfig.businessHours,
    href: undefined,
  },
];

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* 2-up between sm and lg, where this column runs full width and a
          single stacked list would leave a lot of dead space on the right.
          Below sm there's no room for two; at lg+ the outer page grid has
          already squeezed this into a narrow sidebar, so back to one. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {CONTACT_CARDS.map((item) => {
          const cardBody = (
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,color-mix(in_oklab,var(--accent-secondary)_18%,transparent)_100%)]">
                <item.icon className="text-accent size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-text-muted text-xs font-medium tracking-[0.1em] uppercase">
                  {item.label}
                </p>
                <p className="text-text-primary mt-1 text-sm font-medium">
                  {item.value}
                </p>
              </div>
            </div>
          );

          return (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent block h-full rounded-2xl outline-none"
                >
                  <Card className="h-full p-5">{cardBody}</Card>
                </Link>
              ) : (
                <Card className="h-full p-5">{cardBody}</Card>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        {siteConfig.social.map((social) => {
          const Icon = getIcon(social.icon);
          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="border-border text-text-secondary hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent flex size-10 items-center justify-center rounded-full border transition-colors outline-none"
            >
              <Icon className="size-4" aria-hidden="true" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export { ContactInfo };
