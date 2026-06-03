# UX/UI upgrade — JI Construction

Objectif : rapprocher le projet d’un niveau d’audit UX/UI maximal selon les critères du skill UI/UX Pro Max : accessibilité, clarté, conversion, responsive, lisibilité et confiance.

## Changements principaux

- Correction du hero : `Bâtit pour durer` devient `Bâti pour durer`.
- CTA principal harmonisé : `Demander un devis gratuit`.
- Ajout d’un lien d’évitement clavier `Aller au contenu principal`.
- Ajout d’un landmark `main` identifiable avec `id="main-content"`.
- Cibles tactiles durcies à `44px` minimum pour liens/boutons.
- Champs de formulaire en `16px` sur mobile pour éviter le zoom automatique iOS.
- Formulaire de devis amélioré : étapes plus explicites, validation inline, messages d’erreur, état d’envoi, microcopy rassurante, résumé avant envoi.
- `FormSelect` est maintenant contrôlable via `value` et `onValueChange`.
- `FormTextarea` corrige le compteur de caractères en mode contrôlé et conserve le `onChange` parent.
- Prix bungalows reformulés en Ariary avec mention “prix indicatif”.
- Alt text des images bungalows enrichi.
- Page prestations enrichie avec les expertises BTP détaillées : gros œuvre, maçonnerie, charpente/toiture, plomberie, électricité, finitions.
- Page contact améliorée avec WhatsApp et CTA directs.
- Liens d’aide, erreurs et hints mieux reliés aux champs via `aria-describedby`.

## Vérification effectuée

- Contrôle statique de syntaxe TSX des fichiers modifiés avec TypeScript `transpileModule`.
- Recherche des anciens textes problématiques : plus de `Bâtit`, `étude de chantier`, ni de prix en euros dans les fichiers applicatifs.

## Vérification à exécuter localement

L’environnement de génération n’avait pas accès au registre npm, donc l’installation des dépendances n’a pas pu être relancée ici. À exécuter localement :

```bash
pnpm install
pnpm lint
pnpm build
pnpm dev
```

Puis lancer Lighthouse / axe DevTools sur :

- `/`
- `/prestations`
- `/bungalows`
- `/devis`
- `/contact`
