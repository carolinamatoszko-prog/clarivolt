/**
 * Contenu de la landing page.
 *
 * Tout le texte vit ici, hors des composants React. Tester une
 * nouvelle hypothèse = modifier ce fichier, pas le JSX.
 *
 * RÈGLE : aucun chiffre non vérifié. Un nombre non validé s'écrit
 * `[CHIFFRE À VALIDER]` — on ne l'invente pas.
 *
 * Cible v1 : asset managers de parcs photovoltaïques (France).
 * O&M explicitement hors périmètre v1 — leur promesse est inverse
 * (prouver la performance au client), ce serait une autre page.
 */

export const hero = {
  eyebrow: "Asset managers de parcs photovoltaïques",

  /** Une entrée par ligne — le saut de ligne est intentionnel. */
  title: ["Une fuite d'eau, on l'entend.", "Une perte de production, non."],

  /**
   * Le Hero pose le phénomène, il n'énumère pas : l'énumération
   * (salissure / dérive / onduleur) appartient au bloc Problème.
   * Éviter de dire deux fois la même chose à deux endroits.
   */
  lead: "Une baisse de production ne fait pas de bruit. Elle se confond avec un ciel couvert, s'installe sur des semaines, et n'apparaît qu'au bilan.",

  /**
   * Le « pourquoi maintenant » : l'économie du kWh.
   * Formulé qualitativement, sans chiffre — prix de revente en
   * baisse, appels d'offres rares, bascule vers l'autoconsommation.
   */
  whyNow:
    "Et la valeur d'un kWh se déplace : prix de revente en baisse, appels d'offres rares, bascule vers l'autoconsommation. Chaque kWh que vous ne produisez pas vous coûte plus cher qu'hier.",

  cta: {
    label: "Rejoindre la liste d'accès anticipé",
    href: "#waitlist",
  },

  /** Promesse tenable manuellement. Ne rien promettre de plus. */
  ctaNote: "Nous contactons les premiers inscrits pour comprendre leur parc.",
} as const;

export const brand = {
  name: "ClariVolt",
  /** Découpage pour le logotype : « Clari » en encre, « Volt » en vert. */
  nameParts: ["Clari", "Volt"],
  mark: {
    src: "/clarivolt-mark.png",
    alt: "ClariVolt",
  },
} as const;

/* ============================================================
   Bloc « Problème » — les pertes silencieuses (rétrospectif)
   ============================================================ */

export const problem = {
  title: "Ce qui ronge votre production ne déclenche aucune alarme",
  items: [
    {
      term: "Salissure",
      text: "La production baisse lentement, sans jamais franchir de seuil. Aucun capteur ne signale une vitre sale.",
    },
    {
      term: "Dérive",
      text: "L'écart s'installe sur des semaines, noyé dans la variabilité météo. Une journée à −8 % ressemble à une journée nuageuse.",
    },
    {
      term: "Onduleur sous-performant",
      text: "Il fonctionne, il ne tombe pas en panne. Il produit simplement moins que ses voisins.",
    },
  ],
  closing:
    "Aucun seuil franchi, aucune alerte — vous les découvrez quand elles ont déjà coûté.",
} as const;

/* ============================================================
   Bloc « Anticipation » — le goût de la prédiction (prospectif)

   Logique : les causes sont visibles avant les conséquences.
   Un épisode de poussière précède la salissure ; la canicule
   précède la baisse de rendement ; la tempête précède les casses.

   ⚠️ Aucune capacité décrite ici n'existe encore. C'est
   précisément ce que le fake door teste. Le CTA reste une liste
   d'attente — aucune promesse de livraison.
   ============================================================ */

export const anticipation = {
  title: "La plupart de ces pertes s'annoncent",
  lead: "Les causes sont visibles avant les conséquences. Un événement météo n'est pas seulement un risque : c'est une fenêtre pour agir.",
  items: [
    {
      event: "Épisode de poussière, vent de sable",
      action:
        "Planifier un nettoyage avant que la perte ne s'installe, plutôt que de la découvrir au relevé mensuel.",
    },
    {
      event: "Chaleur extrême annoncée",
      action:
        "Anticiper la baisse de rendement liée à la température et la ventilation des locaux techniques.",
    },
    {
      event: "Tempête, grêle, débris",
      action:
        "Cibler l'inspection sur les tables exposées : modules cassés, feuillages, gravillons — au lieu de tout parcourir.",
    },
  ],
  closing: "Rendre votre parc résilient, au lieu de constater les dégâts.",
} as const;

/* ============================================================
   Appel final — porte l'ancre #waitlist

   Les deux CTA (hero et bas de page) pointent ici. À l'étape 4,
   le formulaire prend place dans cette section : l'ancre reste
   valable, rien à changer ailleurs.
   ============================================================ */

export const finalCta = {
  title: "Savoir ce que votre parc perd en silence",
  lead: "ClariVolt n'est pas encore ouvert. Les premiers inscrits sont ceux que nous appelons en premier.",
  cta: { label: "Rejoindre la liste d'accès anticipé" },
  note: "Nous contactons les premiers inscrits pour comprendre leur parc.",
} as const;

/* ============================================================
   Pied de page
   ============================================================ */

export const footer = {
  location: "ClariVolt, Lyon",
  participation:
    "Participation à Start-Up Lyon — French Tech Saint-Étienne — Lyon",
  contact: {
    label: "Contact",
    name: "Carolina Matoszko",
    href: "https://www.linkedin.com/in/carolina-matoszko-b52059a0/",
  },
} as const;
