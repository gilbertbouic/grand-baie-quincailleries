(function () {
  const KEY = "etoile-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Rayons",
    "nav.find": "Plan",
    "hero.kicker": "Quincaillerie · Sottise Road · Grand Baie",
    "hero.title": "Do It Yourself, Sottise Road.",
    "hero.lede": "Quincaillerie Etoile — outils, plomberie, chantier. Livraison. WhatsApp 5705 7804.",
    "cta.wa": "WhatsApp 5705 7804",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 19h00 — WhatsApp pour le stock.",
    "t1": "Sottise",
    "t2": "Grand Baie",
    "t3": "Ferme",
    "care.kicker": "Rayons",
    "care.title": "Outils, plomberie, chantier",
    "care.intro": "Livraison. WhatsApp 5705 7804 — pas le fixe 268.",
    "c1t": "Outils",
    "c1d": "Rayon DIY à Sottise.",
    "c2t": "Plomberie",
    "c2d": "Demandez le diamètre au WhatsApp.",
    "c3t": "Livraison",
    "c3d": "Comme sur Google.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 19h00",
    "hours.p": "Horaires du pin Google. WhatsApp 5705 7804.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Quincaillerie Etoile · Sottise Road · Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Sottise Road, Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XHJJ+43.",
    "close.kicker": "Un outil, un raccord, une livraison",
    "close.title": "WhatsApp 5705 7804.",
    "close.p": "Un message, comme au magasin.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Aisles",
    "nav.find": "Map",
    "hero.kicker": "Hardware · Sottise Road · Grand Baie",
    "hero.title": "Do It Yourself, Sottise Road.",
    "hero.lede": "Quincaillerie Etoile — tools, plumbing, site supplies. Delivery. WhatsApp 5705 7804.",
    "cta.wa": "WhatsApp 5705 7804",
    "cta.gmaps": "Directions",
    "cta.hint": "Closes 19:00 — WhatsApp for stock.",
    "t1": "Sottise",
    "t2": "Grand Baie",
    "t3": "Closes",
    "care.kicker": "Aisles",
    "care.title": "Tools, plumbing, site",
    "care.intro": "Delivery. WhatsApp 5705 7804 — not the 268 landline.",
    "c1t": "Tools",
    "c1d": "DIY aisle on Sottise.",
    "c2t": "Plumbing",
    "c2d": "Ask the size on WhatsApp.",
    "c3t": "Delivery",
    "c3d": "As on Google.",
    "hours.kicker": "Hours",
    "hours.title": "Closes at 19:00",
    "hours.p": "Hours from the Google pin. WhatsApp 5705 7804.",
    "visit.kicker": "Find us",
    "visit.addr": "Quincaillerie Etoile · Sottise Road · Grand Baie",
    "map.kicker": "Map",
    "map.title": "Sottise Road, Grand Baie",
    "map.pin": "Landmark",
    "map.help": "Plus code XHJJ+43.",
    "close.kicker": "A tool, a fitting, a delivery",
    "close.title": "WhatsApp 5705 7804.",
    "close.p": "One message, as at the shop.",
    "footer.draft": "Proposed brochure site — not the official website yet."
  }
};
  function apply(lang) {
    const pack = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const k = el.getAttribute("data-i18n");
      if (pack[k] != null) el.textContent = pack[k];
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
