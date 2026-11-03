import type { Dictionary } from "./fr";

/**
 * English dictionary.
 *
 * `satisfies Dictionary` is what prevents regressions: a missing or
 * misspelt key fails the build instead of rendering "undefined" in
 * production. Never loosen this.
 *
 * Tone: professional B2B SaaS. Fixed renderings, so the same term
 * never arrives twice in two shapes: "parc" → "portfolio",
 * "centrale" → "plant", "taux de disponibilité" → "availability
 * rate", "GMAO" → "CMMS", "responsable d'exploitation" →
 * "operations manager".
 */
export const en = {
  hero: {
    eyebrow: "IPPs (independent power producers) · asset managers",

    title: [
      "Your solar plant is losing production.",
      "The question is when to act.",
    ],

    lead: "A solar plant loses production without anything breaking. Those losses escape the availability rate, and the intervention follows the contract calendar — with no way of knowing whether this is the right moment.",

    /**
     * The only figures on the page, each carrying its source in the
     * sentence. The derived ones (18 days of production, €89k, "4×
     * what you pay") stay out: they chain working assumptions the
     * French file lists, and a landing page cannot display those
     * caveats alongside them.
     */
    whyNow:
      "France's installed base has passed 33 GW and targets 48 GW by 2030 (SDES, March 2026; PPE3), while selling prices fall. Every lost kWh weighs more heavily on the margin.",

    cta: {
      label: "Talk to us about your portfolio",
      href: "#waitlist",
    },

    ctaNote: "We contact the first registrants to understand their portfolio.",
  },

  problem: {
    title: "The contract is met, and the production is still missing",
    items: [
      {
        term: "An inverter clipping or drifting",
        text: "It stays connected and sends no fault signal. It simply produces less than its neighbours, sometimes for months.",
      },
      {
        term: "A disconnected string",
        text: "Part of the array stops while the rest keeps producing. At plant level, the gap blends into a less sunny day.",
      },
      {
        term: "Shading",
        text: "Vegetation growing, a neighbouring structure: the shadow spreads slowly and follows the seasons, without ever interrupting anything.",
      },
      {
        term: "Soiling",
        text: "Production falls slowly across the whole array. It is the best-known loss, and often the least profitable to treat on its own: a cleaning recovers only part of it.",
      },
    ],
    closing:
      "None of these gaps stops a piece of equipment: availability stays green, no alarm goes off, and the intervention still arrives on the date set by the contract.",
  },

  anticipation: {
    eyebrow: "Vision",
    title: "Which intervention, at what moment, for how many euros",
    lead: "Our vision: compare actual production with expected production, weather included, and put a euro figure on every gap — so as to work out the moment when an intervention earns more than it costs.",
    items: [
      {
        term: "The decision rule",
        text: "The loss accumulates for as long as you wait; the intervention, for its part, has a fixed cost. Our goal is to track both curves plant by plant: the point where they cross gives the date beyond which waiting costs more than acting.",
      },
      {
        term: "Plugging in, replacing nothing",
        text: "Our approach aims to read your existing supervision data, read-only and with no data project. Measuring the gap adds to what your teams already monitor — it does not take its place.",
      },
      {
        term: "The schedule stays with you",
        text: "ClariVolt does not manage interventions: they stay in your CMMS. Our goal is to say what to handle first, based on the euros at stake; the decision and the schedule remain yours.",
      },
    ],
    closing:
      "Doing nothing is a decision too — you still need to know what it costs.",
  },

  finalCta: {
    title: "Know when your interventions are worth what they cost",
    lead: "We are at the prototype stage, tested on exports reconstructed from real data. Next step: two diagnostics on data from plants in operation. We contact the first registrants to understand their portfolio.",
    cta: { label: "Talk to us about your portfolio" },
  },

  thanks: {
    title: "Your request has been recorded",
    lead: "Thank you. We will come back to you to arrange a conversation.",
    next: "We contact the first registrants to understand their portfolio: if yours is a fit, you will receive an invitation to talk about it.",
    back: "Back to home",
  },

  form: {
    emailLabel: "Your work email address",
    emailPlaceholder: "first.last@example.com",
    submit: "Request a conversation",
    submitting: "Sending…",
    consent:
      "I agree to be contacted about ClariVolt. My address will not be sold or shared.",
    consentLinkLabel: "Privacy policy",
    errors: {
      invalidEmail: "This email address does not look valid.",
      consentRequired: "Please tick the consent box to continue.",
      unavailable: "Sign-up is temporarily unavailable. Please try again later.",
    },
  },

  footer: {
    location: "ClariVolt, Lyon",
    participation:
      "Part of Start-Up Lyon — French Tech Saint-Étienne — Lyon",
    privacyLabel: "Privacy policy",
    contact: {
      label: "Contact:",
      name: "Carolina Matoszko",
      href: "https://www.linkedin.com/in/carolina-matoszko-b52059a0/",
    },
  },

  privacy: {
    title: "Privacy policy",
    updated: "Last updated: 20 September 2026",
    intro:
      "This page describes how the data submitted through the ClariVolt contact form is processed.",
    sections: [
      {
        heading: "Data controller",
        body: "Carolina Matoszko, acting in a personal capacity for the ClariVolt project — Lyon, France. The project is not yet incorporated as a company: no SIREN number has been assigned to date. For any question, write to carolina.matoszko@gmail.com.",
      },
      {
        heading: "Data collected",
        body: "The form collects a single item of data: your email address. No name and no information about your company is requested. Anonymous audience measurement is added to this, described below.",
      },
      {
        heading: "Purpose",
        body: "Your address is used only to inform you when ClariVolt opens and to offer a conversation about the needs of your portfolio. It is neither sold, shared, nor used for any other purpose.",
      },
      {
        heading: "Legal basis",
        body: "Your consent, collected through the checkbox on the form. That box is never pre-ticked: without an action on your part, no data is transmitted.",
      },
      {
        heading: "Recipient",
        body: "Your address is stored with Brevo (Sendinblue SAS, a company registered with the Paris Trade and Companies Register under number 498 019 298), acting as a processor for hosting the list and sending messages. The data is hosted in the European Union.",
      },
      {
        heading: "Retention period",
        body: "Your address is kept until you withdraw your consent, or at the latest until the end of the ClariVolt project. Every message sent includes an unsubscribe link.",
      },
      {
        heading: "Your rights",
        body: "You have the right to access, rectify, erase, object to and port your data. To exercise these rights, write to carolina.matoszko@gmail.com. Your request is handled within one month.",
      },
      {
        heading: "Complaints",
        body: "If you believe your rights are not being respected, you may lodge a complaint with the CNIL, the French data protection authority — www.cnil.fr.",
      },
      {
        heading: "Cookies",
        body: "This site sets no cookies, neither for tracking nor for audience measurement.",
      },
      {
        heading: "Audience measurement",
        body: "This site uses Vercel Web Analytics, a cookie-free audience measurement. It records, in aggregate: the page viewed, the referring site, the device type, the browser and an approximate location (country, region, city). No IP address is retained and no identifier allows you to be followed from one site to another: the visitor is recognised by a fingerprint computed from the request, deleted after 24 hours. This data is never matched with your email address.",
      },
    ],
    back: "Back to home",
    languageNote:
      "This English version is provided for convenience. The processing is governed by French and EU law, and the French version is the reference text.",
  },

  meta: {
    title: "ClariVolt — When to act on your solar plants",
    description:
      "Production losses escape the availability rate, and the intervention follows the contract calendar. ClariVolt aims to calculate the moment when it earns more than it costs.",
  },
} satisfies Dictionary;
