# Plan d’amélioration — JI Construction

Objectif : faire passer le site **JI Construction** d’un très bon site vitrine à un site vraiment abouti, crédible, professionnel et capable de générer des demandes de devis qualifiées.

Note actuelle estimée : **8/10**  
Objectif réaliste après amélioration : **8,8 à 9,2/10**

---

## 1. Priorités absolues

### 1.1 Corriger les compteurs qui affichent `0`

Sur certaines sections, les compteurs animés peuvent apparaître comme :

- `0+ ans d’expérience`
- `0+ projets livrés`
- `0+ artisans qualifiés`
- `0% délais respectés`

Même si cela vient d’une animation, c’est dangereux pour :

- la crédibilité ;
- le SEO ;
- l’accessibilité ;
- les utilisateurs sur mobile lent ;
- les utilisateurs avec JavaScript désactivé ou partiellement chargé.

### Recommandation

Afficher directement la valeur finale dans le HTML, puis animer seulement visuellement.

Exemple :

```tsx
<span>15+</span>
```

au lieu d’un compteur qui démarre à zéro et dépend entièrement de l’animation.

### Priorité

**Très haute**

---

## 2. Renforcer la crédibilité du site

Le design est déjà fort, mais il manque encore des preuves concrètes. Un site BTP doit rassurer rapidement, car les projets impliquent de gros budgets.

### 2.1 Ajouter de vraies photos de chantiers

Ajouter une galerie avec :

- photos avant / après ;
- photos pendant chantier ;
- photos de détails de finition ;
- photos de fondations, toiture, maçonnerie, plomberie, électricité ;
- photos de bungalows terminés.

### 2.2 Créer des fiches projets détaillées

Chaque projet devrait avoir une fiche claire :

```md
Nom du projet : Villa familiale à Antananarivo
Lieu : Antananarivo
Type : Construction neuve
Surface : 120 m²
Durée : 5 mois
Mission : Gros œuvre + toiture + finitions
Contraintes : Terrain en pente, accès difficile
Résultat : Maison livrée clé en main
```

### 2.3 Ajouter des témoignages plus réalistes

Les témoignages actuels sont utiles, mais il faut les rendre plus crédibles avec :

- nom ou prénom ;
- ville ;
- type de projet ;
- photo si possible ;
- date ;
- résultat concret.

Exemple :

> “JI Construction a rénové notre maison à Ivandry en 2024. Les délais annoncés ont été respectés et l’équipe nous a envoyé des photos chaque semaine.”

### Priorité

**Très haute**

---

## 3. Ajouter une section garanties et assurances

Un site BTP abouti doit clairement répondre à cette question :

> “Pourquoi puis-je leur confier mon chantier ?”

### À ajouter

Une section **Garanties & engagements** avec :

- devis détaillé ;
- planning de chantier ;
- suivi régulier ;
- matériaux validés avec le client ;
- interlocuteur unique ;
- contrôle qualité avant livraison ;
- service après livraison ;
- garanties sur les travaux selon les conditions du contrat.

### Exemple de section

```md
Nos engagements

- Devis clair et détaillé
- Planning réaliste avant démarrage
- Suivi photo du chantier
- Matériaux validés avec le client
- Contrôle qualité avant livraison
- Accompagnement après réception
```

### Priorité

**Très haute**

---

## 4. Améliorer la page d’accueil

La page d’accueil est déjà forte visuellement. Il faut surtout la rendre plus rassurante et plus orientée conversion.

### 4.1 Ajouter un bloc “Comment se déroule un projet ?”

Structure recommandée :

1. **Premier échange**
   - Compréhension du besoin, budget, terrain, délais.

2. **Étude & devis**
   - Estimation, choix techniques, planning.

3. **Préparation chantier**
   - Approvisionnement, équipe, organisation.

4. **Réalisation**
   - Travaux, suivi, photos, points réguliers.

5. **Livraison**
   - Vérification, corrections, remise du chantier.

### 4.2 Ajouter un bloc “Pourquoi nous choisir ?” plus concret

