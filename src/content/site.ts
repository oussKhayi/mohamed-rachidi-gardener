// Toutes les informations du site sont ici.
// Remplacer les valeurs marquées "A CONFIRMER" par les vraies informations du client.

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const site = {
  name: "Mohammed Rachidi",
  role: "Jardinier auto-entrepreneur",
  // A CONFIRMER : numéro WhatsApp au format international, sans + ni espaces
  whatsapp: "212600000000",
  phoneDisplay: "06 00 00 00 00",
  // A CONFIRMER
  ice: "ICE 000000000000000",
  city: "Casablanca",
  zones: ["Casablanca", "Bouskoura", "Dar Bouazza", "Mohammedia", "Rabat", "Marrakech"],
  yearsOfExperience: 12, // A CONFIRMER
  url: "https://mohammed-rachidi.ma",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultMessage =
  "Bonjour Monsieur Rachidi, j'ai vu votre site. Je souhaite un devis pour l'entretien d'un jardin.";

export type ClientType = "Particulier" | "Résidence" | "Entreprise" | "Institution";

export const clientTypes: ClientType[] = ["Particulier", "Résidence", "Entreprise", "Institution"];

export type Mission = {
  slug: string;
  title: string;
  client: string;
  clientType: ClientType;
  location: string;
  year: number;
  work: string[];
  duration: string;
  summary: string;
  images: { src: string; alt: string }[];
};

// Missions de démonstration : photos et détails à remplacer par les vrais chantiers.
export const missions: Mission[] = [
  {
    slug: "villa-bouskoura",
    title: "Jardin de villa avec piscine",
    client: "Villa privée",
    clientType: "Particulier",
    location: "Bouskoura",
    year: 2025,
    work: ["Entretien mensuel", "Taille des palmiers", "Arrosage goutte-à-goutte"],
    duration: "Contrat annuel, 2 passages par mois",
    summary:
      "Reprise d'un jardin laissé à l'abandon pendant un an. Nettoyage complet, taille des palmiers, remise en route de l'arrosage, puis entretien régulier.",
    images: [
      { src: u("1789593847377-a0452ab3f3c9"), alt: "Piscine ronde entourée de palmiers et d'une pergola" },
      { src: u("1789593847389-80805c7ea5ab"), alt: "Terrasse en pierre avec transats au bord de la piscine" },
    ],
  },
  {
    slug: "residence-californie",
    title: "Espaces verts d'une résidence",
    client: "Syndic de résidence",
    clientType: "Résidence",
    location: "Casablanca, Californie",
    year: 2025,
    work: ["Tonte de gazon", "Taille de haies", "Évacuation des déchets verts"],
    duration: "Contrat d'entretien, passage chaque semaine",
    summary:
      "Entretien des pelouses et des haies communes d'une résidence de 40 appartements. Intervention le matin pour ne pas déranger les résidents.",
    images: [
      { src: u("1782939355736-fc6ed5c24b88"), alt: "Grande pelouse verte et piscine de résidence" },
      { src: u("1543309959-4d45288d1629"), alt: "Taille d'une haie au taille-haie" },
    ],
  },
  {
    slug: "hotel-marrakech",
    title: "Jardin d'accueil d'un hôtel",
    client: "Hôtel",
    clientType: "Entreprise",
    location: "Marrakech, Palmeraie",
    year: 2024,
    work: ["Taille architecturée", "Massifs fleuris", "Entretien des bassins"],
    duration: "Mission de 3 semaines, puis suivi mensuel",
    summary:
      "Remise en forme des haies taillées autour de la fontaine principale et replantation des massifs avant la saison haute.",
    images: [{ src: u("1787505078050-c6ea63c077eb"), alt: "Fontaine entourée de haies taillées et de palmiers" }],
  },
  {
    slug: "ecole-mohammedia",
    title: "Allée et pelouses d'un établissement scolaire",
    client: "École privée",
    clientType: "Institution",
    location: "Mohammedia",
    year: 2024,
    work: ["Tonte", "Élagage", "Nettoyage des allées"],
    duration: "Intervention pendant les vacances scolaires",
    summary:
      "Élagage des arbres d'alignement et remise à niveau des pelouses pendant les vacances, avec facture et rapport d'intervention pour l'administration.",
    images: [{ src: u("1641317430847-243b44c07125"), alt: "Longue pelouse bordée d'arbres et d'arbustes" }],
  },
  {
    slug: "jardin-sec-marrakech",
    title: "Jardin sec à faible arrosage",
    client: "Maison d'hôtes",
    clientType: "Entreprise",
    location: "Marrakech",
    year: 2024,
    work: ["Création de jardin", "Cactées et plantes grasses", "Paillage minéral"],
    duration: "Création en 10 jours",
    summary:
      "Création d'un jardin de cactées et de plantes adaptées au climat, qui demande très peu d'eau tout au long de l'année.",
    images: [{ src: u("1693279565944-d501f3743e15"), alt: "Jardin rempli de cactus de différentes espèces" }],
  },
  {
    slug: "bassin-dar-bouazza",
    title: "Bassin et massifs autour d'une villa",
    client: "Villa privée",
    clientType: "Particulier",
    location: "Dar Bouazza",
    year: 2023,
    work: ["Création de massifs", "Rocaille", "Plantations"],
    duration: "Création en 2 semaines",
    summary: "Aménagement des abords d'un bassin en pierre : rocaille, plantes de bord d'eau et massifs ombragés.",
    images: [{ src: u("1789593847924-d418f03a9664"), alt: "Bassin en pierre dans un jardin luxuriant avec palmiers" }],
  },
  {
    slug: "allee-palmiers-rabat",
    title: "Alignement de palmiers",
    client: "Administration publique",
    clientType: "Institution",
    location: "Rabat",
    year: 2023,
    work: ["Taille des palmiers", "Nettoyage des abords"],
    duration: "Bon de commande, intervention en 5 jours",
    summary:
      "Taille et nettoyage d'un alignement de palmiers le long d'une allée, avec facture conforme pour le service comptable.",
    images: [{ src: u("1792347255199-97c7a7cebda5"), alt: "Chemin bordé de murs en pierre et de grands palmiers" }],
  },
  {
    slug: "haie-anfa",
    title: "Haie de clôture d'une maison",
    client: "Maison individuelle",
    clientType: "Particulier",
    location: "Casablanca, Anfa",
    year: 2023,
    work: ["Taille de haie", "Désherbage", "Tonte"],
    duration: "Intervention ponctuelle d'une journée",
    summary:
      "Taille d'une haie de clôture haute de 3 mètres, avec ramassage et évacuation de tous les déchets verts le jour même.",
    images: [{ src: u("1562562219-0847beb70341"), alt: "Maison avec une grande haie taillée devant la façade" }],
  },
];

export const heroImages = {
  main: { src: u("1617576683096-00fc8eecb3af"), alt: "Mains gantées qui taillent un arbuste au sécateur" },
  side: { src: u("1789593847377-a0452ab3f3c9"), alt: "Jardin de villa avec piscine et palmiers à Bouskoura" },
};

// A CONFIRMER : remplacer par une vraie photo de Mohammed Rachidi
export const portrait = {
  src: u("1689728318937-17d24bc0a65c"),
  alt: "Mohammed Rachidi au travail, débroussailleuse en main",
};

export const services = [
  {
    title: "Entretien régulier",
    text: "Tonte, désherbage, arrosage et propreté du jardin, chaque semaine ou chaque mois selon votre contrat.",
  },
  {
    title: "Création et aménagement",
    text: "Plantations, massifs, gazon naturel, rocaille. Des plantes choisies pour le climat et l'exposition de votre terrain.",
  },
  {
    title: "Taille et élagage",
    text: "Haies, arbustes, arbres fruitiers et palmiers. Le travail se fait proprement, déchets verts évacués.",
  },
  {
    title: "Arrosage goutte-à-goutte",
    text: "Installation et réparation de systèmes d'arrosage pour économiser l'eau et garder des plantes en bonne santé.",
  },
  {
    title: "Remise en état",
    text: "Jardin abandonné ou terrain envahi : débroussaillage, nettoyage complet et préparation du sol.",
  },
  {
    title: "Contrats pour professionnels",
    text: "Résidences, hôtels, écoles et administrations : contrat d'entretien, planning fixe et facture mensuelle.",
  },
];

export const steps = [
  {
    title: "Vous m'écrivez sur WhatsApp",
    text: "Envoyez quelques photos du jardin et votre quartier. Je réponds en général dans la journée.",
  },
  {
    title: "Je viens voir le terrain",
    text: "Visite gratuite pour mesurer, comprendre vos besoins et vous conseiller.",
  },
  {
    title: "Vous recevez un devis écrit",
    text: "Prix clair, travaux détaillés, durée. Rien ne commence sans votre accord.",
  },
  {
    title: "Travaux et facture",
    text: "J'interviens à la date prévue. Une facture à mon nom est remise pour chaque intervention.",
  },
];

export const faq = [
  {
    q: "Est-ce que vous donnez une facture ?",
    a: "Oui. Je suis auto-entrepreneur déclaré et chaque intervention donne lieu à une facture avec mon numéro ICE. C'est ce qui permet aux syndics, entreprises et administrations de travailler avec moi.",
  },
  {
    q: "Combien coûte l'entretien d'un jardin ?",
    a: "Le prix dépend de la surface, de l'état du jardin et de la fréquence des passages. Après la visite, vous recevez un devis écrit et gratuit.",
  },
  {
    q: "Dans quelles villes intervenez-vous ?",
    a: `Principalement à ${site.city} et ses environs : ${site.zones.slice(1, 4).join(", ")}. Pour Rabat et Marrakech, je me déplace pour les chantiers de plusieurs jours et les contrats.`,
  },
  {
    q: "Faut-il fournir le matériel ?",
    a: "Non. J'apporte tout le matériel nécessaire : tondeuse, taille-haie, débroussailleuse, outils de taille. Les plantes et fournitures sont indiquées dans le devis.",
  },
  {
    q: "Que faites-vous des déchets verts ?",
    a: "Ils sont ramassés et évacués le jour même. Le jardin est laissé propre à la fin de chaque passage.",
  },
];
