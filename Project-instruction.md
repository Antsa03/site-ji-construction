Crée un site web complet et professionnel pour une entreprise fictive appelée **JI Construction**,
spécialisée dans le **BTP (travaux et construction)** et la **conception de bungalows**.

---

## STACK TECHNIQUE

- **Next.js 16** (App Router)
- **shadcn/ui** pour les composants UI
- **Tailwind CSS** (inclus avec shadcn)
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes (inclus avec shadcn)
- **next/image** pour les images optimisées (URLs Unsplash)
- **next/link** pour la navigation

---

## STRUCTURE DU PROJET

app/
├── layout.tsx # Layout global (Navbar + Footer)
├── page.tsx # Accueil
├── prestations/
│ └── page.tsx
├── bungalows/
│ └── page.tsx
├── devis/
│ └── page.tsx
└── contact/
└── page.tsx
components/
├── layout/
│ ├── Navbar.tsx # Navigation sticky responsive
│ └── Footer.tsx
├── home/
│ ├── HeroSection.tsx
│ ├── ActivitiesSection.tsx
│ ├── WhyUsSection.tsx
│ ├── ProjectsSection.tsx
│ ├── TestimonialsSection.tsx
│ └── CtaSection.tsx
└── ui/ # composants shadcn auto-générés

---

## PAGE D'ACCUEIL — priorité absolue

### 1. Navbar (composant global)

- Logo "JI Construction" à gauche (texte stylisé ou icône Building)
- Liens : Accueil / Prestations / Bungalows / Devis / Contact
- Bouton CTA "Demander un devis" (shadcn `<Button>`)
- Sticky au scroll avec transition background (transparent → blanc/sombre)
- Menu hamburger responsive sur mobile (shadcn `<Sheet>`)

### 2. Hero Section

- Pleine hauteur (min-h-screen)
- Image de fond Unsplash (chantier professionnel) avec overlay sombre
- Titre principal animé : "Construisons votre avenir ensemble"
- Sous-titre : "Expert BTP & Concepteur de bungalows sur mesure"
- Deux boutons CTA côte à côte : "Nos Prestations" (primary) + "Découvrir nos Bungalows" (outline)
- Flèche animée vers le bas
- Animation d'entrée avec Framer Motion (fadeIn + slideUp)

### 3. Section "Nos 2 activités"

- Titre de section centré
- Deux grandes cartes côte à côte (shadcn `<Card>`) :
  - **BTP** : icône HardHat, description, liste de services, bouton
  - **Bungalows** : icône Home, description, liste de modèles, bouton
- Effet hover : scale légère + shadow + border colorée
- Animation fadeIn au scroll (Framer Motion + whileInView)

### 4. Section "Pourquoi nous choisir"

- 4 cards avec icône + titre + description :
  1. 15 ans d'expérience
  2. Matériaux de qualité
  3. Délais respectés
  4. Sur-mesure
- Compteurs animés (ex: "150+ projets", "98% satisfaction")
- Fond alterné (gris clair) pour contraste visuel

### 5. Galerie de réalisations

- Grille responsive (3 colonnes desktop, 1 mobile)
- 6 projets fictifs avec image Unsplash, titre, catégorie (BTP / Bungalow)
- Overlay au hover avec titre et bouton "Voir plus"
- Badges shadcn `<Badge>` pour les catégories

### 6. Témoignages

- 3 cartes avec : avatar (initiales), nom fictif, note (étoiles), texte
- Composant shadcn `<Avatar>` + `<Card>`
- Animation de glissement au scroll

### 7. CTA Final

- Bandeau pleine largeur, fond coloré (jaune/orange chantier)
- Texte accrocheur + bouton "Demander un devis gratuit"
- Légère animation pulse sur le bouton

### 8. Footer

- Logo + slogan
- 3 colonnes : Navigation / Services / Contact
- Coordonnées fictives (adresse Madagascar, téléphone, email)
- Icônes réseaux sociaux (Lucide)
- Copyright

---

## AUTRES PAGES

### /prestations

- Hero secondaire (h-64) avec titre + breadcrumb
- 6 services BTP en cards (Gros œuvre, Maçonnerie, Rénovation, Charpente, Plomberie, Électricité)
- Chaque card : icône Lucide, titre, description, liste de prestations incluses
- Accordéon shadcn `<Accordion>` pour les détails
- CTA vers /devis

### /bungalows

- Hero secondaire avec titre
- Tabs shadcn `<Tabs>` : "Tous" / "Petits" / "Moyens" / "Grands"
- 4 modèles fictifs en cards :
  - Image Unsplash, nom du modèle, surface (m²), nb de pièces, prix indicatif
  - Bouton "Demander un devis" par modèle
- Section avantages des bungalows JI Construction

### /devis

- Hero secondaire
- Formulaire complet avec shadcn `<Form>` + React Hook Form + Zod :
  - Informations personnelles : Nom, Prénom, Email, Téléphone
  - Projet : Type (BTP / Bungalow) via `<Select>`, Description, Surface estimée, Localisation
  - Budget : `<RadioGroup>` (< 5M Ar / 5-20M Ar / 20M Ar+)
  - Délai souhaité : `<Select>`
  - Message libre : `<Textarea>`
  - `<Checkbox>` acceptation conditions
  - Bouton submit avec état loading
- Toast shadcn en retour de soumission

### /contact

- Hero secondaire
- Layout 2 colonnes :
  - Gauche : coordonnées (adresse, tél, email, horaires) avec icônes Lucide
  - Droite : formulaire de contact simple (Nom, Email, Sujet, Message)
- Carte Google Maps placeholder (iframe ou composant statique)
- Cards réseaux sociaux

---

## DESIGN SYSTEM

- **Palette principale** :
  - Primary : #f59e0b (jaune/ambre — couleur chantier)
  - Dark : #1c1917 (stone-900)
  - Background : #fafaf9 (stone-50)
  - Accent : #78716c (stone-500)
- **Typographie** :
  - Configurer dans tailwind.config : `font-display: 'Montserrat'` + `font-body: 'Inter'`
  - Importer via next/font/google
- **Animations Framer Motion** :
  - Créer des variants réutilisables : fadeIn, slideUp, staggerChildren
  - Utiliser `whileInView` avec `viewport={{ once: true }}`
  - Transitions fluides 0.6s ease

---

Génère tous les fichiers un par un, en commençant par :

1. La modification de global.css
2. Le layout global (Navbar + Footer)
3. La page d'accueil complète (composant par composant)
4. Puis les autres pages

Le code doit être propre, typé TypeScript, et prêt à l'emploi avec
