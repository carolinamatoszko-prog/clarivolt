import Image from "next/image";
import { brand } from "@/content/brand";

/**
 * Logotype : la marque (jauge + éclair) + le nom en texte.
 *
 * La jauge vient du logo d'origine, recadrée en conservant son
 * fond navy — c'est ce qui la rend utilisable sur une page claire
 * sans frange d'anti-aliasing. Le baseline « Monitoring &
 * maintenance » a été retiré du fichier.
 *
 * Le nom reste du texte : net à toute taille, lu par un lecteur
 * d'écran, recolorable pour les tests.
 */
export function Wordmark() {
  const [first, second] = brand.nameParts;

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={brand.mark.src}
        alt=""
        width={349}
        height={264}
        priority
        className="h-10 w-auto rounded-lg"
      />
      <span className="text-xl font-bold tracking-tight text-ink-900">
        {first}
        <span className="text-accent-700">{second}</span>
      </span>
    </span>
  );
}
