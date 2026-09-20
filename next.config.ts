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
};

export default nextConfig;
