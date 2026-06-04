# Prompt complet — Site JI Construction

Ce document est le prompt de référence pour recréer ou étendre le site JI Construction de A à Z. Il couvre le contexte métier, l'identité visuelle, le système de design, l'architecture technique et les pages existantes.

---

## 1. Contexte et objectif

**Client :** JI Construction — entreprise BTP à Madagascar spécialisée en construction neuve, rénovation, études techniques et bungalows sur mesure.

**Tagline :** _Construire juste. Bâtir durable._

**Objectif principal du site :** convertir les visiteurs en demandes de devis. Chaque page oriente vers `/devis`.

**Positionnement visuel :** professionnel, premium, fiable et pratique. L'univers est celui du bâtiment de qualité : crépi chaud, acier brossé, cuivre, bois naturel. Pas d'univers numérique froid.

**Public cible :** particuliers et promoteurs malgaches cherchant une entreprise BTP sérieuse et compétente pour un projet résidentiel ou commercial.

**Zones d'intervention :** Antananarivo, Ivato, Andoharanofotsy, Ivandry, Tamatave, Nosy Be.

---

## 2. Stack technique

| Couche      | Choix                                          |
| ----------- | ---------------------------------------------- |
| Framework   | Next.js (App Router)                           |
| Langage     | TypeScript strict                              |
| Style       | Tailwind CSS v4 + `shadcn/ui`                  |
| Animations  | Framer Motion                                  |
| Icônes      | Lucide React (SVG uniquement, jamais d'emojis) |
| Polices     | Google Fonts via `next/font/google`            |
| Thème       | `next-themes` (light / dark)                   |
| Déploiement | Vercel (Fluid Compute activé, région `iad1`)   |

**Commandes de base :**

```bash
pnpm install
pnpm dev       # développement
pnpm build     # production
```

---

## 3. Configuration du site

Toutes les coordonnées et constantes globales sont centralisées dans [lib/site-config.ts](lib/site-config.ts) :

```ts
export const siteConfig = {
  name: "JI Construction",
  tagline: "Construire juste. Bâtir durable.",
  description:
    "Entreprise BTP à Madagascar spécialisée en construction neuve, rénovation, études techniques et bungalows sur mesure.",
  phoneDisplay: "+261 34 12 345 67",
  phoneHref: "tel:+261341234567",
  whatsappHref: "https://wa.me/261341234567",
  email: "contact@jiconstruction.mg",
  emailHref: "mailto:contact@jiconstruction.mg",
  address: "Lot II A 45 Analakely",
  city: "Antananarivo",
  country: "Madagascar",
  mapsHref: "https://maps.google.com",
  hoursWeek: "Lun — Ven : 8h — 17h",
  hoursSaturday: "Samedi : 8h — 12h",
  serviceAreas: ["Antananarivo", "Ivato", "Andoharanofotsy", "Ivandry", "Tamatave", "Nosy Be"],
}
```

Ne jamais coder en dur les numéros de téléphone, emails ou adresses dans les composants. Toujours importer depuis `siteConfig`.

---

## 4. Design system — Identité visuelle

### 4.1 Palette de couleurs (CSS variables OKLCH)

La palette s'appelle **Craft & Steel**. Elle utilise des variables CSS OKLCH définies dans [app/globals.css](app/globals.css).

**Mode clair :**
| Token | Valeur OKLCH | Usage |
|---|---|---|
| `--background` | `oklch(0.985 0.004 80)` | Fond page, crème chaud |
| `--foreground` | `oklch(0.105 0.018 55)` | Texte principal, charbon |
| `--card` | `oklch(0.998 0.003 80)` | Surface carte |
| `--primary` | `oklch(0.47 0.115 76)` | Cuivre/or — CTA principal |
| `--primary-foreground` | `oklch(0.99 0.006 90)` | Texte sur cuivre |
| `--muted` | `oklch(0.95 0.004 70)` | Panneaux secondaires |
| `--muted-foreground` | `oklch(0.36 0.018 55)` | Texte secondaire |
| `--border` | `oklch(0.84 0.012 70)` | Bordures |
| `--ring` | `oklch(0.47 0.115 76)` | Focus ring |

**Mode sombre :** fond navy profond (`oklch(0.145 0.035 255)`) avec cuivre lumineux (`oklch(0.76 0.13 85)`) pour l'accent. L'ambiance devient "chantier de nuit, lampes de chantier cuivrées".

**Règle principale :** utiliser `--primary` exclusivement pour le CTA principal "Demander un devis gratuit". Les actions secondaires utilisent `--muted` ou `--card` avec bordure.

### 4.2 Typographie

| Rôle             | Police            | Variable CSS     |
| ---------------- | ----------------- | ---------------- |
| Display / titres | Space Grotesk     | `--font-display` |
| Corps / UI       | Plus Jakarta Sans | `--font-body`    |
| Mono / numéros   | JetBrains Mono    | `--font-code`    |

**Tailles recommandées :**

- Hero H1 : `text-5xl` à `text-9xl` (responsive) sur la home ; `text-3xl` à `text-5xl` sur les sous-pages.
- Titres de section : `text-2xl` à `text-4xl`.
- Corps : `text-sm` à `text-base`, line-height relaxed (1.6–1.75).
- Labels kickers : uppercase, letter-spacing, `text-xs` — jamais seul comme information principale.
- Numéros de référence (01, 02…) : `font-mono` avec couleur `primary`.

### 4.3 Espacement et grille

- Gouttières de page : `px-6 sm:px-8 lg:px-12`
- Rythme des sections : `py-16 sm:py-24` (contenu standard), `py-20 sm:py-28` (sections features)
- Padding des cartes : `p-5` à `p-8` selon densité
- Largeur max du contenu : `max-w-7xl mx-auto`

### 4.4 Radii et ombres

| Élément                     | Classe         |
| --------------------------- | -------------- |
| Contrôles (input, badge)    | `rounded-lg`   |
| Cartes et résumés           | `rounded-2xl`  |
| Panneaux premium / sidebar  | `rounded-3xl`  |
| CTA principal (bouton pill) | `rounded-full` |

Les ombres sont volontairement légères. Préférer `border + background-color` à un lourde `drop-shadow`.

### 4.5 Style général

- Ambiance : **Neo-Craft** — chaud, épuré, professionnel, avec des touches de cuivre sur fond crème.
- Pas de glassmorphism agressif. Le verre est utilisé seulement pour la navbar (`backdrop-blur-xl`).
- Les formes géométriques (grilles de points, lignes de croquis) rappellent les plans techniques d'architecte.
- En dark mode : navy profond + cuivre lumineux, comme un écran de bureau d'architecte la nuit.

---

## 5. Architecture des fichiers

```
app/
  layout.tsx          ← RootLayout (polices, ThemeProvider, Navbar, Footer, MobileQuickActions)
  globals.css         ← Variables CSS, tokens, utilitaires globaux
  page.tsx            ← Page d'accueil
  prestations/page.tsx
  btp/page.tsx
  bungalows/page.tsx
  devis/page.tsx
  contact/page.tsx

components/
  home/               ← Sections de la home (Hero, Services, Process, Projects…)
  layout/             ← Navbar, Footer, PageHero, PremiumSection, Logo, MobileQuickActions
  form/               ← FormInput, FormTextarea, FormPhone, FormSelect, FormIcons
  ui/                 ← Composants shadcn/ui (Button, Card, Sheet, Accordion…)

lib/
  site-config.ts      ← Coordonnées et constantes globales
  animations.ts       ← Variants Framer Motion réutilisables (slideUp, slideLeft, staggerContainer…)
  utils.ts            ← `cn()` et helpers

public/
  images/
    projects/         ← Photos de réalisations
    icons/            ← SVG sociaux (facebook.svg, instagram.svg, linkedin.svg)
  ji-logo-light.png
  ji-logo-dark.png

design-system/
  MASTER.md           ← Source de vérité du design system
```

---

## 6. Navigation

**Barre de navigation fixe** (`fixed top-0 z-50`) avec :

- Fond `bg-background/[0.92]` + `backdrop-blur-xl` (effet verre)
- Hauteur `h-16`
- Liens : Accueil / Prestations / BTP / Bungalows / Devis gratuit / Contact
- Bouton thème light/dark (Sun/Moon icon)
- Sur mobile : menu hamburger → `Sheet` (tiroir latéral) avec les mêmes liens + bouton téléphone + bouton WhatsApp

**Footer** en trois colonnes :

1. Navigation principale
2. Prestations (liens rapides)
3. Informations (liens utiles)

Plus : logo + tagline à gauche, coordonnées complètes, icônes réseaux sociaux, mentions légales.

**`MobileQuickActions`** : barre fixe en bas sur mobile avec accès rapide Téléphone, WhatsApp, Devis.

---

## 7. Composants layout réutilisables

### `PageHero`

Section d'en-tête de sous-page avec :

- Breadcrumb
- Kicker badge (ex : "PROJETS BTP")
- Titre H1 principal
- Sous-titre descriptif
- Optionnellement un CTA

Usage :

```tsx
<PageHero
  badge="PROJETS BTP"
  title="Constructions BTP"
  subtitle="..."
  cta={{ label: "Demander un devis", href: "/devis" }}
/>
```

### `PremiumSection`

Wrapper de section avec espacement, fond optionnel (`muted`, `card`, `default`) et max-width centré.

### `PremiumCTA`

Bloc de conversion en bas de page avec titre, sous-titre, bouton primaire vers `/devis` et trust chips. Fond cuivré ou sombre selon le contexte.

### `SectionDivider`

Séparateur entre sections de la home avec variantes :

- `variant="default"` : ligne simple
- `variant="copper"` : accent cuivré
- `variant="dots"` : grille de points (référence plans techniques)

---

## 8. Page d'accueil — Structure et sections

### 8.1 `HeroSection`

**Objectif :** capter l'attention, établir la crédibilité, diriger vers le devis.

- **Fond :** pattern de points techniques + fond crème
- **Animation :** parallaxe au scroll avec `useScroll` + `useTransform`
- **Titre H1 :** très grand (responsive `text-5xl` → `text-9xl`), police Display
- **Sous-titre :** bénéfice concis, 1-2 phrases
- **CTAs :** bouton primaire "Demander un devis gratuit" → `/devis` + bouton secondaire outline "Voir nos réalisations"
- **Trust chips :** "Réponse sous 24h", "Devis gratuit, sans obligation", "15+ ans d'expérience"
- **Stats :** 3-4 chiffres clés (ex : 150+ réalisations, 15 ans, etc.)
- **Stagger animation** sur les éléments enfants avec Framer Motion

### 8.2 `CraftServicesSection`

**Objectif :** présenter les prestations principales.

- Grid de cartes de services, chaque carte avec : numéro `font-mono`, titre, description, liste de fonctionnalités, bénéfice client et lien "En savoir plus"
- Animation stagger à l'entrée dans le viewport

### 8.3 `ProcessSection`

**Objectif :** rassurer sur le sérieux et la méthode.

- Timeline horizontal / vertical selon le viewport
- 4-5 étapes numérotées (étude, devis, validation, chantier, livraison)
- Icônes SVG par étape

### 8.4 `ProjectsSection`

**Objectif :** prouver par l'exemple.

- Galerie de réalisations avec photos
- Filtre par type (construction, rénovation, bungalow, BTP)
- Cartes avec photo pleine largeur, overlay au hover avec détails

### 8.5 `WhyUsSection`

**Objectif :** arguments différenciants.

- Grid 2×2 ou 3×2 de cartes avantages
- Chaque carte : icône, titre court, explication 2-3 phrases

### 8.6 `TestimonialsSection`

**Objectif :** preuve sociale.

- Cards de témoignages clients avec nom, projet, note étoiles, citation
- Carousel ou grille selon la largeur

### 8.7 `GuaranteesSection`

**Objectif :** lever les dernières objections avant conversion.

- Liste de garanties (suivi chantier, assurance, transparence des coûts, etc.)
- Style sobre, fond `muted` ou cuivré

### 8.8 `FAQSection`

**Objectif :** répondre aux questions fréquentes, améliorer le SEO.

- `Accordion` shadcn/ui
- 6-8 questions fréquentes sur les travaux, délais, devis, garanties

### 8.9 `CtaSection`

**Objectif :** conversion finale en bas de page.

- Bloc pleine largeur fond sombre ou cuivré
- Titre accrocheur + sous-titre
- Bouton primaire "Demander un devis gratuit" → `/devis`
- Bouton secondaire "Nous appeler" avec `href="tel:..."` depuis `siteConfig`

---

## 9. Page Prestations (`/prestations`)

**Structure :**

1. `PageHero` avec badge "PRESTATIONS", titre H1 et CTA devis
2. Grid de cartes de services (9 services) :
   - Gros œuvre et structure (01)
   - Maçonnerie (02)
   - Rénovation (03)
   - Couverture et charpente (04)
   - Plomberie et sanitaires (05)
   - Électricité (06)
   - Finitions et revêtements (07)
   - Bungalows sur mesure (08)
   - Études et plans (09)
3. `PremiumCTA` en bas

**Design des cartes :**

- Numéro `font-mono` copper en haut à droite
- Code lot (ex : "LOT STRUCTURE") en badge muted
- Titre H3 + description
- Liste de 4 features avec icône check
- Bénéfice client en italique
- Lien "En savoir plus" avec `ArrowUpRight`

---

## 10. Page BTP (`/btp`)

**Structure :**

1. `PageHero` avec badge "PROJETS BTP", titre sur les types de projets BTP
2. Grid de 6 cartes types de projets BTP :
   - Construction résidentielle
   - Bâtiment commercial
   - Rénovation & extension
   - Gros œuvre
   - Infrastructure industrielle
   - Voirie & assainissement
3. Chaque carte : image (`/images/projects/btp-*.jpg`), titre, description, stats (surface, délai, etc.)
4. `PremiumCTA` en bas

---

## 11. Page Bungalows (`/bungalows`)

**Structure :**

1. `PageHero` avec badge "BUNGALOWS SUR MESURE"
2. Grid de 4 modèles de bungalows :
   - **Ravinala** — 65 m², 2ch/1sdb, à partir de 150M Ar
   - **Baobab** — 85 m², 3ch/2sdb, à partir de 220M Ar
   - **Orchidée** — 50 m², 1ch/1sdb, à partir de 115M Ar
   - **Palissandre** — 120 m², 4ch/2sdb (premium)
3. Chaque carte : image, nom, surface (`Maximize` icon), chambres (`BedDouble` icon), SDB (`Bath` icon), prix, liste features, bouton "Demander ce modèle" → `/devis`
4. `PremiumCTA` en bas

Images : `/images/projects/bungalow-ravinala.jpg`, etc.

---

## 12. Page Devis (`/devis`) — Formulaire multi-étapes

**Fonctionnement :** stepper en 3 étapes avec validation par étape, animation entre étapes (`AnimatePresence` Framer Motion).

**Étapes :**

1. **Vos coordonnées** — Nom complet (requis), Email (requis), Téléphone (`FormPhone` avec drapeau MG)
2. **Votre projet** — Type de projet (`FormSelect` avec icônes), Message / description (textarea), Localisation
3. **Résumé** — Récapitulatif de tous les champs avant envoi + bouton de soumission

**Types de projet disponibles (avec icônes SVG customs) :**

- Maison individuelle, Villa haut standing, Bungalow sur mesure, Immeuble / résidence
- Rénovation, Entrepôt / industriel, Garage / abri, Études et plans, Autre projet

**Validation :**

- `aria-invalid` sur les champs en erreur
- `role="alert"` sur les messages d'erreur
- Hints sous les champs si utile
- Bouton submit en état `loading` (spinner `Loader2`) pendant la soumission

**Après soumission (état "succès") :**

- Icône `CheckCircle2` animée
- Message de confirmation avec prénom
- Bouton "Appeler directement" : `<a href={siteConfig.phoneHref}>`
- Bouton "WhatsApp" : `<a href={\`${siteConfig.whatsappHref}?text=${encodeURIComponent(...)}\`}>` (pré-rempli avec nom et type de projet)

**Composants de formulaire customs :**

- `FormInput` — champ texte accessible avec label flottant ou fixe
- `FormTextarea` — textarea accessible
- `FormPhone` — input avec préfixe drapeau/code pays
- `FormSelect` — select custom avec icônes par option
- `FormIcons` — icônes SVG pour chaque type de projet

---

## 13. Page Contact (`/contact`)

**Structure :**

1. `PageHero`
2. Grid 2 colonnes :
   - **Colonne informations** : cartes de contact (téléphone, WhatsApp, email, adresse) — chaque carte est un lien `<a>` avec icône, label et valeur. Taille min `min-h-16` pour mobile. Icônes : `Phone`, `MessageCircle`, `Mail`, `MapPin` (Lucide).
   - **Colonne formulaire** : formulaire de contact simple (Nom, Email, Message) avec les mêmes composants form que `/devis`
3. Horaires d'ouverture
4. Carte Google Maps (iframe ou lien)

---

## 14. Animations et motion

**Variants réutilisables** (dans [lib/animations.ts](lib/animations.ts)) :

```ts
// Entrée depuis le bas
slideUp: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }

// Entrée depuis la gauche
slideLeft: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, ... } }

// Stagger sur les conteneurs
staggerContainer: (stagger = 0.1) => ({ hidden: {}, visible: { transition: { staggerChildren: stagger } } })

// Transition douce
transitionSmooth: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
```

**Règles motion :**

- Durée : 150–300ms pour micro-interactions, 500–700ms pour entrées de section
- Easing : cubic-bezier `[0.22, 1, 0.36, 1]` (ease-out élastique)
- Toujours utiliser `useReducedMotion()` pour couper les animations si l'utilisateur le préfère
- Viewport trigger : `once: true, amount: 0.35` (déclenche quand 35% visible)
- Utiliser `transform` + `opacity` — jamais `width`, `height`, `top`, `left`

---

## 15. Accessibilité — Checklist obligatoire

Chaque composant et chaque page doit respecter :

- [ ] Une seule balise `<h1>` par page
- [ ] Skip-link "Aller au contenu principal" → `#main-content` dans le layout
- [ ] Tous les éléments interactifs accessibles au clavier (Tab, Enter, Space, Escape)
- [ ] Focus rings visibles sur tous les éléments focusables (`outline-ring/50`)
- [ ] Touch targets minimum `44×44px` (boutons, liens de nav, cartes de contact)
- [ ] Images : `alt` descriptif si informatif, `alt=""` si décoratif
- [ ] `aria-label` sur les boutons icône (thème, hamburger, fermer)
- [ ] Formulaires : `<label>` associé, `aria-invalid`, `role="alert"` pour les erreurs
- [ ] Pas de scroll horizontal à 320px de largeur
- [ ] `prefers-reduced-motion` respecté (via `useReducedMotion()`)
- [ ] Contraste minimum 4.5:1 pour le texte normal
- [ ] `lang="fr"` sur la balise `<html>`
- [ ] `suppressHydrationWarning` sur `<html>` pour next-themes

---

## 16. Conversion — Checklist obligatoire

Toute page doit contribuer à la conversion :

- [ ] Le CTA principal pointe vers `/devis`
- [ ] Le texte du CTA met en avant "gratuit" : **"Demander un devis gratuit"**
- [ ] Des trust chips sont présents près des zones de conversion ("Réponse sous 24h", "Sans obligation")
- [ ] Le délai de réponse est mentionné (24h)
- [ ] Les actions de contact mobile sont faciles à taper (barre `MobileQuickActions`)
- [ ] Le formulaire ne demande que ce qui est nécessaire à la prochaine étape commerciale

---

## 17. SEO et métadonnées

- Chaque page doit avoir son propre `export const metadata: Metadata` avec `title` et `description` uniques.
- Schema.org `LocalBusiness` en JSON-LD via le composant `JsonLd` dans le layout.
- Images avec `alt` texte pertinent contenant les mots-clés.
- URL canoniques propres (pas de paramètres inutiles).
- `next/image` pour toutes les images — jamais `<img>` nu.

---

## 18. Performance et déploiement

- Images : WebP, optimisées avec `next/image` (`width`, `height`, `priority` pour les above-the-fold).
- Taille max des images statiques dans `public/` : **< 200 KB** (viser < 100 KB avec WebP).
- Polices : `display: "swap"` sur toutes les Google Fonts.
- `"use client"` seulement quand nécessaire (animations, hooks d'état). Les sections statiques sont Server Components.
- Vercel : Fluid Compute activé, région `iad1`.

---

## 19. Règles de code à respecter

1. **Pas de commentaires** sauf pour les invariants non-évidents.
2. **Pas d'emojis** dans le code ou le contenu.
3. **Toujours `next/image`** pour les images, jamais `<img>`.
4. **Toujours `next/link`** pour la navigation interne, jamais `<a>`.
5. **Toujours `siteConfig`** pour les coordonnées, jamais hardcodé.
6. **Toujours `cn()`** de `@/lib/utils` pour combiner les classes Tailwind.
7. **Icônes** : uniquement Lucide React. SVG customs dans `public/images/icons/`.
8. **`cursor-pointer`** sur tous les éléments cliquables (cartes, liens, boutons).
9. **Hover feedback** : `transition-colors duration-200` minimum sur tous les interactifs.
10. **Pas de `scale` hover** qui décale la mise en page.

---

## 20. Exemples de prompts pour étendre le site

### Ajouter une nouvelle page

```
Crée la page `/realisations` pour JI Construction.
Stack : Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui.
Design system : voir design-system/MASTER.md.
Structure :
1. PageHero avec badge "NOS RÉALISATIONS", titre H1, sous-titre
2. Grille filtrée par catégorie (construction, rénovation, bungalow, BTP)
3. Cartes de projet avec image next/image, titre, type, année, bouton "Voir le projet"
4. PremiumCTA en bas
Règles : accessibility checklist, conversion checklist, pas d'emojis, pas de commentaires évidents, siteConfig pour les coordonnées.
```

### Ajouter une section à la home

```
Ajoute une section `PartnersSection` sur la page d'accueil de JI Construction, entre GuaranteesSection et FAQSection.
Design : fond muted, titre centré "Ils nous font confiance", logos de partenaires en ligne (niveaux de gris, opacity 60% → 100% au hover).
Animation : stagger fadeIn à l'entrée viewport (useReducedMotion respecté).
Style : voir design-system/MASTER.md — typographie Display pour le titre, token --muted pour le fond.
```

### Améliorer un composant existant

```
Améliore le composant components/home/TestimonialsSection.tsx de JI Construction.
Actuellement : grille statique.
Objectif : ajouter un carousel auto-play avec contrôles manuels (prev/next), pause au hover, indicateurs de position.
Contraintes : accessibility (aria-live, boutons avec aria-label), useReducedMotion (pas d'autoplay si préférence réduite), Framer Motion pour les transitions, pas de bibliothèque carousel externe.
```
