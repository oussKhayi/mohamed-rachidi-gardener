"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { WhatsAppButton } from "./whatsapp";

// Barre de contact fixe sur mobile, visible une fois le haut de page dépassé.
export function MobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-sage-line bg-white px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      inert={!visible}
    >
      <div className="flex gap-3">
        <a
          href={`tel:+${site.whatsapp}`}
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-olive/25 text-olive"
          aria-label={`Appeler ${site.name}`}
        >
          <Phone className="size-5" />
        </a>
        <WhatsAppButton className="flex-1">Demander un devis</WhatsAppButton>
      </div>
    </div>
  );
}
