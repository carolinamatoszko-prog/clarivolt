/**
 * Contenu de la landing page.
 *
 * Tout le texte vit ici, hors des composants React. Tester une
 * nouvelle hypothèse = modifier ce fichier, pas le JSX.
 *
 * RÈGLE : aucun chiffre non vérifié. Un nombre non validé s'écrit
 * `[CHIFFRE À VALIDER]` — on ne l'invente pas. Un chiffre vérifié
 * porte sa source dans la phrase même : sans source affichée, il
 * redevient une affirmation indéfendable en entretien.
 *
 * Cible : responsables d'exploitation de centrales photovoltaïques
 * (France) — le décideur qui pilote le budget O&M, qu'il soit
 * interne ou sous-traité. Le prestataire O&M reste hors périmètre :
 * sa promesse est inverse (prouver sa performance à son client),
 * ce serait une autre page.
 *
 * Angle : on ne vend pas l'alerte, on vend le moment rentable. La
 * supervision détecte déjà l'arrêt ; ce qui manque, c'est de savoir
 * quand l'intervention rapporte plus qu'elle ne coûte. La version
 * précédente vendait la détection de pertes invisibles — c'est ce
 * déplacement qu'il faut garder en tête avant de retoucher un
 * texte ici.
 */

const hero = {
  /**
   * L'étiquette nomme le métier ; c'est le titre juste en dessous
   * qui pose le solaire (« votre centrale solaire »). Si le titre
   * change un jour, vérifier que la page dit toujours de quelle
   * énergie elle parle avant le premier paragraphe.
   */
  eyebrow: "IPP (Producteur Indépendant d'Énergie) · asset managers",

  /** Une entrée par ligne — le saut de ligne est intentionnel. */
  title: [
    "Votre centrale solaire perd de la production.",
    "Reste à savoir quand intervenir.",
  ],

  /**
   * Le Hero pose le phénomène puis bascule, il n'énumère pas : les
   * causes techniques (dérive, string déconnectée, ombrage)
   * appartiennent au bloc Problème. Éviter de dire deux fois la
   * même chose à deux endroits.
   *
   * La dernière phrase porte l'angle entier — la supervision
   * mesure l'écart, elle ne dit pas quand l'intervention vaut son
   * coût. Ne pas la couper du reste.
   */
  lead: "Une centrale photovoltaïque perd de la production sans que rien ne casse. Ces pertes échappent au taux de disponibilité, et l'intervention suit le calendrier du contrat — sans savoir si c'est le bon moment.",

  /**
   * Le « pourquoi maintenant » : l'économie du kWh.
   *
   * Seuls chiffres de la page, et chacun porte sa source dans la
   * phrase. Les chiffres dérivés du dossier (18 jours de
   * production, 89 k€, « 4× ce qu'il paie ») restent dehors : ils
   * enchaînent des hypothèses de travail — 1 200 kWh/kWc, 50 % de
   * la perte récupérable, 25 % du gain — qu'une landing ne peut
   * pas afficher avec elles. Sans ces réserves, ce sont des
   * promesses de résultat.
   *
   * La baisse du prix de vente reste volontairement qualitative :
   * le −10 % des derniers appels d'offres au sol est exact et
   * sourcé, mais un pourcentage attire la discussion sur lui-même
   * au lieu de la laisser sur la marge.
   */
  whyNow:
    "Le parc français dépasse 33 GW et vise 48 GW en 2030 (SDES, mars 2026 ; PPE3), alors que le prix de vente baisse. Chaque kWh perdu pèse davantage sur la marge.",

  cta: {
    /**
     * Plus « accès anticipé » : la page ne promet plus l'ouverture
     * d'un produit, elle demande une conversation. L'ancre
     * #waitlist ne change pas — c'est elle que visent les deux CTA
     * et l'id de la section FinalCta.
     */
    label: "Échanger sur votre parc",
    href: "#waitlist",
  },

  /** Promesse tenable manuellement. Ne rien promettre de plus. */
  ctaNote: "Nous contactons les premiers inscrits pour comprendre leur parc.",
};

/* ============================================================
   Bloc « Problème » — les types de perte, puis le constat

   Les cartes listent ce qui fait perdre de la production, repris du
   prototype de diagnostic : l'onduleur domine, l'encrassement est
   la perte la plus connue et la moins rentable à traiter seule.

   L'angle n'est pas dans les cartes mais autour : le titre et la
   phrase de clôture portent le constat (disponibilité au vert,
   aucune alarme, intervention au calendrier). Déplacer l'un des
   deux dans une carte ferait perdre le lien entre les types de
   perte et le moment de l'intervention.
   ============================================================ */

