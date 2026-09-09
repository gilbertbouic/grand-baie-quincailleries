(function () {
  const KEY = "medicine-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Rayons",
    "nav.find": "Plan",
    "hero.kicker": "Pharmacie · Parapharmacie · Vétérinaire",
    "hero.title": "Pharmacie, para, véto — Grand Baie.",
    "hero.lede": "The Medicine Shop — pharmacie, parapharmacie, vétérinaire. Livraison. WhatsApp 5958 6565.",
    "cta.wa": "WhatsApp 5958 6565",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 18h00 — un message avant de venir.",
    "t1": "Grand Baie",
    "t2": "Sur l’enseigne",
    "t3": "Ferme",
    "care.kicker": "Rayons",
    "care.title": "Pharmacie, para, vétérinaire",
    "care.intro": "Comme sur l’enseigne. WhatsApp 5958 6565.",
    "c1t": "Pharmacie",
    "c1d": "Ordonnance et comptoir.",
    "c2t": "Parapharmacie",
    "c2d": "À confirmer au WhatsApp.",
    "c3t": "Vétérinaire",
    "c3d": "Mentionné sur l’enseigne.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 18h00",
    "hours.p": "Horaires du pin Google. WhatsApp 5958 6565.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "The Medicine Shop · Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code 2H4R+QWH.",
    "close.kicker": "Une ordonnance, un conseil",
    "close.title": "WhatsApp 5958 6565.",
    "close.p": "Un message, comme au comptoir.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Aisles",
    "nav.find": "Map",
    "hero.kicker": "Pharmacy · Parapharmacy · Veterinary",
    "hero.title": "Pharmacy, para, vet — Grand Baie.",
    "hero.lede": "The Medicine Shop — pharmacy, parapharmacy, veterinary. Delivery. WhatsApp 5958 6565.",
    "cta.wa": "WhatsApp 5958 6565",
    "cta.gmaps": "Directions",
    "cta.hint": "Closes 18:00 — message before you come.",
    "t1": "Grand Baie",
    "t2": "On the sign",
    "t3": "Closes",
    "care.kicker": "Aisles",
    "care.title": "Pharmacy, para, veterinary",
    "care.intro": "As on the sign. WhatsApp 5958 6565.",
    "c1t": "Pharmacy",
    "c1d": "Prescriptions at the counter.",
    "c2t": "Parapharmacy",
    "c2d": "Confirm on WhatsApp.",
    "c3t": "Veterinary",
    "c3d": "On the shop sign.",
    "hours.kicker": "Hours",
    "hours.title": "Closes at 18:00",
    "hours.p": "Hours from the Google pin. WhatsApp 5958 6565.",
    "visit.kicker": "Find us",
    "visit.addr": "The Medicine Shop · Grand Baie",
    "map.kicker": "Map",
    "map.title": "Grand Baie",
    "map.pin": "Landmark",
    "map.help": "Plus code 2H4R+QWH.",
    "close.kicker": "A prescription, a question",
    "close.title": "WhatsApp 5958 6565.",
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
