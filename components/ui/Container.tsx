import type { ReactNode } from "react";

/**
 * Conteneur de contenu.
 *
 * C'est lui qui garantit l'alignement vérifié à l'étape 2 : le
 * sélecteur de langue, les titres et le formulaire partagent tous
 * cette largeur et ces marges. Modifier la largeur du site se fait
 * ici, une fois — c'était jusqu'ici copié dans huit fichiers.
 *
 * `padding` choisit l'espacement vertical ; les valeurs existantes
 * sont reprises telles quelles pour ne rien déplacer.
 */
const paddings = {
  /** En-tête */
  header: "py-4",
  /** Sections de la page d'accueil */
  section: "py-16 sm:py-20",
  /** Page de remerciement */
  wide: "py-16 sm:py-24",
  /** Page de politique de confidentialité */
  document: "py-12 sm:py-16",
  /** Pied de page */
  footer: "py-10",
  /** Hero : asymétrique, l'accroche doit être lisible dès l'ouverture */
  hero: "pt-8 pb-20 sm:pt-12 sm:pb-28",
} as const;

export function Container({
  children,
  padding = "section",
  className = "",
}: {
  children: ReactNode;
  padding?: keyof typeof paddings;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-3xl px-4 sm:px-6 ${paddings[padding]}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
