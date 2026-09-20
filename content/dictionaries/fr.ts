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

const hero = {
  eyebrow: "Asset managers de parcs photovoltaïques",

  /** Une entrée par ligne — le saut de ligne est intentionnel. */
  title: ["Une fuite d'eau, on l'entend.", "Une perte d'énergie, non."],

  /**
   * Le Hero pose le phénomène, il n'énumère pas : l'énumération
   * (salissure / dérive / onduleur) appartient au bloc Problème.
   * Éviter de dire deux fois la même chose à deux endroits.
   */
  lead: "La baisse de production de vos panneaux solaires ne fait pas de bruit. Elle passe inaperçue pendant des mois. Le jour où vous constatez l'écart de rendement, l'accumulation de ces micro-pertes a déjà coûté cher.",

  /**
   * Le « pourquoi maintenant » : l'économie du kWh.
   * Formulé qualitativement, sans chiffre — la pression sur la
   * rentabilité, pas un pourcentage inventé.
   */
  whyNow:
    "Dans le contexte énergétique actuel, l'exigence de rentabilité est maximale : chaque kWh manquant dégrade directement votre retour sur investissement.",

  cta: {
    label: "Rejoindre la liste d'accès anticipé",
    href: "#waitlist",
  },

  /** Promesse tenable manuellement. Ne rien promettre de plus. */
  ctaNote: "Nous contactons les premiers inscrits pour comprendre leur parc.",
};

/* ============================================================
   Bloc « Problème » — les pertes silencieuses (rétrospectif)
   ============================================================ */

const problem = {
  title: "Sans analyse fine, ces sous-performances peuvent passer inaperçues",
  items: [
    {
      term: "Salissure",
      text: "La production baisse lentement, sans jamais attirer l'attention, jusqu'à provoquer des dégâts plus importants sur les panneaux.",
    },
    {
      term: "Anomalies silencieuses",
      text: "Parce que votre production varie naturellement avec la météo, l'apparition d'une nouvelle anomalie passe totalement inaperçue. Elle se fond simplement dans les jours nuageux.",
    },
    {
      term: "Onduleur fatigué",
      text: "Il ne tombe pas nécessairement en panne et n'envoie aucun signal de défaut. Il reste connecté, mais produit tout simplement moins que ses voisins.",
    },
  ],
  closing:
    "Invisibles, ces pertes s'accumulent et pénalisent votre rentabilité en continu.",
};

/* ============================================================
   Bloc « Vision » — ce vers quoi le produit est construit

   ⚠️ Aucune capacité décrite ici n'existe encore, et le texte le
   dit lui-même : « notre approche vise à », « l'objectif est de ».
   C'est précisément ce que le fake door teste. Le CTA reste une
   liste d'attente — aucune promesse de livraison.

   Deux entrées seulement : détecter, puis anticiper. Les cartes
   sont empilées pleine largeur, comme le bloc Problème.
   ============================================================ */

const anticipation = {
  eyebrow: "Vision",
  title:
    "Votre donnée, analysée en profondeur, pour optimiser votre production",
  lead: "Notre vision : une analyse approfondie de vos données de production, combinée à la modélisation météorologique, pour transformer l'incertitude en stratégie de résilience.",
  items: [
    {
      term: "Détecter et comprendre les pertes silencieuses",
      text: "Plutôt que de subir des baisses de production inexpliquées, notre approche vise à analyser en profondeur l'historique et les flux de données de votre parc. En croisant les variables de performance, l'objectif est de mettre en lumière les schémas invisibles pour comprendre l'origine exacte des dysfonctionnements et anticiper les problèmes potentiels avant qu'ils n'impactent la rentabilité.",
    },
    {
      term: "Anticiper l'impact climatique",
      text: "Face aux dérèglements climatiques, les gestionnaires d'actifs ont besoin de visibilité. Notre approche vise à intégrer les modèles météorologiques pour simuler et anticiper l'impact des aléas sur vos installations — passer d'une maintenance réactive et aveugle à une planification proactive des interventions.",
    },
  ],
  closing: "C'est la direction vers laquelle nous construisons ClariVolt.",
};

/* ============================================================
   Appel final — porte l'ancre #waitlist

   Les deux CTA (hero et bas de page) pointent ici. À l'étape 4,
   le formulaire prend place dans cette section : l'ancre reste
   valable, rien à changer ailleurs.
   ============================================================ */

const finalCta = {
  title: "Savoir ce que votre parc perd en silence",
  lead: "Nous contactons les premiers inscrits pour comprendre leur parc.",
  cta: { label: "Rejoindre la liste d'accès anticipé" },
  /**
   * `note` retirée : elle portait exactement la phrase devenue le
   * `lead`, qui serait donc apparue deux fois dans le même bloc.
   * Pour la rétablir, ajouter la clé ici et la ligne correspondante
   * dans components/FinalCta.tsx.
   */
};

/**
 * Page de confirmation.
 *
 * Elle existe pour une raison de mesure : le plan Hobby de Vercel
 * n'ouvre pas les événements personnalisés (réservés aux plans Pro
 * et Enterprise). Une inscription réussie doit donc produire une
 * page vue distincte, sinon la conversion est incalculable.
 *
 *   taux de conversion = pages vues /merci ÷ pages vues /
 */
const thanks = {
  title: "Vous êtes sur la liste",
  lead: "Merci. Nous vous préviendrons à l'ouverture de ClariVolt.",
  next: "Nous contactons les premiers inscrits pour comprendre leur parc : si votre portefeuille s'y prête, vous recevrez une invitation à échanger.",
  back: "Retour à l'accueil",
};

