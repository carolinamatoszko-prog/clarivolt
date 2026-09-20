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

## RGPD

Le formulaire collecte une seule donnée : l'adresse e-mail.

| | |
|---|---|
| Responsable du traitement | Carolina Matoszko, à titre individuel (pas encore de société, donc pas de SIREN) |
| Base légale | consentement, case jamais pré-cochée |
| Sous-traitant | Brevo (Sendinblue SAS, RCS Paris 498 019 298), hébergement UE |
| Page | [`/confidentialite`](app/confidentialite/page.tsx), `noindex` |

Le texte vit dans [`content/privacy.ts`](content/privacy.ts).

**À mettre à jour :**
- **à la création de la société** — raison sociale, SIREN, adresse
- **si une mesure d'audience est ajoutée** — la section « Cookies »
  affirme aujourd'hui qu'aucun cookie de suivi n'est déposé

L'adresse postale est volontairement absente : le RGPD exige une identité
et un moyen de contact, pas le domicile d'une personne physique sur un
site ouvert.

## Structure

```
app/
  layout.tsx        langue, métadonnées, polices
  globals.css       palette (tokens Tailwind 4, @theme)
  page.tsx          composition de la page
  actions.ts        Server Action d'inscription (côté serveur)
  waitlist-state.ts état du formulaire — hors du fichier « use server »,
                    qui ne peut exporter que des fonctions async
  confidentialite/  politique de confidentialité
components/         Hero, Problem, Anticipation, FinalCta, WaitlistForm,
                    Footer, Wordmark
content/lp.ts       TOUT le texte de la page
content/privacy.ts  texte de la politique de confidentialité
public/             logo
```

### Le formulaire d'inscription

Server Action (`app/actions.ts`), pas de Route Handler : aucun endpoint
public exposé aux robots, et le formulaire fonctionne sans JavaScript.

Règles à ne pas casser :
- la clé Brevo ne quitte jamais le serveur ; aucune erreur de l'API n'est
  renvoyée telle quelle au navigateur
- ne **jamais** répondre « vous êtes déjà inscrit » : cela permettrait de
  tester quelles adresses figurent dans la liste
- la case de consentement n'est **jamais** pré-cochée

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
