# Sites vitrines — commerces Grand Baie

Cinq brouillons indépendants, un dossier par commerce. HTML/CSS/JS statique, hébergé sur GitHub Pages. Français par défaut, bascule EN.

Héros = photos Google (ou Street View) de la vraie façade. Pas d’images inventées. Un commerce sans photo réelle, ou qui a déjà un vrai site ailleurs, n’est pas dans le pitch.

## URLs téléphone (pitch)

Guide vendeur (live, kreol + français, sans technique) :  
https://vitrines.mkweli.tech/playbook/

Hub (ne pas montrer au propriétaire) :  
https://vitrines.mkweli.tech/

Hub + playbook are password-gated. After you approve a hire, tell them: **`mkweli-nord`**.

Pitch : **visite en magasin**. Montrer la page du commerce déjà ouverte sur le téléphone. Un magasin par jour. Demander le patron.

Prix : **Rs 8 000** une fois. Pas de mensualité dans le pitch. Commission vendeur : **Rs 4 000** après paiement reçu (dans `/equipe/termes.html`, pas au patron).

Annonce X / Facebook (vague) :

> Grand Baie — mo rode ene dimounn pou visiter 5 commerces, montrer ene ti page lor telefon. Kreol + français. Commission Rs 4 000 par vente.  
> Ecrire « dispo ». Mo explike si ça match.

| Magasin | Ouvrir sur le téléphone |
|---|---|
| Kiss Grand Bay | https://vitrines.mkweli.tech/quincaillerie-kiss/ |
| Lennard’s Store | https://vitrines.mkweli.tech/lennard-store/ |
| NBZ Hardware | https://vitrines.mkweli.tech/nbz-hardware/ |
| La Coruna | https://vitrines.mkweli.tech/quincaillerie-la-coruna/ |
| Pereybere | https://vitrines.mkweli.tech/quincaillerie-pereybere/ |

Arguments de vente : https://vitrines.mkweli.tech/sales/

Les boutons du hub ouvrent le site du magasin à montrer sur le téléphone. Un magasin par jour, dans l’ordre du tableau.

## Domaine `vitrines.mkweli.tech`

Apex `mkweli.tech` (studio) is unchanged. Add this **one** DNS record where the zone is managed:

| Type | Name | Target |
|---|---|---|
| CNAME | `vitrines` | `gilbertbouic.github.io` |

Cloudflare: leave the record **DNS only** (grey cloud) until GitHub has issued HTTPS, then proxy is optional.

## Dossiers (un par commerce)

| Dossier | Commerce |
|---|---|
| `quincaillerie-kiss/` | Quincaillerie Kiss Grand Bay |
| `lennard-store/` | Lennard’s Store (épicerie B13) |
| `nbz-hardware/` | NBZ Hardware Shop |
| `quincaillerie-la-coruna/` | Quincaillerie La Coruna |
| `quincaillerie-pereybere/` | Quincaillerie Pereybere Co. Ltd |

`quincaillerie-singlon/` reste sur disque mais **hors pitch** : aucune photo réelle sur Google / Street View.

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

- Remplacer `assets/hero.jpg` par une photo plus récente du propriétaire si elle est plus nette que la photo Google.
- Corriger horaires / téléphone dans `index.html`.
- Retirer le bandeau `.draft-banner` et le texte `footer.draft`.
- Ajouter l’URL dans Google Business → Site web.

Les héros actuels sont des photos Google de la façade réelle (pas des visuels générés).