const form = {
  emailLabel: "Votre adresse e-mail professionnelle",
  emailPlaceholder: "prenom.nom@exemple.fr",
  submit: "Rejoindre la liste",
  submitting: "Envoi…",
  /** RGPD : case jamais pré-cochée, consentement explicite. */
  consent:
    "J'accepte d'être contacté(e) au sujet de ClariVolt. Mon adresse ne sera ni revendue ni partagée.",
  consentLinkLabel: "Politique de confidentialité",
  /**
   * Messages d'erreur. La Server Action renvoie une clé, pas une
   * phrase : elle n'a donc pas à connaître la langue affichée.
   */
  errors: {
    invalidEmail: "Cette adresse e-mail semble invalide.",
    consentRequired: "Merci de cocher la case de consentement pour continuer.",
    unavailable: "Inscription momentanément indisponible. Réessayez plus tard.",
  },
};

/* ============================================================
   Pied de page
   ============================================================ */

const footer = {
  location: "ClariVolt, Lyon",
  participation:
    "Participation à Start-Up Lyon — French Tech Saint-Étienne — Lyon",
  privacyLabel: "Politique de confidentialité",
  contact: {
    /** Espace insécable avant les deux-points : typographie française. */
    label: "Contact :",
    name: "Carolina Matoszko",
    href: "https://www.linkedin.com/in/carolina-matoszko-b52059a0/",
  },
};

/**
 * Dictionnaire français — référence.
 *
 * Le dictionnaire anglais est typé contre celui-ci : toute clé
 * manquante ou en trop côté anglais casse la compilation, au lieu
 * d'afficher « undefined » en production.
 */
export const fr = {
  hero,
  problem,
  anticipation,
  finalCta,
  thanks,
  form,
  footer,
  privacy: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 20 septembre 2026",
    intro:
      "Cette page décrit comment les données transmises via le formulaire d'inscription à la liste d'accès anticipé de ClariVolt sont traitées.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: "Carolina Matoszko, agissant à titre individuel pour le projet ClariVolt — Lyon, France. Le projet n'est pas encore constitué en société : aucun numéro SIREN n'est attribué à ce jour. Pour toute question, écrivez à carolina.matoszko@gmail.com.",
      },
      {
        heading: "Données collectées",
        body: "Le formulaire ne collecte qu'une seule donnée : votre adresse e-mail. Aucun nom ni information sur votre société ne vous est demandé. S'y ajoute une mesure d'audience anonyme, décrite plus bas.",
      },
      {
        heading: "Finalité",
        body: "Votre adresse sert uniquement à vous informer de l'ouverture de ClariVolt et à vous proposer un échange afin de comprendre les besoins de votre parc. Elle n'est ni revendue, ni partagée, ni utilisée pour une autre finalité.",
      },
      {
        heading: "Base légale",
        body: "Votre consentement, recueilli par la case à cocher du formulaire. Cette case n'est jamais pré-cochée : sans action de votre part, aucune donnée n'est transmise.",
      },
      {
        heading: "Destinataire",
        body: "Votre adresse est enregistrée chez Brevo (Sendinblue SAS, société immatriculée au RCS de Paris sous le numéro 498 019 298), qui agit comme sous-traitant pour l'hébergement de la liste et l'envoi des messages. Les données sont hébergées dans l'Union européenne.",
      },
      {
        heading: "Durée de conservation",
        body: "Votre adresse est conservée jusqu'au retrait de votre consentement, ou au plus tard à la fin du projet ClariVolt. Chaque message envoyé comporte un lien de désinscription.",
      },
      {
        heading: "Vos droits",
        body: "Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de portabilité de vos données. Pour les exercer, écrivez à carolina.matoszko@gmail.com. Votre demande est traitée dans un délai d'un mois.",
      },
      {
        heading: "Réclamation",
        body: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL — www.cnil.fr.",
      },
      {
        heading: "Cookies",
        body: "Ce site ne dépose aucun cookie, ni de suivi ni de mesure d'audience.",
      },
      {
        heading: "Mesure d'audience",
        body: "Ce site utilise Vercel Web Analytics, une mesure d'audience sans cookie. Elle enregistre de façon agrégée : la page consultée, le site référent, le type d'appareil, le navigateur et une localisation approximative (pays, région, ville). Aucune adresse IP n'est conservée et aucun identifiant ne permet de vous suivre d'un site à l'autre : le visiteur est reconnu par une empreinte calculée à partir de la requête, supprimée au bout de 24 heures. Ces données ne sont pas rapprochées de votre adresse e-mail.",
      },
    ],
    back: "Retour à l'accueil",
    /** Vide en français : cette version EST le texte de référence. */
    languageNote: "",
  },

  meta: {
    title: "ClariVolt — La performance de votre parc photovoltaïque",
    description:
      "Les pertes silencieuses — salissure, dérive, onduleur sous-performant — ne déclenchent aucune alarme. ClariVolt les rend visibles.",
  },
};

/**
 * Forme que tout dictionnaire doit respecter.
 *
 * Pas de `as const` sur `fr` : il figerait chaque phrase en type
 * littéral, et TypeScript exigerait alors que l'anglais soit
 * mot pour mot identique au français. On veut contraindre la
 * FORME (quelles clés, quels types), pas le contenu.
 */
export type Dictionary = typeof fr;
