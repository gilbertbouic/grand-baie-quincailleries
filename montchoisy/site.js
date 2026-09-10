(function () {
  const KEY = "montchoisy-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Lavage",
    "nav.price": "Prix",
    "nav.find": "Plan",
    "hero.kicker": "Lavage auto · Mont Choisy · Grand Baie",
    "hero.title": "Mont Choisy Car Wash.",
    "hero.lede": "Mont Choisy Car Wash — parking du mall. WhatsApp 5507 2218.",
    "cta.wa": "WhatsApp 5507 2218",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 17h30 — un message avant de venir.",
    "t1": "Lavage auto",
    "t2": "Mont Choisy",
    "t3": "Ferme",
    "care.kicker": "Lavage",
    "care.title": "Lavage au parking",
    "care.intro": "Parking Mont Choisy Le Mall. WhatsApp 5507 2218.",
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
    "hours.title": "Ferme à 17h30",
    "hours.p": "Horaires du pin Google. WhatsApp 5507 2218.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Mont Choisy Car Wash · parking Mont Choisy Le Mall",
    "map.kicker": "Plan",
    "map.title": "Mont Choisy, Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XHGG+3WH. Parking du mall.",
    "close.kicker": "Un lavage, un tarif",
    "close.title": "WhatsApp 5507 2218.",
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
    "cta.wa": "WhatsApp 5507 2218",
    "hero.kicker": "Car wash · Mont Choisy · Grand Baie",
    "hero.title": "Mont Choisy Car Wash.",
    "hero.lede": "Mont Choisy Car Wash — mall parking. WhatsApp 5507 2218.",
    "cta.hint": "Closes 17:30 — message before you come.",
    "t1": "Car wash",
    "t2": "Mont Choisy",
    "t3": "Closes",
    "care.title": "Wash in the parking",
    "care.intro": "Mont Choisy Le Mall parking. WhatsApp 5507 2218.",
    "c1t": "Exterior",
    "c1d": "Body wash.",
    "c2t": "Interior",
    "c2d": "Ask on WhatsApp what is included.",
    "c3t": "Price",
    "c3d": "Ask on WhatsApp.",
    "hours.title": "Closes at 17:30",
    "hours.p": "Hours from the Google pin. WhatsApp 5507 2218.",
    "visit.addr": "Mont Choisy Car Wash · Mont Choisy Le Mall parking",
    "map.title": "Mont Choisy, Grand Baie",
    "map.help": "Plus code XHGG+3WH. Mall parking.",
    "close.kicker": "A wash, a price",
    "close.title": "WhatsApp 5507 2218.",
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
