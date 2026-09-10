(function () {
  const KEY = "ck-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Lavage",
    "nav.price": "Prix",
    "nav.find": "Plan",
    "hero.kicker": "Lavage auto · Grand Baie",
    "hero.title": "CK Car Wash, Grand Baie.",
    "hero.lede": "CK Car Wash Grand Baie. WhatsApp 5904 2889.",
    "cta.wa": "WhatsApp 5904 2889",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 17h00 — un message avant de venir.",
    "t1": "Lavage auto",
    "t2": "Grand Baie",
    "t3": "Ferme",
    "care.kicker": "Lavage",
    "care.title": "Lavage sur place",
    "care.intro": "Grand Baie. WhatsApp 5904 2889.",
    "c1t": "Extérieur",
    "c1d": "Lavage carrosserie.",
    "c2t": "Intérieur",
    "c2d": "Demandez au WhatsApp ce qui est inclus.",
    "c3t": "Tarif",
    "c3d": "Demandez au WhatsApp.",
    "price.kicker": "Prix",
    "price.title": "Tarifs du lavage",
    "price.p": "Demandez le tarif au WhatsApp. La liste s’affiche ici.",
    "price.list": "Demandez au WhatsApp.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 17h00",
    "hours.p": "Horaires du pin Google. WhatsApp 5904 2889.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "CK Car Wash Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XHJH+XHC. WhatsApp si vous cherchez le local.",
    "close.kicker": "Un lavage, un tarif",
    "close.title": "WhatsApp 5904 2889.",
    "close.p": "Un message avant de venir.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Wash",
    "nav.price": "Prices",
    "nav.find": "Map",
    "care.kicker": "Wash",
    "cta.wa_prefix": "WhatsApp",
    "cta.gmaps": "Directions",
    "price.kicker": "Prices",
    "price.title": "Wash prices",
    "price.p": "Ask the price on WhatsApp. The list shows here.",
    "price.list": "Ask on WhatsApp.",
    "hours.kicker": "Hours",
    "visit.kicker": "Find us",
    "map.kicker": "Map",
    "map.pin": "Landmark",
    "footer.draft": "Proposed brochure site — not the official website yet.",
    "cta.wa": "WhatsApp 5904 2889",
    "hero.kicker": "Car wash · Grand Baie",
    "hero.title": "CK Car Wash, Grand Baie.",
    "hero.lede": "CK Car Wash Grand Baie. WhatsApp 5904 2889.",
    "cta.hint": "Closes 17:00 — message before you come.",
    "t1": "Car wash",
    "t2": "Grand Baie",
    "t3": "Closes",
    "care.title": "Wash on site",
    "care.intro": "Grand Baie. WhatsApp 5904 2889.",
    "c1t": "Exterior",
    "c1d": "Body wash.",
    "c2t": "Interior",
    "c2d": "Ask on WhatsApp what is included.",
    "c3t": "Price",
    "c3d": "Ask on WhatsApp.",
    "hours.title": "Closes at 17:00",
    "hours.p": "Hours from the Google pin. WhatsApp 5904 2889.",
    "visit.addr": "CK Car Wash Grand Baie",
    "map.title": "Grand Baie",
    "map.help": "Plus code XHJH+XHC. WhatsApp if you can’t find the yard.",
    "close.kicker": "A wash, a price",
    "close.title": "WhatsApp 5904 2889.",
    "close.p": "One message before you come."
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
