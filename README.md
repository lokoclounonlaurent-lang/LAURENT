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
| `assets/velo.webp` | Photo produit du vélo |
| `assets/lifestyle.webp` | Photo d'ambiance (femme sur le vélo) |
| `assets/video-volant.mp4` + `.webp` | Vidéo en gros plan du volant d'inertie, dans le bloc « Une pratique fluide qui respecte votre foyer » (+ image d'aperçu) |
| `assets/video-effort.mp4` + `.webp` | Vidéo en gros plan de l'effort, dans l'appel à l'action final (+ image d'aperçu) |
| `assets/fonts/` | Polices Poppins et Inter, hébergées avec le site |
| `_sources/` | GIF d'origine (28 Mo), gardés pour archive. **Ne pas mettre en ligne** (exclus de git via `.gitignore`) |

## Performances

La page complète pèse **environ 490 Ko**, vidéos comprises (contre plus de 28 Mo avec les GIF). L'écran d'accueil s'affiche avec **environ 135 Ko**, et moins encore sur un hébergeur qui compresse les fichiers (c'est le cas de Netlify, Vercel et GitHub Pages).

- **Vidéos** : les GIF d'origine (28,5 Mo) ont été convertis en MP4 (285 Ko au total, environ 100 fois plus léger). Chaque vidéo ne se télécharge qu'à l'approche de sa section et se met en pause hors de l'écran. En attendant, une image d'aperçu de 22 Ko est affichée.
- **Images** : format WebP, deux fois plus léger que le JPG. La photo du haut de page est préchargée en priorité, les autres ne se chargent qu'au défilement.
- **Polices** : hébergées avec le site (plus d'appel à Google Fonts), préchargées, et le texte s'affiche immédiatement avec une police système en attendant.
- **Script** : chargé sans bloquer l'affichage (`defer`).
- **Pas de décalage à l'affichage** : les dimensions de chaque image et vidéo sont déclarées à l'avance.

Pour ajouter une nouvelle vidéo GIF, convertissez-la avec ffmpeg (installé sur ce poste) :

```
ffmpeg -i source.gif -vf "scale=540:-2,format=yuv420p" -c:v libx264 -crf 26 -preset veryslow -movflags +faststart -an assets/ma-video.mp4
ffmpeg -i assets/ma-video.mp4 -frames:v 1 -c:v libwebp -quality 82 assets/ma-video.webp
```

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
- Les vidéos fournies contenaient le texte portugais « TREINE EM CASA », la marque « SPUNOR » et un filigrane ✦. Seuls les plans sans texte ont été gardés (environ 2,5 secondes chacun, en boucle), et le filigrane a été retiré par un léger recadrage.

## À faire avant la mise en ligne

- [ ] **Numéro WhatsApp** : remplacer `229XXXXXXXX` dans `script.js` (ligne 3). Sans ce numéro, les boutons de commande ne fonctionnent pas.
- [ ] **Réponses de la FAQ** : elles ont été rédigées à partir du contenu de la page. Vérifier en particulier les zones de livraison, les frais de livraison et les modes de paiement.
- [ ] **Photos** : remplacer `assets/velo.webp` et `assets/lifestyle.webp` par les originaux en haute définition, convertis en WebP et en gardant les mêmes noms de fichiers.
- [x] ~~Vidéos trop lourdes~~ : converties en MP4 (285 Ko au lieu de 28,5 Mo).
- [x] ~~Texte portugais et filigrane dans les vidéos~~ : retirés.
- [ ] **Vidéos plus longues (facultatif)** : pour montrer la femme en pied sur le vélo, il faudrait une version de la vidéo sans le texte « TREINE EM CASA ».
- [ ] **Liens légaux** : relier « Mentions légales », « Confidentialité », « CGV » et « Garantie » à de vraies pages (ils pointent actuellement vers `#`).
- [ ] **Pied de page** : valider les textes de réassurance ou remettre ceux de la maquette s'ils correspondent à l'offre réelle.

## Personnalisation rapide

- **Couleurs** : variables en haut de `styles.css` (`--red`, `--bg`, `--text-soft`…).
- **Message WhatsApp** : constante `ORDER_MESSAGE` dans `script.js`.
- **Prix** : à modifier dans `index.html`, à trois endroits (section Offre, appel final, barre mobile).