Au lieu de phrases génériques, utiliser des arguments précis :

- expérience terrain ;
- transparence du devis ;
- respect du budget ;
- suivi régulier ;
- capacité à gérer des projets complets ;
- adaptation aux contraintes locales.

### 4.3 Ajouter un CTA final plus fort

Exemple :

```md
Vous avez un terrain, une maison à rénover ou un projet de bungalow ?
Parlez-nous de votre projet. Nous vous répondons sous 24h avec une première orientation claire.
```

Bouton :

```md
Demander un devis gratuit
```

### Priorité

**Haute**

---

## 5. Améliorer la page Prestations

La page prestations est complète, mais elle peut devenir plus persuasive.

### 5.1 Ajouter des sous-sections par service

Pour chaque prestation, ajouter :

- ce que le service comprend ;
- pour quel type de client ;
- exemples de travaux ;
- bénéfices ;
- CTA.

Exemple pour la rénovation :

```md
Rénovation de maison

Nous intervenons pour remettre en état, moderniser ou transformer votre maison existante.

Inclus :

- démolition légère
- maçonnerie
- plomberie
- électricité
- peinture
- revêtements
- finitions

Idéal pour :

- maisons anciennes
- logements à louer
- extensions
- modernisation avant revente
```

### 5.2 Ajouter des photos par prestation

Chaque service devrait avoir au moins une image représentative.

### 5.3 Ajouter des questions fréquentes

Exemples :

- Combien coûte une rénovation à Madagascar ?
- Peut-on faire un devis sans plans ?
- Intervenez-vous hors Antananarivo ?
- Fournissez-vous les matériaux ?
- Peut-on suivre le chantier à distance ?

### Priorité

**Haute**

---

## 6. Améliorer la page Bungalows

La page bungalows est l’un des meilleurs atouts du site. Elle peut devenir une vraie page de conversion.

### 6.1 Ajouter des plans simplifiés

Pour chaque modèle :

- surface ;
- nombre de pièces ;
- terrasse ;
- disposition ;
- options.

Même un plan schématique simple peut fortement augmenter la projection du client.

### 6.2 Ajouter des rendus visuels ou photos

Idéalement :

- rendu 3D ;
- élévation ;
- photo d’un modèle similaire ;
- inspiration matériaux.

### 6.3 Clarifier les prix

Les prix indicatifs sont utiles, mais il faut expliquer ce qui est inclus et non inclus.

Exemple :

```md
Prix indicatif incluant :

- structure
- toiture
- ouvertures
- revêtements standards
- plomberie et électricité de base

Non inclus :

- terrain
- raccordements spécifiques
- ameublement
- options premium
- frais administratifs éventuels
```

### 6.4 Ajouter un comparateur

Un petit tableau comparatif :

| Modèle   | Surface | Chambres | Idéal pour            | Budget indicatif |
| -------- | ------: | -------: | --------------------- | ---------------: |
| Compact  |   25 m² |        1 | Location courte durée |  à partir de ... |
| Confort  |   45 m² |      1-2 | Couple / tourisme     |  à partir de ... |
| Familial |   70 m² |      2-3 | Famille / résidence   |  à partir de ... |

### Priorité

**Haute**

---

## 7. Améliorer la page Devis

La page devis est cruciale. Elle doit réduire l’effort du client.

### 7.1 Simplifier le formulaire

Champs recommandés :

- nom ;
- téléphone ;
- email ;
- type de projet ;
- ville / lieu du chantier ;
- budget approximatif ;
- délai souhaité ;
- description ;
- possibilité d’ajouter un fichier ou une photo.

### 7.2 Ajouter des exemples d’informations utiles

Exemple :

```md
Pour un devis plus précis, vous pouvez préciser :

- le lieu du chantier
- la surface approximative
- le type de travaux
- votre budget
- vos délais
- si vous avez déjà un plan ou un terrain
```

### 7.3 Ajouter une confirmation rassurante

Après envoi :

