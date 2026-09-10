(function () {
  const KEY = "bubbles-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Lavage",
    "nav.price": "Prix",
    "nav.find": "Plan",
    "hero.kicker": "Lavage auto · La Salette · Grand Baie",
    "hero.title": "Bubbles, route La Salette.",
    "hero.lede": "Bubbles Car Wash — La Salette Road, Grand Baie. WhatsApp 5776 0028.",
    "cta.wa": "WhatsApp 5776 0028",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Horaires non indiqués sur Google — WhatsApp avant de venir.",
    "t1": "Lavage auto",
    "t2": "La Salette",
    "t3": "Avant de venir",
    "care.kicker": "Lavage",
    "care.title": "Lavage sur place",
    "care.intro": "La Salette Road. WhatsApp 5776 0028.",
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
    "hours.title": "Horaires à confirmer",
    "hours.p": "Pas d’horaire sur Google. WhatsApp 5776 0028 avant de vous déplacer.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Bubbles Car Wash · La Salette Road · Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Route La Salette, Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XHPP+QG.",
    "close.kicker": "Un lavage, un tarif",
    "close.title": "WhatsApp 5776 0028.",
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
    "cta.wa": "WhatsApp 5776 0028",
    "hero.kicker": "Car wash · La Salette · Grand Baie",
    "hero.title": "Bubbles, La Salette Road.",
    "hero.lede": "Bubbles Car Wash — La Salette Road, Grand Baie. WhatsApp 5776 0028.",
    "cta.hint": "No hours on Google — WhatsApp before you come.",
    "t1": "Car wash",
    "t2": "La Salette",
    "t3": "Before you come",
    "care.title": "Wash on site",
    "care.intro": "La Salette Road. WhatsApp 5776 0028.",
    "c1t": "Exterior",
    "c1d": "Body wash.",
    "c2t": "Interior",
    "c2d": "Ask on WhatsApp what is included.",
    "c3t": "Price",
    "c3d": "Ask on WhatsApp.",
    "hours.title": "Hours to confirm",
    "hours.p": "No hours on Google. WhatsApp 5776 0028 before you travel.",
    "visit.addr": "Bubbles Car Wash · La Salette Road · Grand Baie",
    "map.title": "La Salette Road, Grand Baie",
    "map.help": "Plus code XHPP+QG.",
    "close.kicker": "A wash, a price",
    "close.title": "WhatsApp 5776 0028.",
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
