import { WhatsappIcon } from "@/components/icons/brand-icons";
import { siteConfig } from "@/data/site";

function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:right-6 sm:bottom-6 sm:size-14 print:hidden"
    >
      <WhatsappIcon className="size-7 sm:size-8" aria-hidden="true" />
    </a>
  );
}

export { WhatsAppButton };