```md
Merci, votre demande a bien été envoyée.
Nous vous recontactons sous 24h ouvrées.
```

### 7.4 Vérifier la partie technique

À valider :

- le formulaire envoie bien les emails ;
- validation côté client et serveur ;
- anti-spam ;
- message de succès ;
- message d’erreur ;
- sauvegarde des demandes ;
- notification WhatsApp ou email.

### Priorité

**Très haute**

---

## 8. Améliorer la page Contact

La page contact doit être irréprochable.

### 8.1 Remplacer les coordonnées fictives

Si les coordonnées actuelles sont des placeholders, il faut les remplacer par :

- vrai numéro ;
- vrai email ;
- vraie adresse ;
- WhatsApp cliquable ;
- horaires réels.

### 8.2 Ajouter une carte

Ajouter une carte Google Maps ou une carte statique.

### 8.3 Ajouter des zones d’intervention

Exemple :

```md
Nous intervenons principalement à :

- Antananarivo
- Ivato
- Ambohidratrimo
- Andoharanofotsy
- Tamatave selon projet
- Nosy Be pour projets bungalows
```

### Priorité

**Très haute**

---

## 9. Améliorer le design

Le design est déjà le point fort du site. Il faut surtout le stabiliser et le rendre plus professionnel.

### 9.1 Hero section

Le nouveau motif BTP est une bonne direction. À surveiller :

- ne pas surcharger derrière le texte ;
- garder une bonne lisibilité mobile ;
- éviter les animations trop nombreuses ;
- vérifier le contraste en dark mode.

### 9.2 Uniformiser les espacements

Vérifier que toutes les sections utilisent une logique régulière :

- padding vertical cohérent ;
- largeur de contenu cohérente ;
- titres alignés ;
- cartes de même hauteur quand nécessaire.

### 9.3 Réduire les effets inutiles

Un site BTP premium doit paraître stable.

À éviter :

- trop de mouvements ;
- trop de formes décoratives ;
- trop de gradients différents ;
- animations longues qui ralentissent la lecture.

### 9.4 Ajouter plus de photos réelles

Le design sera beaucoup plus fort si les visuels sont réels.

Priorité visuelle :

1. photo chantier ;
2. photo équipe ;
3. photo réalisation ;
4. photo détail matériaux ;
5. rendu technique.

### Priorité

**Moyenne à haute**

---

## 10. Améliorer le SEO local

Le site doit mieux cibler les recherches locales.

### 10.1 Pages ou sections à créer

- Construction maison à Antananarivo
- Rénovation maison à Madagascar
- Entreprise BTP à Antananarivo
- Construction bungalow à Madagascar
- Construction bungalow à Nosy Be
- Maçonnerie à Antananarivo
- Rénovation toiture à Madagascar

### 10.2 Optimiser les titres

Exemples :

```md
Entreprise de construction à Antananarivo — JI Construction
Construction et rénovation à Madagascar
Bungalows sur mesure à Madagascar
```

### 10.3 Ajouter du contenu local

Inclure naturellement :

- Antananarivo ;
- Madagascar ;
- Nosy Be ;
- Tamatave ;
- contraintes climatiques ;
- types de terrains ;
- matériaux locaux ;
- besoins touristiques.

### 10.4 Ajouter les données structurées

Ajouter du schema.org :

- LocalBusiness ;
- ConstructionBusiness ;
- Service ;
- FAQPage ;
- Review si les avis sont réels.

### Priorité

**Haute**

---

## 11. Améliorer l’accessibilité

### À vérifier

- contraste texte / fond ;
- tailles de police mobile ;
- focus visible sur les boutons ;
- labels de formulaire ;
- textes alternatifs sur les images ;
- navigation clavier ;
- animations respectant `prefers-reduced-motion`.

### Exemple

```tsx
const shouldReduceMotion = useReducedMotion()
```

Puis réduire les animations si l’utilisateur préfère moins de mouvement.

### Priorité

**Moyenne**

---

## 12. Améliorer la performance

