(function () {
  const KEY = "kiss-lang";
  const I18N = {
    fr: {
      draft: "Brouillon — à valider avec vous.",
      "nav.hours": "Horaires",
      "nav.ranges": "Rayons",
      "nav.story": "Histoire",
      "nav.find": "Plan",
      "cta.call": "Appeler",
      "cta.whatsapp": "WhatsApp le magasin",
      "cta.hint": "Réponse au comptoir, généralement en quelques minutes.",
      "status.open": "Ouvert maintenant — passez ou écrivez",
      "status.closed": "Fermé — WhatsApp, on répond à l’ouverture",
      "trust.year": "Année d’établissement",
      "trust.rate": "Note Google",
      "trust.days": "Ouvert le dimanche",
      "trust.yrs": "Ans à Grand Baie",
      "close.kicker": "Une question, une pièce, une couleur",
      "close.title": "Écrivez — on vous dit si c’est en rayon.",
      "close.p": "Pas de formulaire. WhatsApp ou un appel, comme au comptoir.",
      "cta.directions": "Comment venir",
      "cta.gmaps": "Itinéraire Google Maps",
      "hero.rating": "5.0 sur Google · Royal Road",
      "hero.title": "Le magasin du dimanche, depuis 1969.",
      "hero.lede": "Quincaillerie familiale à Grand Baie : vis, clous, outils, peinture et bricolage. Ouvert sept jours, avec le dimanche matin pour les travaux de la maison.",
      "hours.kicker": "Horaires",
      "hours.title": "Ouvert quand vous avez besoin du magasin",
      "hours.note": "Horaires publiés dans les annuaires locaux — à confirmer au comptoir les jours fériés.",
      "visit.kicker": "Nous trouver",
      "visit.title": "Royal Road, Grand Baie",
      "visit.address": "Royal Road, Grand Baie, Maurice",
      "day.mon": "Lundi",
      "day.tue": "Mardi",
      "day.wed": "Mercredi",
      "day.thu": "Jeudi",
      "day.fri": "Vendredi",
      "day.sat": "Samedi",
      "day.sun": "Dimanche",
      "ranges.kicker": "Rayons",
      "ranges.title": "Ce que vous venez chercher",
      "ranges.intro": "Pas un catalogue en ligne — un magasin. Voici les rayons que l’on tient pour les chantiers et la maison.",
      "cat.screws.t": "Vis & clous",
      "cat.screws.d": "La boîte qu’il manque, au bon diamètre.",
      "cat.tools.t": "Outillage",
      "cat.tools.d": "Outils à main pour le quotidien du chantier.",
      "cat.power.t": "Électroportatif",
      "cat.power.d": "Perceuses, meuleuses et accessoires.",
      "cat.paint.t": "Peinture",
      "cat.paint.d": "Peintures, pinceaux, rouleaux, diluants.",
      "cat.plumb.t": "Plomberie",
      "cat.plumb.d": "Raccords, joints, tuyaux et pièces courantes.",
      "cat.garden.t": "Jardin",
      "cat.garden.d": "Arrosage, outils de jardin, petits travaux dehors.",
      "cat.hw.t": "Quincaillerie",
      "cat.hw.d": "Serrures, charnières, cadenas, fixations.",
      "cat.diy.t": "Bricolage",
      "cat.diy.d": "Le reste pour finir le weekend chez soi.",
      "story.kicker": "Histoire",
      "story.since": "Plus de 50 ans à Grand Baie",
      "story.title": "Une affaire de famille, pas une enseigne importée",
      "story.p1": "Quincaillerie Kiss Grand Bay est un commerce familial. Les annuaires locaux datent l’établissement à 1969 — plus de cinquante ans d’outils, de vis et de conseils au comptoir sur Royal Road.",
      "story.p2": "On ne remplace pas le passage en magasin. Ce site sert à une chose : que l’on vous trouve, que l’on sache que vous êtes ouverts le dimanche, et que l’on puisse vous écrire sur WhatsApp avant de venir.",
      "map.kicker": "Plan",
      "map.title": "Sur Royal Road, Grand Baie",
      "map.pin": "Repère",
      "map.help": "Royal Road (B13), Grand Baie. Appelez si vous arrivez en camionnette — on vous dit où vous arrêter.",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel du magasin."
    },
    en: {
      draft: "Draft — to confirm with you.",
      "nav.hours": "Hours",
      "nav.ranges": "Aisles",
      "nav.story": "Story",
      "nav.find": "Map",
      "cta.call": "Call",
      "cta.whatsapp": "WhatsApp the shop",
      "cta.hint": "The counter usually answers within a few minutes.",
      "status.open": "Open now — visit or message",
      "status.closed": "Closed — WhatsApp, we reply when we open",
      "trust.year": "Established",
      "trust.rate": "Google rating",
      "trust.days": "Open on Sunday",
      "trust.yrs": "Years in Grand Baie",
      "close.kicker": "A question, a part, a colour",
      "close.title": "Message us — we’ll say if it’s on the shelf.",
      "close.p": "No form. WhatsApp or a call, as at the counter.",
      "cta.directions": "How to find us",
      "cta.gmaps": "Google Maps directions",
      "hero.rating": "5.0 on Google · Royal Road",
      "hero.title": "The Sunday shop, since 1969.",
      "hero.lede": "A family hardware store in Grand Baie: screws, nails, tools, paint and DIY. Open seven days, including Sunday morning for the jobs around the house.",
      "hours.kicker": "Hours",
      "hours.title": "Open when you actually need the shop",
      "hours.note": "Hours from local directories — please confirm on public holidays.",
      "visit.kicker": "Find us",
      "visit.title": "Royal Road, Grand Baie",
      "visit.address": "Royal Road, Grand Baie, Mauritius",
      "day.mon": "Monday",
      "day.tue": "Tuesday",
      "day.wed": "Wednesday",
      "day.thu": "Thursday",
      "day.fri": "Friday",
      "day.sat": "Saturday",
      "day.sun": "Sunday",
      "ranges.kicker": "Aisles",
      "ranges.title": "What people come in for",
      "ranges.intro": "Not an online catalogue — a shop. These are the aisles we keep for job sites and the house.",
      "cat.screws.t": "Screws & nails",
      "cat.screws.d": "The missing box, in the right size.",
      "cat.tools.t": "Hand tools",
      "cat.tools.d": "Everyday tools for the job.",
      "cat.power.t": "Power tools",
      "cat.power.d": "Drills, grinders and consumables.",
      "cat.paint.t": "Paint",
      "cat.paint.d": "Paint, brushes, rollers, thinners.",
      "cat.plumb.t": "Plumbing",
      "cat.plumb.d": "Fittings, seals, pipe and common parts.",
      "cat.garden.t": "Garden",
      "cat.garden.d": "Watering, garden tools, outdoor fixes.",
      "cat.hw.t": "Hardware",
      "cat.hw.d": "Locks, hinges, padlocks, fixings.",
      "cat.diy.t": "DIY",
      "cat.diy.d": "The rest to finish the weekend at home.",
      "story.kicker": "Story",
      "story.since": "More than 50 years in Grand Baie",
      "story.title": "A family shop, not an imported brand",
      "story.p1": "Quincaillerie Kiss Grand Bay is family-run. Local directories date the business to 1969 — more than fifty years of tools, screws and counter advice on Royal Road.",
      "story.p2": "A website does not replace walking in. It exists so people can find you, see that you open on Sunday, and WhatsApp before they come.",
      "map.kicker": "Map",
      "map.title": "On Royal Road, Grand Baie",
      "map.pin": "Landmark",
      "map.help": "Royal Road (B13), Grand Baie. Call if you arrive with a van — we will tell you where to stop.",
      "footer.draft": "Proposed brochure site — not the official shop website yet."
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

  function setOpen() {
    var el = document.querySelector("[data-open]");
    if (!el) return;
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Indian/Mauritius", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    var map = {};
    parts.forEach(function (p) { map[p.type] = p.value; });
    var day = map.weekday;
    var mins = parseInt(map.hour, 10) * 60 + parseInt(map.minute, 10);
    var open = false;
    if (day === "Sun") open = mins >= 8 * 60 && mins < 13 * 60;
    else open = mins >= 7 * 60 + 30 && mins < 17 * 60 + 30;
    el.hidden = false;
    el.dataset.state = open ? "open" : "closed";
  }

  var start = "fr";
  try { start = localStorage.getItem(KEY) || "fr"; } catch (e) {}
  apply(start);
  setOpen();

  document.querySelectorAll(".send-owner").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var num = a.getAttribute("data-wa-shop") || "";
      var url = location.href.split("#")[0];
      var msg = "Bonzour, mo Mkweli Grand Baie. Mo preparer ene ti page pou ou magasin — horaires, WhatsApp, plan — avec ou façade ki déjà lor Google. Pa encore officiel. Ouvert li kan ou ena ene minute:\n" + url;
      location.href = "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
    });
  });
})();
