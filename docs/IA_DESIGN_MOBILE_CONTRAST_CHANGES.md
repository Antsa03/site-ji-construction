# Changements appliqués — contraste, mobile, design humain

Approche utilisée : logique UI/UX Pro Max — lisibilité, contraste, ergonomie mobile, hiérarchie visuelle, touch targets et design system cohérent.

## 1. Contraste de couleurs

- Palette globale renforcée dans `app/globals.css`.
- Couleur primaire light mode rendue plus sombre pour améliorer le contraste des boutons et textes dorés.
- Couleur `muted-foreground` renforcée en light mode et dark mode.
- Bordures et inputs rendus plus lisibles.
- Ajout d’utilitaires : `surface-contrast`, `text-readable`, `tap-target`, `mobile-card`.
- Réduction de plusieurs `text-muted-foreground/60` vers `text-muted-foreground` sur les zones critiques.

## 2. Mobile-first

- Hero section ajustée pour mobile : carte de lecture, boutons full-width, stats en grille, meilleure zone de respiration.
- Ajout d’une barre d’actions mobile globale : appeler, devis gratuit, WhatsApp.
- Menu mobile renforcé : largeur plus confortable, liens plus grands, touch targets plus ergonomiques.
- Sections ajoutées avec espacements mobile adaptés.
- Corps de page avec padding bas mobile pour ne pas être masqué par la barre d’actions.

## 3. Design plus humain

- Ajout d’une vraie image de chantier en background subtil dans le hero.
- Ajout d’une image réelle dans la section garanties.
- Les motifs blueprint restent présents mais ne sont plus le seul langage visuel.
- Le rendu paraît moins “pattern IA” et plus proche d’un site conçu par un designer senior.

## 4. Nouvelles sections UX

- `ProcessSection.tsx` : explique le déroulement du projet en 5 étapes.
- `GuaranteesSection.tsx` : renforce les engagements, la confiance et la crédibilité.

## 5. Intégration et configuration

- Ajout de `lib/site-config.ts` pour centraliser téléphone, WhatsApp, email, adresse, horaires et zones d’intervention.
- Mise à jour de la Navbar, du Footer, du JSON-LD, de la page Contact, de la page Devis et du CTA avec cette configuration.
- Ajout d’API routes de base :
  - `app/api/contact/route.ts`
  - `app/api/devis/route.ts`
- Les routes sont prêtes à connecter à Resend, EmailJS, Supabase ou un CRM.

## 6. Corrections de crédibilité

- Le compteur animé ne démarre plus à `0` en fallback : la valeur finale est rendue dès le départ pour éviter les compteurs visibles à zéro.
- Le formulaire contact et le formulaire devis font maintenant un appel API au lieu d’être seulement simulés côté client.

## 7. À faire ensuite

- Connecter réellement les API routes à un service email ou CRM.
- Remplacer les coordonnées placeholders si besoin.
- Ajouter plus de vraies photos de chantier.
- Tester le site sur mobile réel.
- Lancer `npm run lint` et `npm run build` dans l’environnement local.

> Note : je n’ai pas pu valider le build dans cet environnement, car l’installation des dépendances a expiré. Les changements ont été appliqués statiquement au projet.