### À vérifier

- poids des images ;
- chargement des polices ;
- lazy loading ;
- compression ;
- SVG trop lourds ;
- animations Framer Motion trop nombreuses ;
- score Lighthouse.

### Recommandations

- convertir les images en WebP ou AVIF ;
- utiliser `next/image` ;
- optimiser les SVG ;
- éviter les animations permanentes inutiles ;
- charger les sections lourdes progressivement.

### Priorité

**Moyenne à haute**

---

## 13. Améliorer la confiance juridique

Même si ce n’est pas la partie la plus visible, c’est important.

### À ajouter

- mentions légales ;
- politique de confidentialité ;
- conditions d’utilisation ;
- informations entreprise ;
- numéro d’identification si disponible ;
- conditions des devis ;
- précisions sur les prix indicatifs.

### Priorité

**Haute**

---

## 14. Roadmap recommandée

### Phase 1 — Corrections urgentes

À faire en priorité :

- corriger les compteurs à zéro ;
- remplacer les coordonnées fictives ;
- vérifier l’envoi des formulaires ;
- ajouter des garanties ;
- ajouter un process clair ;
- rendre les CTA cohérents partout.

Objectif : rendre le site fiable.

### Phase 2 — Crédibilité

À faire ensuite :

- ajouter vraies photos ;
- enrichir les projets ;
- ajouter témoignages contextualisés ;
- ajouter détails de chantier ;
- créer une vraie galerie.

Objectif : inspirer confiance.

### Phase 3 — Conversion

À faire après :

- améliorer page devis ;
- ajouter comparateur bungalows ;
- clarifier les prix ;
- ajouter FAQ ;
- ajouter WhatsApp visible.

Objectif : augmenter les demandes de devis.

### Phase 4 — SEO & performance

À faire ensuite :

- créer pages locales ;
- optimiser metadata ;
- ajouter schema.org ;
- optimiser images ;
- améliorer Lighthouse.

Objectif : attirer plus de trafic qualifié.

---

## 15. Checklist finale

### Crédibilité

- [ ] Vraies coordonnées ajoutées
- [ ] Mentions légales ajoutées
- [ ] Garanties expliquées
- [ ] Process chantier expliqué
- [ ] Témoignages réels ajoutés
- [ ] Projets détaillés ajoutés
- [ ] Photos réelles ajoutées

### Conversion

- [ ] Formulaire testé
- [ ] Message de succès ajouté
- [ ] WhatsApp cliquable
- [ ] CTA répétés aux bons endroits
- [ ] Prix bungalows clarifiés
- [ ] FAQ ajoutée
- [ ] Comparateur bungalows ajouté

### Design

- [ ] Hero lisible sur mobile
- [ ] Motif BTP bien positionné
- [ ] Espacements uniformes
- [ ] Animations réduites si nécessaire
- [ ] Photos réelles intégrées
- [ ] Contraste vérifié

### SEO

- [ ] Titres optimisés
- [ ] Meta descriptions ajoutées
- [ ] Pages locales créées
- [ ] Schema.org ajouté
- [ ] Images avec alt text
- [ ] Sitemap vérifié

### Technique

- [ ] Lighthouse testé
- [ ] Images optimisées
- [ ] Formulaires sécurisés
- [ ] Anti-spam ajouté
- [ ] Responsive vérifié
- [ ] Accessibilité vérifiée

---

## Conclusion

JI Construction a déjà une très bonne base : identité visuelle forte, message clair, ton premium et offre compréhensible.

Pour que le site soit vraiment abouti, les priorités sont :

1. **corriger les détails qui cassent la crédibilité** ;
2. **ajouter des preuves réelles** ;
3. **rendre les projets plus concrets** ;
4. **clarifier les garanties et le processus** ;
5. **optimiser la conversion du formulaire de devis** ;
6. **renforcer le SEO local**.

Avec ces améliorations, le site peut passer d’un bon site vitrine à un site réellement professionnel, rassurant et capable de générer des prospects qualifiés.
