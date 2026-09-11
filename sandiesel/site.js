(function () {
  const KEY = "sandiesel-lang";
  const I18N = {
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Wash",
    "nav.price": "Prices",
    "nav.find": "Map",
    "care.kicker": "Wash",
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
    "cta.wa": "WhatsApp 5912 0230",
    "hero.kicker": "Car wash · La Salette · Grand Baie",
    "hero.title": "San Diesel, La Salette Road.",
    "hero.lede": "San Diesel Services — La Salette Road, Grand Baie. WhatsApp 5912 0230.",
    "cta.hint": "No hours on Google — WhatsApp before you come.",
    "t1": "Car wash",
    "t2": "La Salette",
    "t3": "Ask first",
    "care.title": "Wash on site",
    "care.intro": "La Salette Road, Grand Baie. WhatsApp 5912 0230.",
    "c1t": "Exterior",
    "c1d": "Body wash on site.",
    "c2t": "Interior",
    "c2d": "Ask on WhatsApp what is included.",
    "c3t": "Price",
    "c3d": "Ask on WhatsApp.",
    "hours.title": "Hours not listed",
    "hours.p": "No hours on Google. WhatsApp 5912 0230 before you travel.",
    "visit.addr": "San Diesel Services · La Salette Road · Grand Baie 30550",
    "map.title": "La Salette Road, Grand Baie",
    "map.help": "Plus code XHPQ+59.",
    "close.kicker": "A wash, a price",
    "close.title": "WhatsApp 5912 0230.",
    "close.p": "One message before you come."
  },
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Lavage",
    "nav.price": "Prix",
    "nav.find": "Plan",
    "care.kicker": "Lavage",
    "cta.gmaps": "Itinéraire",
    "price.kicker": "Prix",
    "price.title": "Tarifs du lavage",
    "price.p": "Demandez le tarif au WhatsApp. La liste s’affiche ici.",
    "price.list": "Demandez au WhatsApp.",
    "hours.kicker": "Horaires",
    "visit.kicker": "Nous trouver",
    "map.kicker": "Plan",
    "map.pin": "Repère",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel.",
    "cta.wa": "WhatsApp 5912 0230",
    "hero.kicker": "Lavage auto · La Salette · Grand Baie",
    "hero.title": "San Diesel, route La Salette.",
    "hero.lede": "San Diesel Services — route La Salette, Grand Baie. WhatsApp 5912 0230.",
    "cta.hint": "Pas d’horaire sur Google — WhatsApp avant de venir.",
    "t1": "Lavage auto",
    "t2": "La Salette",
    "t3": "Demander",
    "care.title": "Lavage sur place",
    "care.intro": "Route La Salette, Grand Baie. WhatsApp 5912 0230.",
    "c1t": "Extérieur",
    "c1d": "Lavage carrosserie sur place.",
    "c2t": "Intérieur",
    "c2d": "Demandez au WhatsApp ce qui est inclus.",
    "c3t": "Tarif",
    "c3d": "Demandez au WhatsApp.",
    "hours.title": "Horaires non indiqués",
    "hours.p": "Pas d’horaire sur Google. WhatsApp 5912 0230 avant de vous déplacer.",
    "visit.addr": "San Diesel Services · route La Salette · Grand Baie 30550",
    "map.title": "Route La Salette, Grand Baie",
    "map.help": "Plus code XHPQ+59.",
    "close.kicker": "Un lavage, un tarif",
    "close.title": "WhatsApp 5912 0230.",
    "close.p": "Un message avant de venir."
  }
};
  function apply(lang) {
    const pack = I18N[lang] || I18N.en;
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
    return "en";
  }
  apply(bootLang());
})();
