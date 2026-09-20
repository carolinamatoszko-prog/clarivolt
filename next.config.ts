import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Redirections de langue.
   *
   * Volontairement ici plutôt que dans un `proxy.ts` : la langue par
   * défaut est fixe (français), il n'y a donc aucune décision à
   * prendre à l'exécution. Ces règles sont statiques, gérées par
   * l'infrastructure, et ne coûtent rien à chaque requête.
   *
   * Si un jour on veut détecter `Accept-Language`, il faudra passer
   * à un `proxy.ts` (l'ancien `middleware`, désormais déprécié).
   *
   * `permanent: false` (307) : la langue par défaut est un choix
   * produit, pas une vérité définitive — un 308 resterait en cache
   * dans les navigateurs et serait pénible à défaire.
   */
  async redirects() {
    return [
      { source: "/", destination: "/fr", permanent: false },
      // Anciennes URL sans segment de langue : elles ont existé en
      // production, elles ne doivent pas répondre 404.
      {
        source: "/confidentialite",
        destination: "/fr/confidentialite",
        permanent: false,
      },
      { source: "/merci", destination: "/fr/merci", permanent: false },
    ];
  },

  /**
   * En-têtes de sécurité.
   *
   * ⚠️ Pas de CSP couvrant les scripts, et c'est délibéré : sans
   * nonces, Next a besoin de `'unsafe-inline'`, ce qui ne protège
   * quasiment pas du XSS tout en donnant l'illusion du contraire.
   * Les nonces imposeraient un `proxy.ts` et feraient perdre le
   * prérendu statique des six pages. Le rapport n'y est pas.
   *
   * Les directives retenues ci-dessous ne touchent pas aux scripts :
   * elles apportent une protection réelle sans rien pouvoir casser.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // frame-ancestors : empêche l'intégration du formulaire
            // dans un iframe tiers (clickjacking).
            // base-uri : bloque l'injection d'une balise <base> qui
            // détournerait toutes les URL relatives de la page.
            // form-action : le formulaire ne peut poster qu'ici.
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
          },
          {
            // Équivalent hérité de frame-ancestors, pour les
            // navigateurs qui ignorent encore la directive CSP.
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Empêche le navigateur de deviner un type MIME et
            // d'exécuter comme script un fichier qui n'en est pas un.
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Ne transmet l'URL complète qu'aux pages du même site.
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Le site n'a besoin d'aucune de ces API : les refuser
            // évite qu'un script injecté puisse les demander.
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
