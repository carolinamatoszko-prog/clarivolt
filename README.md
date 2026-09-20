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

## Langues

Français par défaut, anglais disponible. La langue vit dans l'URL
(`/fr`, `/en`) — jamais dans un état React : basculer, c'est naviguer,
donc le bouton retour marche et un lien partagé garde sa langue.

| Fichier | Rôle |
|---|---|
| [`content/locales.ts`](content/locales.ts) | langues supportées — **routage**, importable côté client |
| [`content/dictionaries/fr.ts`](content/dictionaries/fr.ts) | textes français — **référence**, définit le type `Dictionary` |
| [`content/dictionaries/en.ts`](content/dictionaries/en.ts) | textes anglais — `satisfies Dictionary` |
| [`content/dictionaries/index.ts`](content/dictionaries/index.ts) | chargement — marqué `server-only` |

### Ajouter ou corriger un texte
Modifier `fr.ts`, puis `en.ts`. **Une clé oubliée en anglais casse la
compilation** — c'est voulu : en JSON, elle aurait affiché « undefined »
en production sans prévenir.

### Ajouter une langue
1. `content/locales.ts` : ajouter le code à `locales`
2. `content/dictionaries/` : créer le fichier, terminer par
   `satisfies Dictionary` — le compilateur dira ce qui manque
3. `content/dictionaries/index.ts` : l'enregistrer

Le sélecteur, `generateStaticParams` et les `hreflang` s'adaptent seuls :
tous lisent `locales`.

### Deux séparations à ne pas casser
- **`locales.ts` ne doit rien importer des dictionnaires.** Le sélecteur
  de langue est un Client Component : s'il touchait au module
  `server-only`, la compilation échouerait — et sans cette garde, tous
  les textes partiraient dans le bundle du navigateur.
- **La Server Action renvoie une clé d'erreur, pas une phrase.** Elle n'a
  pas à connaître la langue affichée ; le composant traduit.

### Redirections
`/` → `/fr`, et les anciennes URL sans langue (`/merci`,
`/confidentialite`) redirigent aussi. Elles sont dans
[`next.config.ts`](next.config.ts) plutôt que dans un `proxy.ts` : la
langue par défaut est fixe, il n'y a aucune décision à prendre à
l'exécution.

## Mesurer la conversion

Le plan Hobby de Vercel **n'ouvre pas les événements personnalisés**
(`track()` est réservé aux plans Pro et Enterprise). Une inscription
réussie redirige donc vers `/merci`, dont la page vue est la seule façon
de calculer la conversion :

```
taux de conversion = pages vues /*/merci ÷ pages vues /fr + /en
```

⚠️ Avec deux langues, penser à additionner `/fr` et `/en`, et
`/fr/merci` et `/en/merci`.

Les deux chiffres se lisent dans Vercel → Project → Analytics.

`/merci` est en `noindex` : une visite venue d'un moteur de recherche
fausserait le taux. Le piège à robots du formulaire abandonne en silence,
sans rediriger, pour la même raison.

> Si le projet passe un jour en plan Pro, `track('Signup')` permettrait de
> mesurer sans page intermédiaire — mais la page de confirmation reste
> une meilleure expérience, et le calcul ci-dessus continue de marcher.

## RGPD

Le formulaire collecte une seule donnée : l'adresse e-mail.

| | |
|---|---|
| Responsable du traitement | Carolina Matoszko, à titre individuel (pas encore de société, donc pas de SIREN) |
| Base légale | consentement, case jamais pré-cochée |
| Sous-traitant | Brevo (Sendinblue SAS, RCS Paris 498 019 298), hébergement UE |
| Mesure d'audience | Vercel Web Analytics — sans cookie, empreinte jetée après 24 h |
| Page | `/{lang}/confidentialite`, `noindex`, FR et EN |

Le texte vit dans les dictionnaires, clé `privacy`. La version
**française fait référence** : l'anglais porte une mention le disant,
puisque le traitement relève du droit français.

**À mettre à jour :**
- **à la création de la société** — raison sociale, SIREN, adresse
- **si l'outil de mesure change** — la section « Mesure d'audience »
  décrit précisément ce que Vercel enregistre

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
app/[lang]/         tout le site vit sous le segment de langue
  confidentialite/  politique de confidentialité
  merci/            confirmation — sa page vue mesure la conversion
components/         Hero, Problem, Anticipation, FinalCta, WaitlistForm,
                    SiteHeader, LanguageSwitcher, Footer, Wordmark
content/            dictionnaires, langues, marque, contact RGPD
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

Tout le contenu vit dans les dictionnaires, hors des composants.
Tester une nouvelle accroche = modifier `fr.ts` (et `en.ts`).

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
