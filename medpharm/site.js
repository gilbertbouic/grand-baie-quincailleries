(function () {
  const KEY = "medpharm-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Comptoir",
    "nav.find": "Plan",
    "hero.kicker": "Pharmacie · Triolet · 7/7",
    "hero.title": "Medpharm, Triolet — ouverte 7/7.",
    "hero.lede": "Pharmacie Medpharm Ltée — consultation médicale 7/7 d’après l’enseigne. Livraison. WhatsApp 5915 5000.",
    "cta.wa": "WhatsApp 5915 5000",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 21h00 — WhatsApp 5915 5000.",
    "t1": "Sur l’enseigne",
    "t2": "Nord",
    "t3": "Ferme",
    "care.kicker": "Comptoir",
    "care.title": "Pharmacie et consultation",
    "care.intro": "Ouverte 7/7 et consultation médicale 7/7 — texte de l’enseigne. WhatsApp 5915 5000.",
    "c1t": "Pharmacie",
    "c1d": "Comptoir à Triolet.",
    "c2t": "7/7",
    "c2d": "Comme sur la façade.",
    "c3t": "Livraison",
    "c3d": "Coché sur Google.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 21h00",
    "hours.p": "Horaires du pin Google. Enseigne : ouverte 7/7.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Pharmacie Medpharm Ltée · Triolet",
    "map.kicker": "Plan",
    "map.title": "Triolet",
    "map.pin": "Repère",
    "map.help": "WhatsApp si vous cherchez le local.",
    "close.kicker": "Une ordonnance, un conseil",
    "close.title": "WhatsApp 5915 5000.",
    "close.p": "Un message, comme au comptoir.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Counter",
    "nav.find": "Map",
    "hero.kicker": "Pharmacy · Triolet · 7/7",
    "hero.title": "Medpharm, Triolet — open 7 days.",
    "hero.lede": "Pharmacie Medpharm Ltée — medical consultation 7/7 as on the sign. Delivery. WhatsApp 5915 5000.",
    "cta.wa": "WhatsApp 5915 5000",
    "cta.gmaps": "Directions",
    "cta.hint": "Closes 21:00 — WhatsApp 5915 5000.",
    "t1": "On the sign",
    "t2": "North",
    "t3": "Closes",
    "care.kicker": "Counter",
    "care.title": "Pharmacy and consultation",
    "care.intro": "Open 7/7 and medical consultation 7/7 — from the shop sign. WhatsApp 5915 5000.",
    "c1t": "Pharmacy",
    "c1d": "Counter in Triolet.",
    "c2t": "7/7",
    "c2d": "As on the façade.",
    "c3t": "Delivery",
    "c3d": "Ticked on Google.",
    "hours.kicker": "Hours",
    "hours.title": "Closes at 21:00",
    "hours.p": "Hours from the Google pin. Sign: open 7 days.",
    "visit.kicker": "Find us",
    "visit.addr": "Pharmacie Medpharm Ltée · Triolet",
    "map.kicker": "Map",
    "map.title": "Triolet",
    "map.pin": "Landmark",
    "map.help": "WhatsApp if you can’t find the door.",
    "close.kicker": "A prescription, a question",
    "close.title": "WhatsApp 5915 5000.",
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
  }
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
  });
  var start = "fr";
  try { start = localStorage.getItem(KEY) || "fr"; } catch (e) {}
  apply(start);
})();
