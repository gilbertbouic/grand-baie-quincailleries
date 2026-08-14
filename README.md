# Sites vitrines — quincailleries Grand Baie

Cinq brouillons indépendants, un dossier par commerce. HTML/CSS/JS statique, hébergé sur GitHub Pages. Français par défaut, bascule EN.

## URLs téléphone (pitch)

Guide vendeur (live, kreol + français, sans technique) :  
https://vitrines.mkweli.tech/playbook/

Hub (ne pas montrer au propriétaire) :  
https://vitrines.mkweli.tech/

Hub + playbook are password-gated. After you approve a hire, tell them: **`mkweli-nord`**.

Pendant le pitch : tape **Envoyer au patron** — WhatsApp ouvre le choix du contact (chat perso, pas le numéro public du magasin).

Prix au comptoir : **Rs 12 000** une fois. Commission hire : **Rs 5 000** après paiement reçu (dans `/equipe/termes.html`, pas au patron).

Annonce X (vague) :

> Grand Baie — mo rode ene dimounn pou vizite ti commerces, parler au comptoir, semaine matin. Kreol + français. Pa bizin conne computer.  
> Ecrire « dispo » lor WhatsApp [number]. Mo explike si ça match.

| Magasin | Ouvrir sur le téléphone |
|---|---|
| Kiss Grand Bay | https://vitrines.mkweli.tech/quincaillerie-kiss/ |
| Singlon | https://vitrines.mkweli.tech/quincaillerie-singlon/ |
| NBZ Hardware | https://vitrines.mkweli.tech/nbz-hardware/ |
| La Coruna | https://vitrines.mkweli.tech/quincaillerie-la-coruna/ |
| Pereybere | https://vitrines.mkweli.tech/quincaillerie-pereybere/ |

Arguments de vente : https://vitrines.mkweli.tech/sales/

Enregistrer les 5 liens du magasin dans un dossier « Pitch » sur le téléphone. Ouvrir **un seul** site devant le propriétaire.

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
