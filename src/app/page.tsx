import Image from "next/image";
import { Check, MapPin, Phone, Plus } from "lucide-react";
import { Header } from "@/components/header";
import { MobileBar } from "@/components/mobile-bar";
import { Missions } from "@/components/missions";
import { WhatsAppButton } from "@/components/whatsapp";
import { faq, heroImages, portrait, services, site, steps } from "@/content/site";

const proMessage =
  "Bonjour Monsieur Rachidi, je représente une structure (syndic, entreprise ou administration) et je souhaite un devis pour un contrat d'entretien des espaces verts.";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="chantiers" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <h2 className="display text-3xl sm:text-[2.6rem]">Chantiers réalisés</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-stone">
              Villas, résidences, hôtels, écoles et administrations. Pour chaque chantier : le lieu, le client et les
              travaux faits. Touchez une photo pour voir le détail.
            </p>
          </div>
          <div className="mt-10">
            <Missions />
          </div>
        </section>
        <Services />
        <Professionals />
        <About />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
      <div className="hero-in lg:col-span-6 lg:pt-10">
        <p className="flex items-center gap-2 text-[15px] text-stone">
          <MapPin className="size-4 text-nursery" aria-hidden="true" />
          {site.city} et environs
        </p>
        <h1 className="display mt-4 text-[2.5rem] sm:text-6xl lg:text-[4.1rem]">
          Jardinier pour villas, résidences et institutions
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          Je m&apos;appelle {site.name}. J&apos;entretiens et je crée des jardins depuis {site.yearsOfExperience} ans,
          en auto-entrepreneur déclaré : devis gratuit, travail propre et facture pour chaque intervention.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton>Demander un devis gratuit</WhatsAppButton>
          <a
            href="#chantiers"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-olive/25 px-6 text-[15px] font-semibold text-olive transition-colors hover:border-olive"
          >
            Voir les chantiers
          </a>
        </div>
        <p className="mt-5 text-sm text-stone">Réponse sur WhatsApp en général dans la journée.</p>
      </div>

      <div className="grid grid-cols-5 gap-3 sm:gap-4 lg:col-span-6">
        <div className="relative col-span-3 row-span-2 aspect-[3/4] overflow-hidden rounded-xl bg-sage">
          <Image
            src={heroImages.main.src}
            alt={heroImages.main.alt}
            fill
            priority
            sizes="(min-width: 1024px) 340px, 60vw"
            className="object-cover"
          />
        </div>
        <figure className="col-span-2">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-sage">
            <Image
              src={heroImages.side.src}
              alt={heroImages.side.alt}
              fill
              priority
              sizes="(min-width: 1024px) 230px, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs leading-snug text-stone sm:text-sm">
            Villa à Bouskoura, entretien mensuel
          </figcaption>
        </figure>
        <div className="col-span-2 flex flex-col justify-end rounded-xl bg-sage p-4 sm:p-5">
          <p className="text-xs text-stone sm:text-sm">Ils me font confiance</p>
          <ul className="wide mt-2 space-y-0.5 text-sm font-semibold leading-snug text-olive sm:text-base">
            <li>Particuliers</li>
            <li>Résidences</li>
            <li>Hôtels</li>
            <li>Écoles</li>
            <li>Administrations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-sage">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="display text-3xl sm:text-[2.6rem]">Ce que je fais</h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-stone">
            Du simple passage de tonte au contrat d&apos;entretien à l&apos;année. J&apos;apporte le matériel et je
            laisse le jardin propre.
          </p>
          <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-xl lg:block">
            <Image
              src="https://images.unsplash.com/photo-1543309959-4d45288d1629"
              alt="Taille d'une haie au taille-haie électrique"
              fill
              sizes="440px"
              className="object-cover"
            />
          </div>
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
          {services.map((s) => (
            <li key={s.title} className="border-t border-sage-line py-6">
              <h3 className="wide text-lg font-bold text-olive">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/85">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Professionals() {
  const points = [
    "Une facture à mon nom pour chaque intervention, avec numéro ICE",
    "Un devis écrit et détaillé avant de commencer",
    "Un contrat d'entretien mensuel ou annuel, avec un planning fixe",
    "Paiement par virement ou par chèque",
  ];
  return (
    <section id="professionnels" className="bg-olive text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
        <div>
          <h2 className="display text-3xl !text-white sm:text-[2.6rem]">Syndics, entreprises et administrations</h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/80">
            Je suis auto-entrepreneur déclaré. Vous avez un interlocuteur unique et des documents en règle pour votre
            comptabilité.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden="true" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <WhatsAppButton variant="light" message={proMessage} className="mt-10">
            Demander un contrat d&apos;entretien
          </WhatsAppButton>
        </div>
        <Invoice />
      </div>
    </section>
  );
}

function Invoice() {
  const rows = [
    { label: "Tonte des pelouses communes", qty: "4 passages" },
    { label: "Taille des haies, façade et parking", qty: "1 passage" },
    { label: "Évacuation des déchets verts", qty: "Forfait" },
  ];
  return (
    <figure className="mx-auto w-full max-w-md lg:rotate-[1.5deg]">
      <div className="rounded-lg bg-white p-6 text-ink sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-sage-line pb-5">
          <div className="flex items-center gap-3">
            <Image src="/brand/mark.png" alt="" width={231} height={175} className="h-9 w-auto" />
            <div className="text-sm leading-tight">
              <p className="font-bold text-olive">{site.name}</p>
              <p className="text-stone">Auto-entrepreneur</p>
            </div>
          </div>
          <div className="text-right text-sm">
            <p className="wide font-bold text-olive">Facture</p>
            <p className="text-stone">N° 2025-041</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 py-5 text-sm">
          <div>
            <p className="text-stone">Client</p>
            <p className="font-medium">Syndic Résidence Les Jardins</p>
          </div>
          <div>
            <p className="text-stone">Période</p>
            <p className="font-medium">Mai 2025</p>
          </div>
        </div>
        <ul className="divide-y divide-sage-line border-y border-sage-line text-sm">
          {rows.map((r) => (
            <li key={r.label} className="flex justify-between gap-4 py-3">
              <span>{r.label}</span>
              <span className="shrink-0 text-stone">{r.qty}</span>
            </li>
          ))}
        </ul>
        <p className="pt-4 text-xs text-stone">{site.ice}</p>
      </div>
      <figcaption className="mt-3 text-center text-sm text-white/60 lg:-rotate-[1.5deg]">
        Exemple de facture mensuelle pour une résidence
      </figcaption>
    </figure>
  );
}

function About() {
  const facts = [
    { k: "Expérience", v: `${site.yearsOfExperience} ans de métier` },
    { k: "Statut", v: "Auto-entrepreneur déclaré" },
    { k: "Basé à", v: site.city },
    { k: "Interventions", v: site.zones.join(", ") },
  ];
  return (
    <section
      id="a-propos"
      className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:gap-16"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-sage lg:col-span-5">
        <Image
          src={portrait.src}
          alt={portrait.alt}
          fill
          sizes="(min-width: 1024px) 440px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="lg:col-span-7 lg:pt-6">
        <h2 className="display text-3xl sm:text-[2.6rem]">Bonjour, je suis Mohammed</h2>
        <div className="mt-6 max-w-[62ch] space-y-4 text-[17px] leading-relaxed">
          <p>
            J&apos;ai appris le métier sur le terrain, dans les jardins de villas et de résidences autour de {site.city}
            . Depuis {site.yearsOfExperience} ans, je taille, je plante et j&apos;entretiens des espaces verts de toutes
            tailles.
          </p>
          <p>
            J&apos;ai choisi le statut d&apos;auto-entrepreneur pour travailler en règle avec tout le monde : un
            particulier qui veut un jardin soigné comme une école qui a besoin d&apos;une facture pour son budget.
          </p>
          <p>
            Ce qui compte pour moi : arriver à l&apos;heure, faire ce qui est écrit sur le devis et laisser le jardin
            plus propre qu&apos;à mon arrivée.
          </p>
        </div>
        <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-sage-line pt-8 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.k}>
              <dt className="text-sm text-stone">{f.k}</dt>
              <dd className="mt-1 font-medium">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-sage">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <h2 className="display max-w-xl text-3xl sm:text-[2.6rem]">Comment ça se passe</h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="wide flex size-10 items-center justify-center rounded-full bg-white text-lg font-bold text-nursery">
                {i + 1}
              </span>
              <h3 className="wide mt-5 text-lg font-bold leading-snug text-olive">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/85">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="questions" className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <h2 className="display text-3xl sm:text-[2.6rem]">Questions fréquentes</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-stone">
          Une autre question ? Posez-la directement sur WhatsApp.
        </p>
      </div>
      <div className="border-b border-sage-line lg:col-span-8">
        {faq.map((f) => (
          <details key={f.q} className="group border-t border-sage-line">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold text-olive [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus
                className="size-5 shrink-0 text-nursery transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-[62ch] pb-6 text-[17px] leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 rounded-2xl border border-sage-line px-6 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5">
          <Image src="/brand/mark.png" alt="" width={231} height={175} className="hidden h-14 w-auto sm:block" />
          <div>
            <h2 className="display text-3xl sm:text-4xl">Parlons de votre jardin</h2>
            <p className="mt-3 max-w-lg text-[17px] leading-relaxed text-stone">
              Envoyez quelques photos sur WhatsApp. Vous recevez une réponse et un rendez-vous pour la visite gratuite.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
          <WhatsAppButton>Écrire sur WhatsApp</WhatsAppButton>
          <a
            href={`tel:+${site.whatsapp}`}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-olive/25 px-6 text-[15px] font-semibold text-olive transition-colors hover:border-olive"
          >
            <Phone className="size-5" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-olive pb-28 text-white/75 sm:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="wide text-base font-bold text-white">{site.name}</p>
          <p className="mt-1">Auto-entrepreneur, services de jardinage</p>
          <p className="mt-1">{site.ice}</p>
        </div>
        <p>{site.city}, Maroc. © 2026</p>
      </div>
    </footer>
  );
}
