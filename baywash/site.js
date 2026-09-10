(function () {
  const KEY = "baywash-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Lavage",
    "nav.price": "Prix",
    "nav.find": "Plan",
    "hero.kicker": "Lavage auto · Sottise Road · Grand Baie",
    "hero.title": "BayWash, Sottise Road.",
    "hero.lede": "BayWash Auto Spa — Sottise Road, Grand Baie. WhatsApp 5948 4725.",
    "cta.wa": "WhatsApp 5948 4725",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Mer–sam jusqu’à 16h30 — un message avant de venir.",
    "t1": "Auto spa",
    "t2": "Sottise",
    "t3": "Fermé",
    "care.kicker": "Lavage",
    "care.title": "Lavage sur place",
    "care.intro": "Sottise Road. WhatsApp 5948 4725.",
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
    "hours.title": "Lundi fermé",
    "hours.p": "D’après l’enseigne : lundi fermé ; mardi 08h30–13h00 ; mercredi–samedi 08h30–16h30 ; dimanche 08h30–15h00.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "BayWash Auto Spa · Sottise Road · Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Sottise Road, Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XHHM+76G.",
    "close.kicker": "Un lavage, un tarif",
    "close.title": "WhatsApp 5948 4725.",
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
    "cta.wa": "WhatsApp 5948 4725",
    "hero.kicker": "Car wash · Sottise Road · Grand Baie",
    "hero.title": "BayWash, Sottise Road.",
    "hero.lede": "BayWash Auto Spa — Sottise Road, Grand Baie. WhatsApp 5948 4725.",
    "cta.hint": "Wed–Sat until 16:30 — message before you come.",
    "t1": "Auto spa",
    "t2": "Sottise",
    "t3": "Closed",
    "care.title": "Wash on site",
    "care.intro": "Sottise Road. WhatsApp 5948 4725.",
    "c1t": "Exterior",
    "c1d": "Body wash.",
    "c2t": "Interior",
    "c2d": "Ask on WhatsApp what is included.",
    "c3t": "Price",
    "c3d": "Ask on WhatsApp.",
    "hours.title": "Closed Monday",
    "hours.p": "From the sign: Monday closed; Tuesday 08:30–13:00; Wednesday–Saturday 08:30–16:30; Sunday 08:30–15:00.",
    "visit.addr": "BayWash Auto Spa · Sottise Road · Grand Baie",
    "map.title": "Sottise Road, Grand Baie",
    "map.help": "Plus code XHHM+76G.",
    "close.kicker": "A wash, a price",
    "close.title": "WhatsApp 5948 4725.",
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
