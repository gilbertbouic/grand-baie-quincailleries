(function () {
  const KEY = "beauty-loft-lang";
  const I18N = {
    fr: {
      draft: "Brouillon — à valider avec vous.",
      "nav.care": "Soins",
      "nav.find": "Plan",
      "hero.kicker": "Salon · 58 Sottise Road · près de Shape Gym",
      "hero.title": "L’équipe au salon. WhatsApp pour un rendez-vous.",
      "hero.lede": "The Beauty Loft — coiffure, couleur, soins. Kérastase et L’Oréal Professionnel au rayon. Photo de l’équipe au salon, pas une image inventée. Facebook et Instagram existent : cette page, c’est le lien Google.",
      "cta.wa": "WhatsApp 5949 1766",
      "cta.call": "Appeler 268 2401",
      "cta.hint": "Horaires à confirmer au salon — un message évite de venir pour rien.",
      "trust.rd": "58 Sottise Road",
      "trust.wa": "5949 1766",
      "trust.town": "Grand Baie",
      "care.kicker": "Au salon",
      "care.title": "Ce que l’on vient chercher ici",
      "care.intro": "Pas un catalogue en ligne. Les soins que le salon annonce déjà : coiffure, couleur, Kérastase. Le reste, on confirme au WhatsApp.",
      "cat.cut.t": "Coupe",
      "cat.cut.d": "Femmes, hommes, enfants — au salon.",
      "cat.col.t": "Couleur",
      "cat.col.d": "Coloration, balayage — à confirmer avec l’équipe.",
      "cat.ker.t": "Kérastase",
      "cat.ker.d": "Soins et produits au rayon, comme sur la photo.",
      "cat.nail.t": "Ongles & soins",
      "cat.nail.d": "Bio nails et soins esthétiques — demandez les dispo.",
      "hours.kicker": "Horaires",
      "hours.title": "Horaires à confirmer",
      "hours.p": "Les annuaires ne sont pas d’accord. On n’invente pas le dimanche ici. WhatsApp 5949 1766 avant de vous déplacer.",
      "visit.kicker": "Nous trouver",
      "visit.addr": "The Beauty Loft · Emalia Ltd · Grand Baie, près de Shape Gym",
      "map.kicker": "Plan",
      "map.title": "Sottise Road, Grand Baie",
      "map.pin": "Repère",
      "map.help": "58 Sottise Road, près de Shape Gym. WhatsApp si vous cherchez le local.",
      "cta.gmaps": "Itinéraire Google Maps",
      "close.kicker": "Une coupe, une couleur, un soin",
      "close.title": "WhatsApp — on vous dit s’il reste une place.",
      "close.p": "Pas de formulaire. Un message, comme au salon.",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel."
    },
    en: {
      draft: "Draft — to confirm with you.",
      "nav.care": "Care",
      "nav.find": "Map",
      "hero.kicker": "Salon · 58 Sottise Road · near Shape Gym",
      "hero.title": "The team in the salon. WhatsApp for a booking.",
      "hero.lede": "The Beauty Loft — cut, colour, treatments. Kérastase and L’Oréal Professionnel on the shelf. A photo of the team in the salon, not a made-up picture. Facebook and Instagram exist: this page is the Google link.",
      "cta.wa": "WhatsApp 5949 1766",
      "cta.call": "Call 268 2401",
      "cta.hint": "Hours to confirm at the salon — a message saves a wasted trip.",
      "trust.rd": "58 Sottise Road",
      "trust.wa": "5949 1766",
      "trust.town": "Grand Baie",
      "care.kicker": "In salon",
      "care.title": "What people come in for",
      "care.intro": "Not an online catalogue. The services the salon already advertises: cut, colour, Kérastase. The rest, we confirm on WhatsApp.",
      "cat.cut.t": "Cut",
      "cat.cut.d": "Women, men, children — in the salon.",
      "cat.col.t": "Colour",
      "cat.col.d": "Colour, balayage — confirm with the team.",
      "cat.ker.t": "Kérastase",
      "cat.ker.d": "Treatments and products on the shelf, as in the photo.",
      "cat.nail.t": "Nails & care",
      "cat.nail.d": "Bio nails and beauty treatments — ask what’s free.",
      "hours.kicker": "Hours",
      "hours.title": "Hours to confirm",
      "hours.p": "Directories disagree. This page does not invent Sunday hours. WhatsApp 5949 1766 before you come.",
      "visit.kicker": "Find us",
      "visit.addr": "The Beauty Loft · Emalia Ltd · Grand Baie, near Shape Gym",
      "map.kicker": "Map",
      "map.title": "Sottise Road, Grand Baie",
      "map.pin": "Landmark",
      "map.help": "58 Sottise Road, near Shape Gym. WhatsApp if you can’t find the door.",
      "cta.gmaps": "Google Maps directions",
      "close.kicker": "A cut, a colour, a treatment",
      "close.title": "WhatsApp — we’ll say if a slot is free.",
      "close.p": "No form. One message, as at the salon.",
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