const problem = {
  title: "Le contrat est tenu, et la production manque quand même",
  items: [
    {
      term: "Onduleur qui bride ou qui dérive",
      text: "Il reste connecté et n'envoie aucun signal de défaut. Il produit simplement moins que ses voisins, parfois pendant des mois.",
    },
    {
      term: "String déconnectée",
      text: "Une partie du champ s'arrête, le reste continue de produire. À l'échelle de la centrale, l'écart se confond avec une journée moins ensoleillée.",
    },
    {
      term: "Ombrage",
      text: "Une végétation qui pousse, une structure voisine : l'ombre portée s'étend lentement et suit les saisons, sans jamais rien interrompre.",
    },
    {
      term: "Encrassement",
      text: "La production baisse lentement sur l'ensemble du champ. C'est la perte la plus connue, et souvent la moins rentable à traiter seule : un nettoyage n'en rattrape qu'une partie.",
    },
  ],
  closing:
    "Aucun de ces écarts n'arrête un équipement : la disponibilité reste au vert, aucune alarme ne se déclenche, et l'intervention arrive quand même à la date prévue au contrat.",
};

/* ============================================================
   Bloc « Vision » — ce vers quoi le produit est construit

   ⚠️ Aucune capacité décrite ici n'existe encore, et le texte le
   dit lui-même : « notre approche vise à », « notre objectif est
   de ». C'est précisément ce que le fake door teste — aucune
   promesse de livraison.

   Exception assumée : « ClariVolt ne gère pas les interventions »
   est au présent. Ce n'est pas une capacité annoncée mais une
   limite de périmètre, et c'est elle qui désarme l'objection
   « vous venez marcher sur mon O&M ».

   La météo n'est plus une promesse : elle est devenue un intrant
   du calcul de production attendue. L'ancienne entrée sur l'impact
   climatique a donc disparu — la rouvrir reviendrait à poser une
   seconde proposition de valeur sur la même page.

   Trois entrées : la règle de décision, le branchement, la
   frontière. Les cartes sont empilées pleine largeur, comme le
   bloc Problème.
   ============================================================ */

const anticipation = {
  eyebrow: "Vision",
  title: "Quelle intervention, à quel moment, pour combien d'euros",
  lead: "Notre vision : comparer la production réelle à la production attendue, météo comprise, et chiffrer en euros ce que chaque écart coûte — pour calculer le moment où l'intervention rapporte plus qu'elle ne coûte.",
  items: [
    {
      term: "La règle de décision",
      text: "La perte s'accumule tant qu'on attend ; l'intervention, elle, a un coût fixe. Notre objectif est de suivre ces deux courbes centrale par centrale : le point où elles se croisent donne la date au-delà de laquelle attendre coûte plus cher qu'intervenir.",
    },
    {
      term: "Se brancher, sans rien remplacer",
      text: "Notre approche vise à lire les données de votre supervision existante, en lecture seule et sans projet data. La mesure de l'écart s'ajoute à ce que vos équipes suivent déjà — elle ne s'y substitue pas.",
    },
    {
      term: "Le planning reste chez vous",
      text: "ClariVolt ne gère pas les interventions : elles restent dans votre GMAO. Notre objectif est de dire quoi traiter en premier, selon les euros en jeu ; la décision et le calendrier vous appartiennent.",
    },
  ],
  closing:
    "Ne rien faire est aussi une décision — encore faut-il savoir ce qu'elle coûte.",
};

/* ============================================================
   Appel final — porte l'ancre #waitlist

   Les deux CTA (hero et bas de page) pointent ici. À l'étape 4,
   le formulaire prend place dans cette section : l'ancre reste
   valable, rien à changer ailleurs.
   ============================================================ */

const finalCta = {
  title: "Savoir quand vos interventions valent ce qu'elles coûtent",
  /**
   * L'état réel du projet est dit ici, là où l'on demande quelque
   * chose. Une page qui demande des données sans dire où elle en
   * est se décrédibilise au premier échange.
   */
  lead: "Nous en sommes au prototype, testé sur des exports reconstitués à partir de données réelles. Prochaine étape : deux diagnostics sur les données de centrales en exploitation. Nous contactons les premiers inscrits pour comprendre leur parc.",
  cta: { label: "Échanger sur votre parc" },
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
  title: "Votre demande est enregistrée",
  lead: "Merci. Nous revenons vers vous pour convenir d'un échange.",
  next: "Nous contactons les premiers inscrits pour comprendre leur parc : si le vôtre s'y prête, vous recevrez une invitation à en parler.",
  back: "Retour à l'accueil",
};

const form = {
  emailLabel: "Votre adresse e-mail professionnelle",
  emailPlaceholder: "prenom.nom@exemple.fr",
  submit: "Demander un échange",
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
    label: "Contact :",
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
    /**
     * Décrit le formulaire, pas le traitement : la finalité, les
     * données collectées, le sous-traitant et les droits sont
     * inchangés, donc la date de mise à jour ne bouge pas. Seul le
     * nom du formulaire suit le CTA, qui ne parle plus d'« accès
     * anticipé ».
     */
    intro:
      "Cette page décrit comment les données transmises via le formulaire de contact de ClariVolt sont traitées.",
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
    title: "ClariVolt — Quand intervenir sur vos centrales photovoltaïques",
    description:
      "Les pertes de production échappent au taux de disponibilité, et l'intervention suit le calendrier du contrat. ClariVolt vise à calculer le moment où elle rapporte plus qu'elle ne coûte.",
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
