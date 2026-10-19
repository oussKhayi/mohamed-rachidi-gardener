"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MapPin, X } from "lucide-react";
import { clientTypes, missions, type ClientType, type Mission } from "@/content/site";
import { WhatsAppButton } from "./whatsapp";

type Filter = "Tous" | ClientType;

const plural: Record<ClientType, string> = {
  Particulier: "Particuliers",
  Résidence: "Résidences",
  Entreprise: "Entreprises",
  Institution: "Institutions",
};

export function Missions() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const [open, setOpen] = useState<Mission | null>(null);

  const list = filter === "Tous" ? missions : missions.filter((m) => m.clientType === filter);
  const filters: Filter[] = ["Tous", ...clientTypes];

  return (
    <>
      <div
        role="group"
        aria-label="Filtrer les chantiers par type de client"
        className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
      >
        <div className="flex w-max gap-2">
          {filters.map((f) => {
            const count = f === "Tous" ? missions.length : missions.filter((m) => m.clientType === f).length;
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-[15px] transition-colors ${
                  active
                    ? "border-olive bg-olive text-white"
                    : "border-sage-line bg-white text-ink hover:border-olive/40"
                }`}
              >
                {f === "Tous" ? "Tous" : plural[f]}
                <span className={`text-sm tabular-nums ${active ? "text-white/70" : "text-stone"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <li key={m.slug}>
            <button
              type="button"
              onClick={() => setOpen(m)}
              className="group block w-full text-left"
              aria-label={`${m.title}, ${m.location}. Voir le détail`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sage">
                <Image
                  src={m.images[0].src}
                  alt={m.images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {m.images.length > 1 && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-ink">
                    {m.images.length} photos
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-sm text-stone">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-nursery" aria-hidden="true" />
                  {m.location}
                </span>
                <span className="tabular-nums">{m.year}</span>
              </div>
              <h3 className="wide mt-1.5 text-lg font-bold leading-snug text-olive group-hover:underline group-hover:decoration-leaf group-hover:underline-offset-4">
                {m.title}
              </h3>
              <p className="mt-1 text-[15px] text-ink">
                {m.client}
                <span className="text-stone"> pour {m.work[0].toLowerCase()}</span>
              </p>
            </button>
          </li>
        ))}
      </ul>

      <MissionDialog mission={open} onClose={() => setOpen(null)} />
    </>
  );
}

function MissionDialog({ mission, onClose }: { mission: Mission | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (mission) {
      if (!d.open) d.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (d.open) {
      d.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mission]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="m-0 mt-auto max-h-[92dvh] w-full max-w-none overflow-y-auto rounded-t-2xl bg-white p-0 text-ink sm:m-auto sm:max-w-3xl sm:rounded-2xl"
      aria-labelledby="mission-title"
    >
      {mission && <MissionBody key={mission.slug} mission={mission} onClose={onClose} />}
    </dialog>
  );
}

function MissionBody({ mission, onClose }: { mission: Mission; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="relative aspect-[16/10] bg-sage">
        <Image
          key={mission.images[index].src}
          src={mission.images[index].src}
          alt={mission.images[index].alt}
          fill
          sizes="(min-width: 640px) 768px, 100vw"
          className="object-cover"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-full bg-white text-ink"
          aria-label="Fermer"
        >
          <X className="size-5" />
        </button>
      </div>

      {mission.images.length > 1 && (
        <div className="flex gap-2 px-5 pt-4 sm:px-8">
          {mission.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Photo ${i + 1} sur ${mission.images.length}`}
              aria-current={i === index}
              className={`relative h-14 w-20 overflow-hidden rounded-md border-2 ${
                i === index ? "border-nursery" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="px-5 pb-8 pt-5 sm:px-8">
        <p className="inline-flex items-center gap-1.5 text-sm text-stone">
          <MapPin className="size-4 text-nursery" aria-hidden="true" />
          {mission.location}, {mission.year}
        </p>
        <h3 id="mission-title" className="display mt-2 text-2xl sm:text-3xl">
          {mission.title}
        </h3>
        <p className="mt-4 max-w-prose text-[17px] leading-relaxed">{mission.summary}</p>

        <dl className="mt-6 grid gap-x-8 gap-y-4 border-t border-sage-line pt-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-stone">Client</dt>
            <dd className="mt-0.5 font-medium">{mission.client}</dd>
          </div>
          <div>
            <dt className="text-sm text-stone">Durée</dt>
            <dd className="mt-0.5 font-medium">{mission.duration}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm text-stone">Travaux réalisés</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {mission.work.map((w) => (
                <span key={w} className="rounded-full bg-sage px-3 py-1 text-sm">
                  {w}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <WhatsAppButton
          className="mt-8 w-full sm:w-auto"
          message={`Bonjour Monsieur Rachidi, j'ai vu votre chantier "${mission.title}" (${mission.location}) sur votre site. Je souhaite un devis pour un travail similaire.`}
        >
          Demander un devis similaire
        </WhatsAppButton>
      </div>
    </div>
  );
}
