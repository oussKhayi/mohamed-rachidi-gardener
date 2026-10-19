// Toutes les informations du site sont ici.
// Remplacer les valeurs marquées "A CONFIRMER" par les vraies informations du client.

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const site = {
  name: "Mohammed Rachidi",
  role: "Jardinier auto-entrepreneur",
  whatsapp: "212621022353",
  phoneDisplay: "06 21 02 23 53",
  // A CONFIRMER
  ice: "ICE 000000000000000",
  city: "Laâyoune",
  region: "Laâyoune-Sakia El Hamra",
  // A CONFIRMER : villes où il intervient
  zones: ["Laâyoune", "El Marsa", "Foum El Oued", "Boujdour", "Tarfaya"],
  yearsOfExperience: 12, // A CONFIRMER
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

// Les 3 premières missions utilisent les vraies photos du client.
// Les suivantes sont des exemples (photos Unsplash) à remplacer par de vrais chantiers.
export const missions: Mission[] = [
  {
    slug: "palmiers-promenade",
    title: "Taille des palmiers d'une promenade",
    client: "Espace public",
    clientType: "Institution",
    location: "Laâyoune",
    year: 2025,
    work: ["Taille des palmiers", "Nettoyage des troncs", "Évacuation des palmes"],
    duration: "Intervention de plusieurs jours, à l'échelle",
    summary:
      "Taille des palmes sèches et nettoyage des troncs le long d'une promenade. Les palmes coupées sont ramassées et évacuées au fur et à mesure.",
    images: [
      { src: "/work/palmier-taille.webp", alt: "Taille d'un palmier depuis une échelle le long d'une promenade" },
    ],
  },
  {
    slug: "ficus-topiaire",
    title: "Ficus taillé en boule",
    client: "Espaces verts de quartier",
    clientType: "Institution",
    location: "Laâyoune",
    year: 2025,
    work: ["Taille en topiaire", "Tonte du gazon", "Taille des haies"],
    duration: "Entretien régulier",
    summary:
      "Taille d'un ficus en deux plateaux et entretien du gazon et des haies autour. Une taille régulière garde la forme nette toute l'année.",
    images: [{ src: "/work/ficus-topiaire.webp", alt: "Ficus taillé en deux boules au milieu d'une pelouse" }],
  },
  {
    slug: "plantation-yuccas",
    title: "Plantation de yuccas",
    client: "Jardin de résidence",
    clientType: "Résidence",
    location: "Laâyoune",
    year: 2025,
    work: ["Préparation du sol", "Plantation", "Cuvettes d'arrosage"],
    duration: "Intervention d'une journée",
    summary:
      "Préparation de la terre, plantation de jeunes yuccas et création d'une cuvette autour de chaque plant pour garder l'eau au pied.",
    images: [
      { src: "/work/yuccas-plantation.webp", alt: "Jeunes yuccas plantés dans des cuvettes de sable" },
      { src: "/work/yuccas-travail.webp", alt: "Mohammed Rachidi prépare la cuvette d'un yucca au râteau" },
    ],
  },
  {
    slug: "villa-piscine",
    title: "Jardin de villa avec piscine",
    client: "Villa privée",
    clientType: "Particulier",
    location: "Laâyoune",
    year: 2025,
    work: ["Entretien mensuel", "Taille des palmiers", "Arrosage goutte-à-goutte"],
    duration: "Contrat annuel, 2 passages par mois",
    summary:
      "Reprise d'un jardin laissé à l'abandon. Nettoyage complet, taille des palmiers, remise en route de l'arrosage, puis entretien régulier.",
    images: [
      { src: u("1789593847377-a0452ab3f3c9"), alt: "Piscine ronde entourée de palmiers et d'une pergola" },
      { src: u("1789593847389-80805c7ea5ab"), alt: "Terrasse en pierre avec transats au bord de la piscine" },
    ],
  },
  {
    slug: "residence-el-marsa",
    title: "Espaces verts d'une résidence",
    client: "Syndic de résidence",
    clientType: "Résidence",
    location: "El Marsa",
    year: 2024,
    work: ["Tonte de gazon", "Taille de haies", "Évacuation des déchets verts"],
    duration: "Contrat d'entretien, passage chaque semaine",
    summary:
      "Entretien des pelouses et des haies communes d'une résidence. Intervention le matin pour ne pas déranger les résidents.",
    images: [{ src: u("1782939355736-fc6ed5c24b88"), alt: "Grande pelouse verte d'une résidence" }],
  },
  {
    slug: "hotel-fontaine",
    title: "Jardin d'accueil d'un hôtel",
    client: "Hôtel",
    clientType: "Entreprise",
    location: "Laâyoune",
    year: 2024,
    work: ["Taille architecturée", "Massifs fleuris", "Entretien des bassins"],
    duration: "Mission de 3 semaines, puis suivi mensuel",
    summary: "Remise en forme des haies taillées autour de la fontaine principale et replantation des massifs.",
    images: [{ src: u("1787505078050-c6ea63c077eb"), alt: "Fontaine entourée de haies taillées et de palmiers" }],
  },
  {
    slug: "ecole-pelouses",
    title: "Pelouses d'un établissement scolaire",
    client: "École privée",
    clientType: "Institution",
    location: "Laâyoune",
    year: 2024,
    work: ["Tonte", "Élagage", "Nettoyage des allées"],
    duration: "Intervention pendant les vacances scolaires",
    summary:
      "Élagage des arbres et remise à niveau des pelouses pendant les vacances, avec facture et rapport d'intervention pour l'administration.",
    images: [{ src: u("1641317430847-243b44c07125"), alt: "Longue pelouse bordée d'arbres et d'arbustes" }],
  },
  {
    slug: "jardin-sec",
    title: "Jardin sec à faible arrosage",
    client: "Maison individuelle",
    clientType: "Particulier",
    location: "Foum El Oued",
    year: 2024,
    work: ["Création de jardin", "Cactées et plantes grasses", "Paillage minéral"],
    duration: "Création en 10 jours",
    summary:
      "Un jardin de cactées et de plantes adaptées au climat saharien, qui demande très peu d'eau tout au long de l'année.",
    images: [{ src: u("1693279565944-d501f3743e15"), alt: "Jardin rempli de cactus de différentes espèces" }],
  },
  {
    slug: "haie-cloture",
    title: "Haie de clôture d'une maison",
    client: "Maison individuelle",
    clientType: "Particulier",
    location: "Laâyoune",
    year: 2023,
    work: ["Taille de haie", "Désherbage", "Tonte"],
    duration: "Intervention ponctuelle d'une journée",
    summary: "Taille d'une haie de clôture haute de 3 mètres, avec évacuation de tous les déchets verts le jour même.",
    images: [{ src: u("1562562219-0847beb70341"), alt: "Maison avec une grande haie taillée devant la façade" }],
  },
];

export const heroImages = {
  main: { src: "/work/palmier-taille.webp", alt: "Mohammed Rachidi taille un palmier depuis une échelle" },
  side: { src: "/work/ficus-topiaire.webp", alt: "Ficus taillé en deux boules à Laâyoune" },
  sideCaption: "Ficus taillé en boule, Laâyoune",
};

export const portrait = {
  src: "/work/yuccas-travail.webp",
  alt: "Mohammed Rachidi au travail, en tenue verte, prépare la plantation d'un yucca",
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
    a: `Principalement à ${site.city} et ses environs : ${site.zones.slice(1).join(", ")}. Pour un chantier plus loin dans la région, contactez-moi sur WhatsApp.`,
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
