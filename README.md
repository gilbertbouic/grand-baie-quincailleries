# Sites vitrines — quincailleries Grand Baie

Cinq brouillons indépendants, un dossier par commerce. HTML/CSS/JS statique, hébergé sur GitHub Pages. Français par défaut, bascule EN.

## URLs téléphone (pitch)

Hub vendeur (ne pas montrer au propriétaire) :  
https://gilbertbouic.github.io/grand-baie-quincailleries/

| Magasin | Ouvrir sur le téléphone |
|---|---|
| Kiss Grand Bay | https://gilbertbouic.github.io/grand-baie-quincailleries/quincaillerie-kiss/ |
| Singlon | https://gilbertbouic.github.io/grand-baie-quincailleries/quincaillerie-singlon/ |
| NBZ Hardware | https://gilbertbouic.github.io/grand-baie-quincailleries/nbz-hardware/ |
| La Coruna | https://gilbertbouic.github.io/grand-baie-quincailleries/quincaillerie-la-coruna/ |
| Pereybere | https://gilbertbouic.github.io/grand-baie-quincailleries/quincaillerie-pereybere/ |

Arguments de vente : https://gilbertbouic.github.io/grand-baie-quincailleries/sales/

Enregistrer les 5 liens du magasin dans un dossier « Pitch » sur le téléphone. Ouvrir **un seul** site devant le propriétaire.

## Dossiers (un par commerce)

| Dossier | Commerce |
|---|---|
| `quincaillerie-kiss/` | Quincaillerie Kiss Grand Bay |
| `quincaillerie-singlon/` | Quincaillerie Singlon |
| `nbz-hardware/` | NBZ Hardware Shop |
| `quincaillerie-la-coruna/` | Quincaillerie La Coruna |
| `quincaillerie-pereybere/` | Quincaillerie Pereybere Co. Ltd |

`index.html` à la racine = tableau de démo **interne**. `sales/` = arguments de vente. Ne pas envoyer ces deux URL aux propriétaires.

Chaque dossier contient `index.html`, `styles.css`, `site.js`, `assets/logo.jpg`, `assets/hero.jpg`.

## Voir en local

```bash
cd /home/gilbert-bouic/Documents/Websites
python3 -m http.server 8080
```

Ouvrir http://localhost:8080/

## Publier un magasin sur GitHub Pages

**Option A — un repo par client (recommandé à la vente)**

1. Créer un repo public, ex. `kiss-grand-bay`.
2. Copier le contenu du dossier du magasin **à la racine** du repo.
3. Settings → Pages → Deploy from branch `main` / root.
4. URL : `https://VOTRE-USER.github.io/kiss-grand-bay/`
5. Plus tard : domaine `quelquechose.mu` → Pages → Custom domain.

**Option B — tout le monorepo**

Publier ce dépôt : les sites seront à  
`https://VOTRE-USER.github.io/Websites/quincaillerie-kiss/` etc.

## Après signature

- Remplacer `assets/hero.jpg` par une photo réelle de la façade.
- Corriger horaires / téléphone dans `index.html`.
- Retirer le bandeau `.draft-banner` et le texte `footer.draft`.
- Ajouter l’URL dans Google Business → Site web.

Les images actuelles sont des visuels de présentation, pas des photos officielles des magasins.
