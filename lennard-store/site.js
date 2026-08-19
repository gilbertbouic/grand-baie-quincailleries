(function () {
  const KEY = "lennard-lang";
  const I18N = {
    fr: {
      draft: "Brouillon — à valider avec vous.",
      "nav.ranges": "Rayons",
      "nav.find": "Plan",
      "hero.kicker": "Épicerie · B13 · 3.9 sur Google",
      "hero.title": "Ouvert tard. Sur la B13.",
      "hero.lede": "Lennard’s Store — courses du quotidien à Grand Baie. Jusqu’à 20h30 en semaine. Note Google 3.9 (58 avis). Pas encore de site : juste une fiche, et cette page.",
      "cta.wa": "WhatsApp le magasin",
      "cta.call": "Appeler",
      "cta.hint": "Photo Google de votre façade — pas une image inventée.",
      "trust.late": "En semaine",
      "trust.rate": "Note Google",
      "trust.road": "Royal Road",
      "close.kicker": "Avant de venir",
      "close.title": "Un WhatsApp. On vous dit si c’est ouvert.",
      "close.p": "Horaires du dimanche à confirmer. Un message évite de rouler pour rien.",
      "cta.gmaps": "Itinéraire Google Maps",
      "svc.kicker": "Pourquoi ce site existe",
      "svc.title": "Trois choses que la fiche Google ne dit pas assez fort",
      "svc.late.t": "Le soir",
      "svc.late.d": "Jusqu’à 20h30 en semaine. Dimounn fini travail, zot encore capav rentre.",
      "svc.here.t": "Ici, B13",
      "svc.here.d": "Pas besoin de chercher un supermarché plus loin. Plan et itinéraire sur la page.",
      "svc.wa.t": "WhatsApp",
      "svc.wa.d": "« Ena du lait ? Ouvert encore ? » — un message, une réponse. Pas un aller-retour pour rien.",
      "ranges.kicker": "En magasin",
      "ranges.title": "Courses du quotidien",
      "cat.groc.t": "Épicerie",
      "cat.groc.d": "Conserves, riz, huile, produits de tous les jours.",
      "cat.drink.t": "Boissons",
      "cat.drink.d": "Sodas, eau, bière, un coin vins et spiritueux.",
      "cat.house.t": "Maison",
      "cat.house.d": "Produits d’entretien, papier, essentiels.",
      "cat.late.t": "Le soir",
      "cat.late.d": "Ce qu’on a oublié après le travail, sans descendre jusqu’à Grand Baie centre.",
      "hours.kicker": "Horaires",
      "hours.title": "Jusqu’à 20h30 en semaine",
      "hours.p": "Google affiche une fermeture vers 20h30. Samedi souvent plus tard. Dimanche : confirmez au 263 8667 avant de vous déplacer. On n’invente pas le dimanche ici.",
      "map.kicker": "Adresse",
      "map.addr": "XHP9+32, Grand Baie, Maurice",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel."
    },
    en: {
      draft: "Draft — to confirm with you.",
      "nav.ranges": "Aisles",
      "nav.find": "Map",
      "hero.kicker": "Grocery · B13 · 3.9 on Google",
      "hero.title": "Open late. On the B13.",
      "hero.lede": "Lennard’s Store — everyday groceries in Grand Baie. Until 8:30 pm on weekdays. Google 3.9 (58 reviews). No website yet: just a listing, and this page.",
      "cta.wa": "WhatsApp the shop",
      "cta.call": "Call",
      "cta.hint": "Your shopfront from Google — not a made-up picture.",
      "trust.late": "Weekdays",
      "trust.rate": "Google rating",
      "trust.road": "Royal Road",
      "close.kicker": "Before you come",
      "close.title": "One WhatsApp. We’ll say if we’re open.",
      "close.p": "Sunday hours to confirm. A message saves a wasted drive.",
      "cta.gmaps": "Google Maps directions",
      "svc.kicker": "Why this site exists",
      "svc.title": "Three things the Google listing does not say loudly enough",
      "svc.late.t": "Evenings",
      "svc.late.d": "Until 8:30 pm on weekdays. After work, people can still stop in.",
      "svc.here.t": "Here, B13",
      "svc.here.d": "No need to hunt a supermarket further on. Map and directions on the page.",
      "svc.wa.t": "WhatsApp",
      "svc.wa.d": "“Got milk? Still open?” — one message, one answer. No wasted trip.",
      "ranges.kicker": "In store",
      "ranges.title": "Everyday shopping",
      "cat.groc.t": "Groceries",
      "cat.groc.d": "Tins, rice, oil, everyday goods.",
      "cat.drink.t": "Drinks",
      "cat.drink.d": "Sodas, water, beer, a wine and spirits corner.",
      "cat.house.t": "Household",
      "cat.house.d": "Cleaning products, paper, essentials.",
      "cat.late.t": "Evenings",
      "cat.late.d": "What you forgot after work, without driving into Grand Baie centre.",
      "hours.kicker": "Hours",
      "hours.title": "Until 8:30 pm on weekdays",
      "hours.p": "Google shows a close around 8:30 pm. Saturday often later. Sunday: confirm on 263 8667 before you drive. This page does not invent Sunday hours.",
      "map.kicker": "Address",
      "map.addr": "XHP9+32, Grand Baie, Mauritius",
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

  document.querySelectorAll(".send-owner").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var num = a.getAttribute("data-wa-shop") || "2302638667";
      var url = location.href.split("#")[0];
      var msg = "Bonzour, mo Mkweli Grand Baie. Mo preparer ene ti page pou ou magasin — horaires, WhatsApp, plan — avec ou façade ki déjà lor Google. Pa encore officiel. Ouvert li kan ou ena ene minute:\n" + url;
      location.href = "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
    });
  });
})();
