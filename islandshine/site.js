(function () {
  const KEY = "islandshine-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Lavage",
    "nav.price": "Prix",
    "nav.find": "Plan",
    "hero.kicker": "Lavage auto · Vingt Pieds · Grand Baie",
    "hero.title": "Island Shine, Chemin Vingt Pieds.",
    "hero.lede": "Island Shine Car Wash — lavage auto, Grand Baie. WhatsApp 5909 0340.",
    "cta.wa": "WhatsApp 5909 0340",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 19h30 — un message avant de venir.",
    "t1": "Lavage auto",
    "t2": "Vingt Pieds",
    "t3": "Ferme",
    "care.kicker": "Lavage",
    "care.title": "Lavage sur place",
    "care.intro": "WhatsApp 5909 0340. Demandez le tarif avant de vous déplacer.",
    "c1t": "Extérieur",
    "c1d": "Lavage carrosserie sur place.",
    "c2t": "Intérieur",
    "c2d": "Demandez au WhatsApp ce qui est inclus.",
    "c3t": "Tarif",
    "c3d": "Demandez au WhatsApp.",
    "price.kicker": "Prix",
    "price.title": "Tarifs du lavage",
    "price.p": "Demandez le tarif au WhatsApp. La liste s’affiche ici.",
    "price.list": "Demandez au WhatsApp.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 19h30",
    "hours.p": "Horaires du pin Google. WhatsApp 5909 0340.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Island Shine Car Wash · Vingt Pieds Road · Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Chemin Vingt Pieds, Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XJV3+G74.",
    "close.kicker": "Un lavage, un tarif",
    "close.title": "WhatsApp 5909 0340.",
    "close.p": "Un message avant de venir.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Wash",
    "nav.price": "Prices",
    "nav.find": "Map",
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
    "cta.wa": "WhatsApp 5909 0340",
    "hero.kicker": "Car wash · Vingt Pieds · Grand Baie",
    "hero.title": "Island Shine, Vingt Pieds Road.",
    "hero.lede": "Island Shine Car Wash — Grand Baie. WhatsApp 5909 0340.",
    "cta.hint": "Closes 19:30 — message before you come.",
    "t1": "Car wash",
    "t2": "Vingt Pieds",
    "t3": "Closes",
    "care.title": "Wash on site",
    "care.intro": "WhatsApp 5909 0340. Ask the price before you travel.",
    "c1t": "Exterior",
    "c1d": "Body wash on site.",
    "c2t": "Interior",
    "c2d": "Ask on WhatsApp what is included.",
    "c3t": "Price",
    "c3d": "Ask on WhatsApp.",
    "hours.title": "Closes at 19:30",
    "hours.p": "Hours from the Google pin. WhatsApp 5909 0340.",
    "visit.addr": "Island Shine Car Wash · Vingt Pieds Road · Grand Baie",
    "map.title": "Vingt Pieds Road, Grand Baie",
    "map.help": "Plus code XJV3+G74.",
    "close.kicker": "A wash, a price",
    "close.title": "WhatsApp 5909 0340.",
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
