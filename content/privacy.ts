/**
 * Politique de confidentialité.
 *
 * `[À COMPLÉTER]` = information que seule Carolina peut fournir.
 * Ne jamais inventer une identité juridique ou un numéro SIREN.
 *
 * ⚠️ À revoir à l'étape 6 : si une mesure d'audience est ajoutée,
 * la section « Cookies » doit être mise à jour.
 */

export const privacy = {
  title: "Politique de confidentialité",
  updated: "Dernière mise à jour : 20 septembre 2026",
  intro:
    "Cette page décrit comment les données transmises via le formulaire d'inscription à la liste d'accès anticipé de ClariVolt sont traitées.",
  sections: [
    {
      heading: "Responsable du traitement",
      body: "[À COMPLÉTER : nom ou raison sociale] — [À COMPLÉTER : adresse] — SIREN [À COMPLÉTER]. Contact : [À COMPLÉTER : adresse e-mail de contact].",
    },
    {
      heading: "Données collectées",
      body: "Une seule donnée est collectée : votre adresse e-mail. Aucun nom, aucune information sur votre société, aucune donnée de navigation ne vous est demandée.",
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
      body: "Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de portabilité de vos données. Pour les exercer, écrivez à [À COMPLÉTER : adresse e-mail de contact]. Votre demande est traitée dans un délai d'un mois.",
    },
    {
      heading: "Réclamation",
      body: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL — www.cnil.fr.",
    },
    {
      heading: "Cookies",
      body: "Ce site ne dépose aucun cookie de suivi ni de mesure d'audience.",
    },
  ],
  back: "Retour à l'accueil",
} as const;
