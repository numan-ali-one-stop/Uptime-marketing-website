import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/site";

function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 print:hidden"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}

export { WhatsAppButton };
