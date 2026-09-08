(function () {
  const KEY = "my-diamond-spa-lang";
  const I18N = {
    fr: {
      draft: "Brouillon — à valider avec vous.",
      "nav.care": "Soins",
      "nav.find": "Plan",
      "hero.kicker": "Spa · Super U · Grand Baie",
      "hero.title": "L’équipe devant le local. Google Maps pour vous y rendre.",
      "hero.lede": "My Diamond Spa — vitrine rose au Super U Grand Baie. Photo de l’équipe, pas une image inventée. Pédicure au local. Le menu est affiché à la vitre. Téléphone et horaires : à confirmer au Super U.",
      "cta.maps": "Voir le pin",
      "cta.gmaps": "Itinéraire Google Maps",
      "cta.hint": "Pas de numéro public vérifié ici — le pin Google mène au Super U.",
      "trust.mall": "Galerie Grand Baie",
      "trust.town": "Grand Baie",
      "trust.pin": "Pin Google",
      "care.kicker": "Au spa",
      "care.title": "Ce que l’on voit au local",
      "care.intro": "Pas un catalogue en ligne. Pédicure au spa. Le menu est collé à la vitrine, comme sur la photo. Les tarifs et les dispo, on les confirme au Super U.",
      "cat.spa.t": "Spa",
      "cat.spa.d": "Local à la galerie Super U, enseigne rose.",
      "cat.pedi.t": "Pédicure",
      "cat.pedi.d": "Au local — le reste du menu est à la vitre.",
      "cat.menu.t": "Menu",
      "cat.menu.d": "Affiché à la vitre — on n’invente pas les tarifs ici.",
      "cat.team.t": "L’équipe",
      "cat.team.d": "La photo du local, pas une image générée.",
      "hours.kicker": "Horaires",
      "hours.title": "Horaires à confirmer",
      "hours.p": "On n’invente pas les heures ici. Passez au Super U, ou ouvrez le pin Google avant de vous déplacer.",
      "visit.kicker": "Nous trouver",
      "visit.addr": "My Diamond Spa · galerie Super U · Grand Baie",
      "map.kicker": "Plan",
      "map.title": "Super U, Grand Baie",
      "map.pin": "Repère",
      "map.help": "Galerie Super U, Grand Baie. Vitrine rose, enseigne My Diamond Spa.",
      "close.kicker": "Un soin, un menu à la vitrine",
      "close.title": "Google Maps — le local est au Super U.",
      "close.p": "Pas de formulaire. Pas de numéro inventé. Le pin mène à la galerie.",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel."
    },
    en: {
      draft: "Draft — to confirm with you.",
      "nav.care": "Care",
      "nav.find": "Map",
      "hero.kicker": "Spa · Super U · Grand Baie",
      "hero.title": "The team at the shopfront. Google Maps to get there.",
      "hero.lede": "My Diamond Spa — pink shopfront at Super U Grand Baie. A photo of the team, not a made-up picture. Pedicure in the spa. The menu is on the glass. Phone and hours: confirm at Super U.",
      "cta.maps": "Open the pin",
      "cta.gmaps": "Google Maps directions",
      "cta.hint": "No verified public number here — the Google pin leads to Super U.",
      "trust.mall": "Grand Baie gallery",
      "trust.town": "Grand Baie",
      "trust.pin": "Google pin",
      "care.kicker": "In the spa",
      "care.title": "What you see at the shop",
      "care.intro": "Not an online catalogue. Pedicure in the spa. The menu is on the glass, as in the photo. Prices and slots, we confirm at Super U.",
      "cat.spa.t": "Spa",
      "cat.spa.d": "Shop in the Super U gallery, pink sign.",
      "cat.pedi.t": "Pedicure",
      "cat.pedi.d": "In the spa — the rest of the menu is on the glass.",
      "cat.menu.t": "Menu",
      "cat.menu.d": "On the glass — this page does not invent prices.",
      "cat.team.t": "The team",
      "cat.team.d": "The shop photo, not a generated image.",
      "hours.kicker": "Hours",
      "hours.title": "Hours to confirm",
      "hours.p": "This page does not invent hours. Come to Super U, or open the Google pin before you travel.",
      "visit.kicker": "Find us",
      "visit.addr": "My Diamond Spa · Super U gallery · Grand Baie",
      "map.kicker": "Map",
      "map.title": "Super U, Grand Baie",
      "map.pin": "Landmark",
      "map.help": "Super U gallery, Grand Baie. Pink shopfront, My Diamond Spa sign.",
      "close.kicker": "A treatment, a menu on the glass",
      "close.title": "Google Maps — the shop is at Super U.",
      "close.p": "No form. No invented number. The pin leads to the gallery.",
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
  }
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
  });
  var start = "fr";
  try { start = localStorage.getItem(KEY) || "fr"; } catch (e) {}
  apply(start);
})();
