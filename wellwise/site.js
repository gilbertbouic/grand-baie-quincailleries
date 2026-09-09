(function () {
  const KEY = "wellwise-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Comptoir",
    "nav.find": "Plan",
    "hero.kicker": "Pharmacie · Chemin Casse Ghoon · Grand Baie",
    "hero.title": "Wellwise, Chemin Casse Ghoon.",
    "hero.lede": "Wellwise Pharmacy — Grand Baie. WhatsApp 5821 8046. Photo rayon proposée, pas la façade Google.",
    "cta.wa": "WhatsApp 5821 8046",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 21h00 — visuel rayon, pas une photo du bâtiment.",
    "t1": "Pharmacie",
    "t2": "Casse Ghoon",
    "t3": "Ferme",
    "care.kicker": "Comptoir",
    "care.title": "Au comptoir",
    "care.intro": "WhatsApp 5821 8046. La photo du rayon est un visuel proposé — à remplacer par vos photos.",
    "c1t": "Pharmacie",
    "c1d": "Chemin Casse Ghoon, Grand Baie.",
    "c2t": "Soir",
    "c2d": "Ferme 21h00 d’après Google.",
    "c3t": "Photos",
    "c3d": "Envoyez 3 photos du local pour remplacer le visuel.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 21h00",
    "hours.p": "Horaires du pin Google. WhatsApp 5821 8046.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Wellwise Pharmacy · Chemin Casse Ghoon · Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Chemin Casse Ghoon, Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XHR6+PX.",
    "close.kicker": "Une ordonnance, un conseil",
    "close.title": "WhatsApp 5821 8046.",
    "close.p": "Un message. Photos du local bienvenues.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Counter",
    "nav.find": "Map",
    "hero.kicker": "Pharmacy · Chemin Casse Ghoon · Grand Baie",
    "hero.title": "Wellwise, Chemin Casse Ghoon.",
    "hero.lede": "Wellwise Pharmacy — Grand Baie. WhatsApp 5821 8046. Proposed shelf photo, not the Google façade.",
    "cta.wa": "WhatsApp 5821 8046",
    "cta.gmaps": "Directions",
    "cta.hint": "Closes 21:00 — shelf visual, not a building photo.",
    "t1": "Pharmacy",
    "t2": "Casse Ghoon",
    "t3": "Closes",
    "care.kicker": "Counter",
    "care.title": "At the counter",
    "care.intro": "WhatsApp 5821 8046. The shelf photo is a proposed visual — replace with your photos.",
    "c1t": "Pharmacy",
    "c1d": "Chemin Casse Ghoon, Grand Baie.",
    "c2t": "Evening",
    "c2d": "Closes 21:00 on Google.",
    "c3t": "Photos",
    "c3d": "Send 3 shop photos to replace the visual.",
    "hours.kicker": "Hours",
    "hours.title": "Closes at 21:00",
    "hours.p": "Hours from the Google pin. WhatsApp 5821 8046.",
    "visit.kicker": "Find us",
    "visit.addr": "Wellwise Pharmacy · Chemin Casse Ghoon · Grand Baie",
    "map.kicker": "Map",
    "map.title": "Chemin Casse Ghoon, Grand Baie",
    "map.pin": "Landmark",
    "map.help": "Plus code XHR6+PX.",
    "close.kicker": "A prescription, a question",
    "close.title": "WhatsApp 5821 8046.",
    "close.p": "One message. Shop photos welcome.",
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
