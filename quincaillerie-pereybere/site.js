(function () {
  const KEY = "pereybere-lang";
  const I18N = {
    fr: {
      draft: "Proposition de site — informations à valider avec le propriétaire.",
      "cta.wa": "WhatsApp matériaux",
      "cta.hint": "Ciment, fer, vrac — confirmez le stock avant de charger.",
      "trust.btp": "Matériaux de chantier",
      "trust.rate": "Note Google",
      "trust.zone": "Pereybere / Grand Baie",
      "close.kicker": "Charger aujourd’hui ?",
      "close.title": "Demandez le stock. On vous dit si ça vaut le trajet.",
      "close.p": "Horaires à confirmer. WhatsApp ou 5913 1000.",
      "nav.mat": "Matériaux",
      "nav.info": "Infos",
      "nav.find": "Plan",
      "hero.kicker": "Pereybere · Allée des Goélands · XHWP+RGG",
      "hero.title": "Matériaux de construction au nord, à deux pas de la côte.",
      "hero.lede": "Quincaillerie Pereybere Co. Ltd — chantier, rénovation, fournitures. Note Google autour de 4.0.",
      "inv.kicker": "Sur le yard",
      "inv.title": "Ce qu’on vient charger ici",
      "cat.btp.t": "Matériaux BTP",
      "cat.btp.d": "Fournitures de chantier pour le nord de l’île.",
      "cat.cement.t": "Ciment",
      "cat.cement.d": "Listé comme point de vente Kolos Cement. Confirmez les stocks au 5913 1000.",
      "cat.hw.t": "Quincaillerie",
      "cat.hw.d": "Outils et fournitures pour finir le job.",
      "cat.rebar.t": "Fer & vrac",
      "cat.rebar.d": "Les charges lourdes — mieux vaut appeler avant de venir.",
      "cat.del.t": "Livraison chantier",
      "cat.del.d": "Demandez si on livre votre zone. Utile à Pereybere / Grand Baie.",
      "cat.local.t": "Quartier côtier",
      "cat.local.d": "Allée des Goélands — pour les villas et les chantiers du coin, pas un hypermarché.",
      "hours.kicker": "Horaires",
      "hours.title": "À confirmer — on n’invente pas minuit",
      "hours.p": "Un annuaire affiche 07:30–00:00, ce qui ressemble à une erreur. Dimanche souvent indiqué fermé. Appelez le 5913 1000 avant de vous déplacer.",
      "visit.kicker": "Contact",
      "visit.addr": "Allée des Goélands, Pereybere · XHWP+RGG",
      "cta.fb": "Page Facebook existante",
      "cta.call": "Appeler",
      "cta.gmaps": "Itinéraire Google Maps",
      "map.kicker": "Plan",
      "map.title": "Pereybere, zone Grand Baie",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel."
    },
    en: {
      draft: "Draft website — details to confirm with the owner.",
      "cta.wa": "WhatsApp materials",
      "cta.hint": "Cement, steel, bulk — confirm stock before you load.",
      "trust.btp": "Site materials",
      "trust.rate": "Google rating",
      "trust.zone": "Pereybere / Grand Baie",
      "close.kicker": "Loading today?",
      "close.title": "Ask for stock. We’ll say if the trip is worth it.",
      "close.p": "Hours to confirm. WhatsApp or 5913 1000.",
      "nav.mat": "Materials",
      "nav.info": "Info",
      "nav.find": "Map",
      "hero.kicker": "Pereybere · Allée des Goélands · XHWP+RGG",
      "hero.title": "Building materials in the north, a short way from the coast.",
      "hero.lede": "Quincaillerie Pereybere Co. Ltd — site work, renovation, supplies. Google rating around 4.0.",
      "inv.kicker": "On the yard",
      "inv.title": "What people come to load",
      "cat.btp.t": "Building materials",
      "cat.btp.d": "Site supplies for the north of the island.",
      "cat.cement.t": "Cement",
      "cat.cement.d": "Listed as a Kolos Cement stockist. Confirm stock on 5913 1000.",
      "cat.hw.t": "Hardware",
      "cat.hw.d": "Tools and fittings to finish the job.",
      "cat.rebar.t": "Steel & bulk",
      "cat.rebar.d": "The heavy loads — call before you come.",
      "cat.del.t": "Site delivery",
      "cat.del.d": "Ask if we deliver to your area. Useful in Pereybere / Grand Baie.",
      "cat.local.t": "Coastal neighbourhood",
      "cat.local.d": "Allée des Goélands — for nearby villas and sites, not a hypermarket.",
      "hours.kicker": "Hours",
      "hours.title": "To confirm — we are not publishing midnight",
      "hours.p": "One directory shows 07:30–00:00, which looks like a data error. Sunday often listed closed. Call 5913 1000 before you travel.",
      "visit.kicker": "Contact",
      "visit.addr": "Allée des Goélands, Pereybere · XHWP+RGG",
      "cta.fb": "Existing Facebook page",
      "cta.call": "Call",
      "cta.gmaps": "Google Maps directions",
      "map.kicker": "Map",
      "map.title": "Pereybere, Grand Baie area",
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
})();
