# ClariVolt — landing page

Page d'inscription à la liste d'accès anticipé.
Cible : asset managers de parcs photovoltaïques, France.

En ligne : https://clarivolt.vercel.app

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4 |
| Hébergement | Vercel — déploiement auto sur push `main` |
| Capture d'email | Formulaire natif → Route Handler → Brevo |

## Démarrer en local

```bash
npm install
npm run dev
```

## Variables d'environnement

Les noms sont listés dans [`.env.example`](.env.example). **Aucune valeur
n'est versionnée** — ni dans ce dépôt, ni dans aucun fichier suivi par git.

| Variable | Rôle | Où la trouver |
|---|---|---|
| `BREVO_API_KEY` | Authentifie l'appel à l'API Brevo | Brevo → Settings → SMTP & API → API Keys |
| `BREVO_LIST_ID` | Liste qui reçoit les inscrits | Brevo → Contacts → Lists (id dans l'URL) |

### En production
Vercel → Project Settings → Environment Variables.
Les cocher pour **Production, Preview et Development** : sans Preview, les
déploiements de branche échouent ; sans Development, `vercel env pull` ne
récupère rien.

### En local
```bash
vercel env pull .env.local
```

Ou manuellement : `cp .env.example .env.local`, puis remplir.
`.env.local` est ignoré par git.

> `BREVO_API_KEY` est une clé serveur. Ne jamais la préfixer
> `NEXT_PUBLIC_` : ce préfixe l'exposerait dans le navigateur, où
> n'importe qui pourrait la lire et écrire dans la liste de contacts.

## Structure

```
app/
  layout.tsx        langue, métadonnées, polices
  globals.css       palette (tokens Tailwind 4, @theme)
  page.tsx          composition de la page
components/         Hero, Problem, Anticipation, FinalCta, Footer, Wordmark
content/lp.ts       TOUT le texte de la page
public/             logo
```

### Modifier le texte

Tout le contenu vit dans [`content/lp.ts`](content/lp.ts), hors des
composants. Tester une nouvelle accroche = modifier ce fichier.

Règle : **aucun chiffre non vérifié.** Un nombre non validé s'écrit
`[CHIFFRE À VALIDER]`.

### Modifier les couleurs

Les tokens sont définis dans le bloc `@theme` de `app/globals.css`, ancrés
sur les couleurs du logo. Les composants n'utilisent que des noms
sémantiques (`bg-brand-700`), jamais d'hexadécimal — changer un token
suffit à repeindre la page.

Les couleurs brutes du logo (`brand-400`, `accent-500`) ne passent pas le
contraste requis pour du texte sur blanc : elles restent décoratives, le
texte utilise les niveaux 600/700.
