(function () {
  const KEY = "my-diamond-spa-lang";
  const I18N = {
    fr: {
      draft: "Proposition de site — à valider avec vous.",
      "nav.care": "Soins",
      "nav.find": "Plan",
      "hero.kicker": "Spa · Super U · Grand Baie",
      "hero.title": "Un moment pour vous, au Super U.",
      "hero.lede": "My Diamond Spa — massages, pédicure, soins. Galerie Super U, Grand Baie.",
      "cta.wa": "WhatsApp 5250 5058",
      "cta.call": "Appeler 269 1502",
      "cta.gmaps": "Itinéraire",
      "cta.hint": "Réservation conseillée — WhatsApp avant de vous déplacer.",
      "trust.mall": "Galerie Grand Baie",
      "trust.town": "Grand Baie",
      "trust.tel": "WhatsApp",
      "care.kicker": "Soins",
      "care.title": "Massages, pédicure, soins",
      "care.intro": "Le menu est au spa. Pour un créneau, WhatsApp 5250 5058.",
      "cat.mass.t": "Massage",
      "cat.mass.d": "Massage relaxant, corps entier.",
      "cat.pedi.t": "Pédicure",
      "cat.pedi.d": "Soin des pieds au spa.",
      "cat.mani.t": "Manucure",
      "cat.mani.d": "Soin des mains et des ongles.",
      "cat.face.t": "Soins visage",
      "cat.face.d": "Soins au spa, selon le menu.",
      "hours.kicker": "Rendez-vous",
      "hours.title": "Rendez-vous conseillé",
      "hours.p": "WhatsApp 5250 5058 pour vérifier un créneau avant de venir.",
      "visit.kicker": "Nous trouver",
      "visit.addr": "My Diamond Spa · galerie Super U · Grand Baie",
      "map.kicker": "Plan",
      "map.title": "Super U, Grand Baie",
      "map.pin": "Repère",
      "map.help": "Galerie Super U, Grand Baie. Vitrine rose, enseigne My Diamond Spa.",
      "close.kicker": "Un massage, une pédicure, un soin",
      "close.title": "Appelez pour un rendez-vous.",
      "close.p": "Super U Grand Baie. Un appel suffit.",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel."
    },
    en: {
      draft: "Proposed site — to confirm with you.",
      "nav.care": "Care",
      "nav.find": "Map",
      "hero.kicker": "Spa · Super U · Grand Baie",
      "hero.title": "A moment for you, at Super U.",
      "hero.lede": "My Diamond Spa — massages, pedicure, treatments. Super U gallery, Grand Baie.",
      "cta.wa": "WhatsApp 5250 5058",
      "cta.call": "Call 269 1502",
      "cta.gmaps": "Directions",
      "cta.hint": "Booking recommended — WhatsApp before you come.",
      "trust.mall": "Grand Baie gallery",
      "trust.town": "Grand Baie",
      "trust.tel": "WhatsApp",
      "care.kicker": "Treatments",
      "care.title": "Massages, pedicure, care",
      "care.intro": "The menu is in the spa. For a slot, WhatsApp 5250 5058.",
      "cat.mass.t": "Massage",
      "cat.mass.d": "Relaxing full-body massage.",
      "cat.pedi.t": "Pedicure",
      "cat.pedi.d": "Foot care in the spa.",
      "cat.mani.t": "Manicure",
      "cat.mani.d": "Hands and nails.",
      "cat.face.t": "Facials",
      "cat.face.d": "Facial treatments, as on the menu.",
      "hours.kicker": "Bookings",
      "hours.title": "Booking recommended",
      "hours.p": "WhatsApp 5250 5058 to check a slot before you come.",
      "visit.kicker": "Find us",
      "visit.addr": "My Diamond Spa · Super U gallery · Grand Baie",
      "map.kicker": "Map",
      "map.title": "Super U, Grand Baie",
      "map.pin": "Landmark",
      "map.help": "Super U gallery, Grand Baie. Pink shopfront, My Diamond Spa sign.",
      "close.kicker": "A massage, a pedicure, a treatment",
      "close.title": "Call to book.",
      "close.p": "Super U Grand Baie. One call is enough.",
      "footer.draft": "Proposed brochure site — not the official website yet."
    }
  };

  function apply(lang) {
    const pack = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
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
