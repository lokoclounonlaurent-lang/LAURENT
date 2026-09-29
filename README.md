# VELO X — Landing page

Page de vente du vélo d'appartement VELOX + Pack Home Fitness 21 jours offert (130 000 FCFA).
Site statique en HTML / CSS / JavaScript, sans dépendance ni installation.

## Lancer la page

Double-cliquez sur `index.html` : elle s'ouvre dans le navigateur.
Pour la mettre en ligne, déposez tout le dossier sur n'importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, hébergement mutualisé…).

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Contenu des 10 sections de la page |
| `styles.css` | Couleurs, typographies (Poppins + Inter), responsive |
| `script.js` | Boutons de commande WhatsApp, FAQ, animations |
| `assets/velo.jpg` | Photo produit du vélo |
| `assets/lifestyle.jpg` | Photo d'ambiance (femme sur le vélo) |

## Sections

1. **En-tête** : logo, badges « Paiement sécurisé » et « Livraison à domicile », bouton Commander (reste visible au défilement)
2. **Hero** : « Votre salle de sport est désormais à la maison. »
3. **Problème** : « Vous avez envie de bouger… mais votre journée passe toujours trop vite. »
4. **Bénéfices** : 4 cartes, puis un bloc « Une pratique fluide qui respecte votre foyer »
5. **Le vélo en détail** : 4 caractéristiques autour de la photo, puis « Comment l'utiliser ? » en 4 étapes
6. **Le pack** : vélo + 4 bonus avec leur valeur
7. **Réassurance et avis clients** : 5 garanties, 3 témoignages
8. **Offre** : récapitulatif de la valeur (195 000 FCFA), puis prix final de 130 000 FCFA
9. **FAQ** : 11 questions en accordéon
10. **Appel à l'action final**, puis **pied de page**

## Fonctionnalités

- **Commande via WhatsApp** : tous les boutons « Commander » ouvrent WhatsApp avec un message pré-rempli.
- **FAQ en accordéon** : une seule question ouverte à la fois.
- **Responsive** : ordinateur, tablette et mobile (vérifié à 1296px et 390px).
- **Barre de commande fixe sur mobile** : prix et bouton toujours visibles en bas de l'écran.
- **Animations d'apparition** au défilement, désactivées si l'utilisateur a demandé à réduire les animations dans son système.

## Corrections par rapport à la maquette

- Les points rouges qui chevauchaient les étiquettes « Le travail. », « La famille. »… ont été supprimés.
- Le texte qui se superposait dans l'encadré de citation a été corrigé.
- Le texte courant utilise la police Inter au lieu de Times, qui semblait involontaire.
- Les promesses du pied de page (« SSL 256-bit, cartes », « gants blancs », « Garantie 5 ans ») contredisaient le paiement à la livraison et la garantie de 7 jours. Elles ont été remplacées par des formulations cohérentes.

## À faire avant la mise en ligne

- [ ] **Numéro WhatsApp** : remplacer `229XXXXXXXX` dans `script.js` (ligne 3). Sans ce numéro, les boutons de commande ne fonctionnent pas.
- [ ] **Réponses de la FAQ** : elles ont été rédigées à partir du contenu de la page. Vérifier en particulier les zones de livraison, les frais de livraison et les modes de paiement.
- [ ] **Photos** : remplacer `assets/velo.jpg` et `assets/lifestyle.jpg` par les originaux en haute définition, en gardant les mêmes noms de fichiers.
- [ ] **Liens légaux** : relier « Mentions légales », « Confidentialité », « CGV » et « Garantie » à de vraies pages (ils pointent actuellement vers `#`).
- [ ] **Pied de page** : valider les textes de réassurance ou remettre ceux de la maquette s'ils correspondent à l'offre réelle.

## Personnalisation rapide

- **Couleurs** : variables en haut de `styles.css` (`--red`, `--bg`, `--text-soft`…).
- **Message WhatsApp** : constante `ORDER_MESSAGE` dans `script.js`.
- **Prix** : à modifier dans `index.html`, à trois endroits (section Offre, appel final, barre mobile).
