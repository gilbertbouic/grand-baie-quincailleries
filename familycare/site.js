(function () {
  const KEY = "familycare-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Comptoir",
    "nav.find": "Plan",
    "hero.kicker": "Pharmacie · Trou-aux-Biches",
    "hero.title": "Family Care Plus, Trou-aux-Biches.",
    "hero.lede": "Pharmacie Family Care Plus — pharmacien Mrs S.D. Mangou. WhatsApp 5908 0557.",
    "cta.wa": "WhatsApp 5908 0557",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 21h00 — un message avant de venir.",
    "t1": "Family Care",
    "t2": "Trou-aux-Biches",
    "t3": "Ferme",
    "care.kicker": "Comptoir",
    "care.title": "Au comptoir",
    "care.intro": "WhatsApp 5908 0557. Pharmacien : Mrs S.D. Mangou, sur l’enseigne.",
    "c1t": "Pharmacie",
    "c1d": "Comptoir à Trou-aux-Biches.",
    "c2t": "Ordonnance",
    "c2d": "Message avant de vous déplacer.",
    "c3t": "Soir",
    "c3d": "Ferme 21h00 d’après Google.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 21h00",
    "hours.p": "Horaires du pin Google. WhatsApp 5908 0557.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Pharmacy Family Care Plus · Trou-aux-Biches",
    "map.kicker": "Plan",
    "map.title": "Trou-aux-Biches",
    "map.pin": "Repère",
    "map.help": "Plus code XG7W+3VM.",
    "close.kicker": "Une ordonnance, un conseil",
    "close.title": "WhatsApp 5908 0557.",
    "close.p": "Un message, comme au comptoir.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Counter",
    "nav.find": "Map",
    "hero.kicker": "Pharmacy · Trou-aux-Biches",
    "hero.title": "Family Care Plus, Trou-aux-Biches.",
    "hero.lede": "Pharmacy Family Care Plus — pharmacist Mrs S.D. Mangou. WhatsApp 5908 0557.",
    "cta.wa": "WhatsApp 5908 0557",
    "cta.gmaps": "Directions",
    "cta.hint": "Closes 21:00 — message before you come.",
    "t1": "Family Care",
    "t2": "Trou-aux-Biches",
    "t3": "Closes",
    "care.kicker": "Counter",
    "care.title": "At the counter",
    "care.intro": "WhatsApp 5908 0557. Pharmacist: Mrs S.D. Mangou, on the sign.",
    "c1t": "Pharmacy",
    "c1d": "Counter in Trou-aux-Biches.",
    "c2t": "Prescription",
    "c2d": "Message before you travel.",
    "c3t": "Evening",
    "c3d": "Closes 21:00 on Google.",
    "hours.kicker": "Hours",
    "hours.title": "Closes at 21:00",
    "hours.p": "Hours from the Google pin. WhatsApp 5908 0557.",
    "visit.kicker": "Find us",
    "visit.addr": "Pharmacy Family Care Plus · Trou-aux-Biches",
    "map.kicker": "Map",
    "map.title": "Trou-aux-Biches",
    "map.pin": "Landmark",
    "map.help": "Plus code XG7W+3VM.",
    "close.kicker": "A prescription, a question",
    "close.title": "WhatsApp 5908 0557.",
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
