(function () {
  const KEY = "klm-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Rayons",
    "nav.find": "Plan",
    "hero.kicker": "Quincaillerie · Chemin 20 Pieds · Grand Baie",
    "hero.title": "Legrand, Mauvilac, et le stock du jour.",
    "hero.lede": "Quincaillerie 20 pieds KLM — électricité, peinture, matériaux. Livraison. Grand Baie.",
    "cta.wa": "WhatsApp 5796 6777",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 17h00 — WhatsApp pour la livraison.",
    "t1": "20 Pieds",
    "t2": "Grand Baie",
    "t3": "Ferme",
    "care.kicker": "Rayons",
    "care.title": "Électricité, peinture, chantier",
    "care.intro": "Legrand et Mauvilac à la vitrine. Livraison. WhatsApp 5796 6777.",
    "c1t": "Électricité",
    "c1d": "Legrand au rayon, comme sur la photo.",
    "c2t": "Peinture",
    "c2d": "Mauvilac à la vitrine.",
    "c3t": "Livraison",
    "c3d": "Demandez au WhatsApp.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 17h00",
    "hours.p": "Horaires du pin Google. WhatsApp avant de charger.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Quincaillerie 20 pieds KLM · Twenty-Foot Road · Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Chemin 20 Pieds, Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XHQV+FG.",
    "close.kicker": "Un câble, un pot, une livraison",
    "close.title": "WhatsApp — on vous dit si on livre.",
    "close.p": "Pas de formulaire. Un message.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Aisles",
    "nav.find": "Map",
    "hero.kicker": "Hardware · Twenty-Foot Rd · Grand Baie",
    "hero.title": "Legrand, Mauvilac, and today’s stock.",
    "hero.lede": "Quincaillerie 20 pieds KLM — electrical, paint, materials. Delivery. Grand Baie.",
    "cta.wa": "WhatsApp 5796 6777",
    "cta.gmaps": "Directions",
    "cta.hint": "Closes 17:00 — WhatsApp for delivery.",
    "t1": "20 Pieds",
    "t2": "Grand Baie",
    "t3": "Closes",
    "care.kicker": "Aisles",
    "care.title": "Electrical, paint, site",
    "care.intro": "Legrand and Mauvilac in the window. Delivery. WhatsApp 5796 6777.",
    "c1t": "Electrical",
    "c1d": "Legrand on the shelf, as in the photo.",
    "c2t": "Paint",
    "c2d": "Mauvilac in the window.",
    "c3t": "Delivery",
    "c3d": "Ask on WhatsApp.",
    "hours.kicker": "Hours",
    "hours.title": "Closes at 17:00",
    "hours.p": "Hours from the Google pin. WhatsApp before you load up.",
    "visit.kicker": "Find us",
    "visit.addr": "Quincaillerie 20 pieds KLM · Twenty-Foot Road · Grand Baie",
    "map.kicker": "Map",
    "map.title": "Twenty-Foot Road, Grand Baie",
    "map.pin": "Landmark",
    "map.help": "Plus code XHQV+FG.",
    "close.kicker": "A cable, a tin, a delivery",
    "close.title": "WhatsApp — we’ll say if we deliver.",
    "close.p": "No form. One message.",
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
    try {
      var u = new URL(location.href);
      u.searchParams.set("lang", lang);
      history.replaceState(null, "", u.pathname + u.search);
    } catch (e) {}
  }
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
  });
  function bootLang() {
    try {
      var q = (new URLSearchParams(location.search).get("lang") || "").toLowerCase();
      if (q === "en" || q === "fr") return q;
    } catch (e) {}
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "fr") return saved;
    } catch (e) {}
    try {
      if ((navigator.language || "").toLowerCase().indexOf("en") === 0) return "en";
    } catch (e) {}
    return "fr";
  }
  apply(bootLang());
})();
