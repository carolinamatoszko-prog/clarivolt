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
  lead: "La baisse de production de vos panneaux solaires ne fait pas de bruit. Elle se confond avec un ciel couvert, s'installe sur des semaines, et n'apparaît qu'au bilan.",

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
};

/* ============================================================
   Bloc « Problème » — les pertes silencieuses (rétrospectif)
   ============================================================ */

const problem = {
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
};

/* ============================================================
   Bloc « Anticipation » — le goût de la prédiction (prospectif)

   Logique : les causes sont visibles avant les conséquences.
   Un épisode de poussière précède la salissure ; la canicule
   précède la baisse de rendement ; la tempête précède les casses.

   ⚠️ Aucune capacité décrite ici n'existe encore. C'est
   précisément ce que le fake door teste. Le CTA reste une liste
   d'attente — aucune promesse de livraison.
   ============================================================ */

const anticipation = {
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
