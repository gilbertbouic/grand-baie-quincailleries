(function () {
  const KEY = "aj-lang";
  const I18N = {
  "fr": {
    "draft": "Proposition de site — à valider avec vous.",
    "nav.care": "Rayons",
    "nav.find": "Plan",
    "hero.kicker": "Quincaillerie · Chemin 20 Pieds · Grand Baie",
    "hero.title": "Matériaux et fer, au Chemin 20 Pieds.",
    "hero.lede": "Quincaillerie AJ — fer, tubes, grillage, matériaux. Twenty-Foot Road, Grand Baie.",
    "cta.wa": "WhatsApp 5256 2092",
    "cta.gmaps": "Itinéraire",
    "cta.hint": "Ferme 16h30 — un message évite de venir pour rien.",
    "t1": "Quincaillerie",
    "t2": "Grand Baie",
    "t3": "Ferme",
    "care.kicker": "Rayons",
    "care.title": "Pour le chantier du jour",
    "care.intro": "Fer, tubes, grillage. Le reste, WhatsApp 5256 2092.",
    "c1t": "Fer & tubes",
    "c1d": "Rayon ouvert sur la rue.",
    "c2t": "Grillage",
    "c2d": "Rouleaux au local.",
    "c3t": "Matériaux",
    "c3d": "Demandez le stock au WhatsApp.",
    "hours.kicker": "Horaires",
    "hours.title": "Ferme à 16h30",
    "hours.p": "Horaires du pin Google. Confirmez au WhatsApp avant de vous déplacer.",
    "visit.kicker": "Nous trouver",
    "visit.addr": "Quincaillerie AJ · Twenty-Foot Road · Grand Baie",
    "map.kicker": "Plan",
    "map.title": "Chemin 20 Pieds, Grand Baie",
    "map.pin": "Repère",
    "map.help": "Plus code XJW4+VX. WhatsApp si vous cherchez la porte.",
    "close.kicker": "Une barre, un rouleau, une coupe",
    "close.title": "WhatsApp — on vous dit si c’est en rayon.",
    "close.p": "Pas de formulaire. Un message, comme au magasin.",
    "footer.draft": "Site vitrine proposé — pas encore le site officiel."
  },
  "en": {
    "draft": "Proposed site — to confirm with you.",
    "nav.care": "Aisles",
    "nav.find": "Map",
    "hero.kicker": "Hardware · Twenty-Foot Rd · Grand Baie",
    "hero.title": "Steel and materials on Twenty-Foot Road.",
    "hero.lede": "Quincaillerie AJ — steel, tubes, mesh. Twenty-Foot Road, Grand Baie.",
    "cta.wa": "WhatsApp 5256 2092",
    "cta.gmaps": "Directions",
    "cta.hint": "Closes 16:30 — a message saves a wasted trip.",
    "t1": "Hardware",
    "t2": "Grand Baie",
    "t3": "Closes",
    "care.kicker": "Aisles",
    "care.title": "For the job today",
    "care.intro": "Steel, tubes, mesh. The rest, WhatsApp 5256 2092.",
    "c1t": "Steel & tubes",
    "c1d": "Open onto the street.",
    "c2t": "Mesh",
    "c2d": "Rolls at the shop.",
    "c3t": "Materials",
    "c3d": "Ask stock on WhatsApp.",
    "hours.kicker": "Hours",
    "hours.title": "Closes at 16:30",
    "hours.p": "Hours from the Google pin. Confirm on WhatsApp before you come.",
    "visit.kicker": "Find us",
    "visit.addr": "Quincaillerie AJ · Twenty-Foot Road · Grand Baie",
    "map.kicker": "Map",
    "map.title": "Twenty-Foot Road, Grand Baie",
    "map.pin": "Landmark",
    "map.help": "Plus code XJW4+VX. WhatsApp if you can’t find the door.",
    "close.kicker": "A bar, a roll, a cut",
    "close.title": "WhatsApp — we’ll say if it’s in stock.",
    "close.p": "No form. One message, as at the counter.",
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
