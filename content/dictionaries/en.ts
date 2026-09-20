import type { Dictionary } from "./fr";

/**
 * English dictionary.
 *
 * `satisfies Dictionary` is what prevents regressions: a missing or
 * misspelt key fails the build instead of rendering "undefined" in
 * production. Never loosen this.
 *
 * Tone: professional B2B SaaS. "parc" is rendered as "portfolio"
 * throughout — the audience manages a portfolio of solar assets.
 */
export const en = {
  hero: {
    eyebrow: "Solar portfolio asset managers",

    title: ["You can hear a water leak.", "You can't hear an energy loss."],

    lead: "A drop in output from your solar panels makes no sound. It looks like an overcast sky, settles in over weeks, and only surfaces in the year-end figures.",

    whyNow:
      "And the value of a kWh keeps shifting: falling resale prices, scarce public tenders, a move towards self-consumption. Every kWh you fail to produce costs you more than it did yesterday.",

    cta: {
      label: "Join the early access list",
      href: "#waitlist",
    },

    ctaNote: "We contact the first registrants to understand their portfolio.",
  },

  problem: {
    title: "What eats into your output never triggers an alarm",
    items: [
      {
        term: "Soiling",
        text: "Output falls slowly, without ever crossing a threshold. No sensor reports a dirty panel.",
      },
      {
        term: "Drift",
        text: "The gap builds over weeks, lost in weather variability. A day at −8% looks like a cloudy day.",
      },
      {
        term: "Underperforming inverter",
        text: "It runs, it does not fail. It simply produces less than its neighbours.",
      },
    ],
    closing:
      "No threshold crossed, no alert — you find out once they have already cost you.",
  },

  anticipation: {
    title: "Most of these losses announce themselves",
    lead: "Causes are visible before consequences. A weather event is not only a risk: it is a window to act.",
    items: [
      {
        event: "Dust episode, sand-laden wind",
        action:
          "Schedule a clean before the loss sets in, rather than discovering it in the monthly reading.",
      },
      {
        event: "Extreme heat forecast",
        action:
          "Anticipate the temperature-driven drop in yield and the ventilation of technical rooms.",
      },
      {
        event: "Storm, hail, debris",
        action:
          "Focus the inspection on exposed rows: broken modules, foliage, gravel — instead of walking the whole site.",
      },
    ],
    closing: "Make your portfolio resilient, instead of recording the damage.",
  },

  finalCta: {
    title: "Know what your portfolio is quietly losing",
    lead: "We contact the first registrants to understand their portfolio.",
    cta: { label: "Join the early access list" },
  },

  thanks: {
    title: "You are on the list",
    lead: "Thank you. We will let you know when ClariVolt opens.",
    next: "We contact the first registrants to understand their portfolio: if yours is a fit, you will receive an invitation to talk.",
    back: "Back to home",
  },

  form: {
    emailLabel: "Your work email address",
    emailPlaceholder: "first.last@example.com",
    submit: "Join the list",
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
      "This page describes how the data submitted through the ClariVolt early-access sign-up form is processed.",
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
    title: "ClariVolt — The performance of your solar portfolio",
    description:
      "Silent losses — soiling, drift, underperforming inverters — never trigger an alarm. ClariVolt makes them visible.",
  },
} satisfies Dictionary;
