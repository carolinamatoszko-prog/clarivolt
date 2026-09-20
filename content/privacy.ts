/**
 * Politique de confidentialité.
 *
 * Le responsable du traitement est une personne physique :
 * ClariVolt n'est pas encore constitué en société, donc aucun
 * SIREN n'existe. Ne jamais présenter « ClariVolt » comme une
 * entité juridique tant que ce n'est pas le cas.
 *
 * Adresse postale volontairement absente : le RGPD exige une
 * identité et un moyen de contact, pas le domicile d'une
 * personne physique sur un site ouvert.
 *
 * ⚠️ À revoir à la création de la société : raison sociale, SIREN,
 * adresse.
 *
 * La section « Mesure d'audience » décrit exactement ce que Vercel
 * Web Analytics enregistre, d'après sa documentation. Si l'outil
 * change, ce texte doit changer avec lui.
 */

export const privacyContactEmail = "carolina.matoszko@gmail.com";

export const privacy = {
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
} as const;
