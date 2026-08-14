(function () {
  const KEY = "coruna-lang";
  const I18N = {
    fr: {
      draft: "Proposition de site — informations à valider avec le propriétaire.",
      "nav.ranges": "Rayons",
      "nav.find": "Nous trouver",
      "cta.call": "263 6879",
      "cta.wa": "WhatsApp le magasin",
      "cta.hint": "Le numéro de 1980. On répond encore au comptoir.",
      "trust.year": "Première de Grand Baie",
      "trust.rate": "Note Google",
      "trust.yrs": "Ans sur Royal Road",
      "close.kicker": "Avant de vous déplacer",
      "close.title": "Un message. On vous dit si on a la pièce.",
      "close.p": "Horaires à confirmer — WhatsApp évite l’aller-retour.",
      "cta.fb": "Page Facebook",
      "cta.gmaps": "Itinéraire",
      "hero.caption": "Image de présentation — à remplacer par une photo de la façade réelle.",
      "hero.since": "Première quincaillerie de Grand Baie",
      "hero.title": "La première quincaillerie de Grand Baie.",
      "hero.lede": "Quincaillerie La Coruna a ouvert ses portes en 1980 — avant que Grand Baie ne devienne la station que l’on connaît. Royal Road. Outils, fournitures, matériaux. Note Google 4.5.",
      "ranges.kicker": "Au magasin",
      "ranges.title": "Ce que l’on vient chercher depuis plus de quarante ans",
      "cat.tools.t": "Outillage",
      "cat.tools.d": "Outils à main et de chantier.",
      "cat.sup.t": "Fournitures",
      "cat.sup.d": "Vis, fixations, petits matériels du quotidien.",
      "cat.mat.t": "Matériaux",
      "cat.mat.d": "Fournitures pour la maison et le chantier.",
      "cat.el.t": "Électricité",
      "cat.el.d": "Petit matériel électrique courant.",
      "cat.hw.t": "Quincaillerie",
      "cat.hw.d": "Serrurerie, accessoires, pièces de rechange.",
      "cat.adv.t": "Conseil",
      "cat.adv.d": "Le comptoir : on vous dit ce qui tient ici, au Nord.",
      "hours.kicker": "Horaires",
      "hours.title": "Horaires à confirmer avec le magasin",
      "hours.p": "Les annuaires ne publient pas d’horaires fiables pour La Coruna. Ce site n’invente pas d’heures. Appelez le 263 6879 avant de vous déplacer un dimanche ou un jour férié.",
      "map.kicker": "Adresse",
      "map.title": "Royal Road, Grand Baie",
      "map.addr": "Royal Road, Grand Baie, Maurice",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel."
    },
    en: {
      draft: "Draft website — details to confirm with the owner.",
      "nav.ranges": "Aisles",
      "nav.find": "Find us",
      "cta.call": "263 6879",
      "cta.wa": "WhatsApp the shop",
      "cta.hint": "The 1980 number. The counter still answers.",
      "trust.year": "Grand Baie’s first",
      "trust.rate": "Google rating",
      "trust.yrs": "Years on Royal Road",
      "close.kicker": "Before you drive",
      "close.title": "One message. We’ll say if we have the part.",
      "close.p": "Hours to confirm — WhatsApp saves the trip.",
      "cta.fb": "Facebook page",
      "cta.gmaps": "Directions",
      "hero.caption": "Presentation image — replace with a photo of the real façade.",
      "hero.since": "Grand Baie’s first hardware shop",
      "hero.title": "Grand Baie’s first hardware shop.",
      "hero.lede": "Quincaillerie La Coruna opened in 1980 — before Grand Baie became the resort people know. Royal Road. Tools, supplies, materials. Google rating 4.5.",
      "ranges.kicker": "In the shop",
      "ranges.title": "What people have come in for, for forty years",
      "cat.tools.t": "Tools",
      "cat.tools.d": "Hand tools and site tools.",
      "cat.sup.t": "Supplies",
      "cat.sup.d": "Screws, fixings, everyday small hardware.",
      "cat.mat.t": "Materials",
      "cat.mat.d": "Supplies for the house and the job.",
      "cat.el.t": "Electrical",
      "cat.el.d": "Common electrical bits.",
      "cat.hw.t": "Hardware",
      "cat.hw.d": "Locks, fittings, spare parts.",
      "cat.adv.t": "Advice",
      "cat.adv.d": "The counter: what actually lasts up north.",
      "hours.kicker": "Hours",
      "hours.title": "Hours to confirm with the shop",
      "hours.p": "Directories do not publish reliable hours for La Coruna. This site does not invent them. Call 263 6879 before a Sunday or public holiday.",
      "map.kicker": "Address",
      "map.title": "Royal Road, Grand Baie",
      "map.addr": "Royal Road, Grand Baie, Mauritius",
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
