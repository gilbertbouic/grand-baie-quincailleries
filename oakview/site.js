(function () {
  const KEY = "oakview-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Comptoir",
    "nav.find": "Plan",
    "hero.kicker": "Pharmacie · Chemin 20 Pieds · Triolet",
    "hero.title": "Oakview, Chemin 20 Pieds.",
    "hero.lede": "Pharmacy Oakview — Twenty-Foot Road, Triolet. WhatsApp 5446 4100.",
    "cta.wa": "WhatsApp 5446 4100",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 21h30 — un message avant de venir.",
    "t1": "Pharmacie",
    "t2": "20 Pieds",
    "t3": "Ferme",
    "care.kicker": "Comptoir",
    "care.title": "Au comptoir",
    "care.intro": "WhatsApp 5446 4100. Facebook existe déjà sur Google — cette page, c’est le lien site.",
    "c1t": "Pharmacie",
    "c1d": "Comptoir, enseigne OPEN.",
    "c2t": "Soir",
    "c2d": "Ferme 21h30 d’après Google.",
    "c3t": "Plan",
    "c3d": "Twenty-Foot Road, Triolet.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 21h30",
    "hours.p": "Horaires du pin Google. WhatsApp 5446 4100.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Pharmacy Oakview · Twenty-Foot Road · Triolet",
    "map.kicker": "Plan",
    "map.title": "Chemin 20 Pieds, Triolet",
    "map.pin": "Repère",
    "map.help": "WhatsApp si vous cherchez le n° 486.",
    "close.kicker": "Une ordonnance, un conseil",
    "close.title": "WhatsApp 5446 4100.",
    "close.p": "Un message, comme au comptoir.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Counter",
    "nav.find": "Map",
    "hero.kicker": "Pharmacy · Twenty-Foot Rd · Triolet",
    "hero.title": "Oakview, Twenty-Foot Road.",
    "hero.lede": "Pharmacy Oakview — Twenty-Foot Road, Triolet. WhatsApp 5446 4100.",
    "cta.wa": "WhatsApp 5446 4100",
    "cta.gmaps": "Directions",
    "cta.hint": "Closes 21:30 — message before you come.",
    "t1": "Pharmacy",
    "t2": "20 Pieds",
    "t3": "Closes",
    "care.kicker": "Counter",
    "care.title": "At the counter",
    "care.intro": "WhatsApp 5446 4100. Facebook is already on Google — this page is the website link.",
    "c1t": "Pharmacy",
    "c1d": "Counter, OPEN sign.",
    "c2t": "Evening",
    "c2d": "Closes 21:30 on Google.",
    "c3t": "Map",
    "c3d": "Twenty-Foot Road, Triolet.",
    "hours.kicker": "Hours",
    "hours.title": "Closes at 21:30",
    "hours.p": "Hours from the Google pin. WhatsApp 5446 4100.",
    "visit.kicker": "Find us",
    "visit.addr": "Pharmacy Oakview · Twenty-Foot Road · Triolet",
    "map.kicker": "Map",
    "map.title": "Twenty-Foot Road, Triolet",
    "map.pin": "Landmark",
    "map.help": "WhatsApp if you can’t find no. 486.",
    "close.kicker": "A prescription, a question",
    "close.title": "WhatsApp 5446 4100.",
    "close.p": "One message, as at the counter.",
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
