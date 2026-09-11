(function () {
  const KEY = "mike-lang";
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
    "cta.wa": "WhatsApp 5759 9995",
    "hero.kicker": "Car wash · Fond du Sac",
    "hero.title": "Mike Car Wash, Fond du Sac.",
    "hero.lede": "Mike Car Wash — Fond du Sac. WhatsApp 5759 9995.",
    "cta.hint": "Closes 19:00 — message before you come.",
    "t1": "Car wash",
    "t2": "Fond du Sac",
    "t3": "Closes",
    "care.title": "Wash on site",
    "care.intro": "Fond du Sac. WhatsApp 5759 9995.",
    "c1t": "Exterior",
    "c1d": "Body wash on site.",
    "c2t": "Interior",
    "c2d": "Ask on WhatsApp what is included.",
    "c3t": "Price",
    "c3d": "Ask on WhatsApp.",
    "hours.title": "Closes at 19:00",
    "hours.p": "Hours from the Google pin. WhatsApp 5759 9995.",
    "visit.addr": "Mike Car Wash · Fond du Sac",
    "map.title": "Fond du Sac",
    "map.help": "Plus code XH3P+FG8.",
    "close.kicker": "A wash, a price",
    "close.title": "WhatsApp 5759 9995.",
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
    "cta.wa": "WhatsApp 5759 9995",
    "hero.kicker": "Lavage auto · Fond du Sac",
    "hero.title": "Mike Car Wash, Fond du Sac.",
    "hero.lede": "Mike Car Wash — Fond du Sac. WhatsApp 5759 9995.",
    "cta.hint": "Ferme 19h00 — un message avant de venir.",
    "t1": "Lavage auto",
    "t2": "Fond du Sac",
    "t3": "Ferme",
    "care.title": "Lavage sur place",
    "care.intro": "Fond du Sac. WhatsApp 5759 9995.",
    "c1t": "Extérieur",
    "c1d": "Lavage carrosserie sur place.",
    "c2t": "Intérieur",
    "c2d": "Demandez au WhatsApp ce qui est inclus.",
    "c3t": "Tarif",
    "c3d": "Demandez au WhatsApp.",
    "hours.title": "Ferme à 19h00",
    "hours.p": "Horaires du pin Google. WhatsApp 5759 9995.",
    "visit.addr": "Mike Car Wash · Fond du Sac",
    "map.title": "Fond du Sac",
    "map.help": "Plus code XH3P+FG8.",
    "close.kicker": "Un lavage, un tarif",
    "close.title": "WhatsApp 5759 9995.",
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
