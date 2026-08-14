(function () {
  const KEY = "singlon-lang";
  const I18N = {
    fr: {
      draft: "Brouillon — à valider avec vous.",
      "nav.shop": "Atelier",
      "nav.ranges": "Rayons",
      "nav.find": "Plan",
      "hero.kicker": "Familiale depuis 1971 · 5.0 sur Google",
      "hero.title": "Quincaillerie + atelier.",
      "hero.lede": "Outils, matériaux, machines, meubles et accessoires — et derrière le comptoir : coupe, soudure, commandes spéciales. Royal Road / B13, Grand Baie.",
      "cta.wa": "Demander une coupe / soudure",
      "cta.call": "Appeler",
      "cta.hint": "Envoyez une photo de la pièce. On vous dit si on peut la faire.",
      "trust.year": "Familiale depuis",
      "trust.rate": "Note Google",
      "trust.svc": "Services d’atelier",
      "close.kicker": "Coupe, soudure, commande",
      "close.title": "Décrivez le job. On vous dit oui ou non.",
      "close.p": "Horaires à confirmer — un WhatsApp évite de venir pour rien.",
      "cta.gmaps": "Ouvrir dans Maps",
      "svc.kicker": "Pourquoi ce site existe",
      "svc.title": "Trois services que Google ne montre pas",
      "svc.cut.t": "Coupe",
      "svc.cut.d": "Bois, métal, aux cotes. Amenez la pièce ou commandez le matériau.",
      "svc.weld.t": "Soudure",
      "svc.weld.d": "Petits travaux de soudure sur place. Décrivez le job au 263 1537.",
      "svc.order.t": "Commande",
      "svc.order.d": "Ce qui n’est pas en rayon, on le commande. Utile pour les artisans réguliers.",
      "ranges.kicker": "En magasin",
      "ranges.title": "Rayons",
      "cat.tools.t": "Outillage",
      "cat.tools.d": "Outils pour pros et particuliers.",
      "cat.mat.t": "Matériaux",
      "cat.mat.d": "Fournitures de construction courantes.",
      "cat.mach.t": "Machines",
      "cat.mach.d": "Matériel et machines pour l’atelier.",
      "cat.furn.t": "Meubles & accessoires",
      "cat.furn.d": "Pièces et accessoires pour la maison.",
      "hours.kicker": "Horaires",
      "hours.title": "Horaires à confirmer",
      "hours.p": "Aucun annuaire fiable ne publie les heures d’ouverture de Singlon. On n’invente pas. Appelez le 263 1537 avant un déplacement le dimanche.",
      "map.kicker": "Adresse",
      "map.addr": "Grand Baie, Maurice",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel."
    },
    en: {
      draft: "Draft — to confirm with you.",
      "nav.shop": "Workshop",
      "nav.ranges": "Stock",
      "nav.find": "Map",
      "hero.kicker": "Family-owned since 1971 · 5.0 on Google",
      "hero.title": "Hardware + workshop.",
      "hero.lede": "Tools, materials, machinery, furniture and fittings — and behind the counter: cutting, welding, special orders. Royal Road / B13, Grand Baie.",
      "cta.wa": "Ask about cutting / welding",
      "cta.call": "Call",
      "cta.hint": "Send a photo of the piece. We’ll say if we can do it.",
      "trust.year": "Family-owned since",
      "trust.rate": "Google rating",
      "trust.svc": "Workshop services",
      "close.kicker": "Cut, weld, order",
      "close.title": "Describe the job. We’ll say yes or no.",
      "close.p": "Hours to confirm — WhatsApp saves a wasted trip.",
      "cta.gmaps": "Open in Maps",
      "svc.kicker": "Why this site exists",
      "svc.title": "Three services Google does not show",
      "svc.cut.t": "Cutting",
      "svc.cut.d": "Wood and metal, to size. Bring the piece or order the material.",
      "svc.weld.t": "Welding",
      "svc.weld.d": "Small welding jobs on site. Describe the work on 263 1537.",
      "svc.order.t": "Ordering",
      "svc.order.d": "If it is not on the shelf, we order it. Useful for regular trades.",
      "ranges.kicker": "In store",
      "ranges.title": "Aisles",
      "cat.tools.t": "Tools",
      "cat.tools.d": "Tools for trades and homeowners.",
      "cat.mat.t": "Materials",
      "cat.mat.d": "Everyday building supplies.",
      "cat.mach.t": "Machinery",
      "cat.mach.d": "Gear and machines for the workshop.",
      "cat.furn.t": "Furniture & fittings",
      "cat.furn.d": "Parts and accessories for the house.",
      "hours.kicker": "Hours",
      "hours.title": "Hours to confirm",
      "hours.p": "No reliable directory publishes Singlon’s opening hours. We do not invent them. Call 263 1537 before a Sunday trip.",
      "map.kicker": "Address",
      "map.addr": "Grand Baie, Mauritius",
      "footer.draft": "Proposed brochure site — not the official website yet."
    }
  };
  function apply(lang) {
    const pack = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
  });
  var start = "fr";
  try { start = localStorage.getItem(KEY) || "fr"; } catch (e) {}
  apply(start);

  document.querySelectorAll(".send-owner").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var num = a.getAttribute("data-wa-shop") || "";
      var url = location.href.split("#")[0];
      var msg = "Bonzour, voici la page préparée pour Quincaillerie Singlon. Ouvert li lor ou telefon pendant qu'on koz. Pa encore officiel.\n" + url;
      location.href = "https://wa.me/?text=" + encodeURIComponent(msg);
    });
  });
})();
