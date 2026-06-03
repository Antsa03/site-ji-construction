# Modifications UI/UX — Hero pattern visible et système d’icônes moins générique

## Objectif

Suite au retour design, les corrections se concentrent sur deux points :

1. rendre le motif BTP du background de la Hero Section constamment visible ;
2. réduire l’effet “design IA” provoqué par l’usage trop direct d’icônes génériques dans les cards.

Ces choix suivent une approche senior inspirée des principes UI/UX Pro Max : hiérarchie, contraste, intention visuelle, lisibilité mobile, composants moins génériques et cohérence métier.

---

## Hero Section

Fichier modifié :

```txt
components/home/HeroSection.tsx
```

### Changements effectués

- Le masque de lisibilité a été fortement allégé.
- Le motif BTP est maintenant placé au-dessus du masque, afin qu’il ne soit plus étouffé par la couleur de fond.
- Un mask CSS a été ajouté au motif pour préserver la zone de lecture à gauche tout en gardant le motif très visible au centre-droite.
- Les opacités des traits principaux du motif ont été renforcées.
- La hiérarchie des layers est désormais :
  - base ;
  - image subtile ;
  - gradients ;
  - masque allégé ;
  - motif BTP visible ;
  - grain ;
  - contenu.

### Résultat attendu

Le background reste lisible et visible, mais le texte conserve une zone protégée. Le hero paraît plus assumé, plus technique et moins plat.

---

## Cards de services

Fichier modifié :

```txt
components/home/CraftServicesSection.tsx
```

### Problème traité

Les illustrations pouvaient encore être perçues comme de simples icônes placées dans des cards, ce qui donnait un rendu proche des patterns IA.

### Changements effectués

- L’illustration n’est plus traitée comme un pictogramme isolé en haut de card.
- Elle est intégrée dans une plaque visuelle type “croquis technique”.
- Chaque card utilise un langage plus éditorial : numéro, code, libellé, croquis, tags et CTA.
- Correction d’un doublon de balise `<section>` présent dans le composant.

### Résultat attendu

Les cards donnent davantage l’impression d’un design sur mesure, pensé pour le BTP, plutôt qu’un assemblage d’icônes génériques.

---

## Section Process

Fichier modifié :

```txt
components/home/ProcessSection.tsx
```

### Changements effectués

- Suppression des icônes Lucide dans les cards.
- Remplacement par un système de repères typographiques : numéro d’étape, code métier et mini croquis architectural.
- La section paraît plus mature, plus technique et plus spécifique au domaine chantier.

---

## Section Garanties

Fichier modifié :

```txt
components/home/GuaranteesSection.tsx
```

### Changements effectués

- Suppression des icônes dans les cards.
- Remplacement par des “proof stamps” : codes d’engagement, index, détails de contrôle.
- Le design donne davantage une sensation de fiche technique / audit chantier.

---

## Validation à faire

Après intégration, vérifier :

```bash
npm install
npm run lint
npm run build
npm run dev
```

Puis tester visuellement :

- mobile 360px ;
- mobile 390px ;
- tablette ;
- desktop ;
- dark mode ;
- hero en haut de page ;
- lisibilité des cards ;
- cohérence des contrastes.

