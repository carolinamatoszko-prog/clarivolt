/**
 * Identité de marque — identique dans toutes les langues.
 * Volontairement hors des dictionnaires : rien à y traduire.
 */
export const brand = {
  name: "ClariVolt",
  /** Découpage pour le logotype : « Clari » en encre, « Volt » en vert. */
  nameParts: ["Clari", "Volt"],
  mark: {
    src: "/clarivolt-mark.png",
    alt: "ClariVolt",
  },
} as const;
