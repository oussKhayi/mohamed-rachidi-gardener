import Image from "next/image";
import { site } from "@/content/site";
import { WhatsAppButton } from "./whatsapp";

const links = [
  { href: "#chantiers", label: "Chantiers" },
  { href: "#services", label: "Services" },
  { href: "#a-propos", label: "À propos" },
  { href: "#questions", label: "Questions" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sage-line/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-3" aria-label={`${site.name}, retour en haut de page`}>
          <Image src="/brand/mark.png" alt="" width={231} height={175} className="h-9 w-auto" priority />
          <span className="leading-tight">
            <span className="wide block text-[15px] font-bold text-olive">{site.name}</span>
            <span className="block text-xs text-stone">Services de jardinage</span>
          </span>
        </a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-[15px] text-ink md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="underline-offset-[6px] hover:text-nursery hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton className="hidden !min-h-10 !px-4 text-sm sm:inline-flex">Devis gratuit</WhatsAppButton>
      </div>
    </header>
  );
}
