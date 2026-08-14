(function () {
  const KEY = "nbz-lang";
  const I18N = {
    fr: {
      draft: "Proposition de site — informations à valider avec le propriétaire.",
      "nav.info": "Infos",
      "nav.ranges": "Rayons",
      "nav.find": "Plan",
      "hero.kicker": "Note Google 4.3–4.5 · Geranium Road",
      "hero.title": "Matériel, électricité, et on vous livre.",
      "hero.lede": "NBZ Hardware Shop est une affaire de famille depuis plus de 30 ans. Outils, matériaux, fournitures électriques — et livraison pour ne pas tout charger dans la camionnette.",
      "cta.call": "Appeler 263 8711",
      "cta.wa": "Demander une livraison",
      "cta.hint": "Dites le quartier et ce qu’il vous faut. On vous dit si on livre.",
      "status.open": "Ouvert — livraison possible aujourd’hui",
      "status.closed": "Fermé — laissez un WhatsApp",
      "trust.yrs": "Ans en famille",
      "trust.rate": "Note Google",
      "trust.days": "Lun–Sam",
      "trust.del": "Livraison Grand Baie",
      "close.kicker": "Chantier demain matin ?",
      "close.title": "WhatsApp — on prépare ou on livre.",
      "close.p": "Un message suffit. Pas de compte, pas de panier.",
      delivery: "Livraison disponible — demandez au 263 8711 ou sur WhatsApp.",
      "hours.kicker": "Horaires",
      "hours.title": "Ouvert six jours",
      "hours.note": "Certains annuaires indiquent 16:30. On a retenu 16:00 — à confirmer au magasin.",
      "visit.kicker": "Adresse",
      "visit.address": "Geranium Road, Grand Baie · plus code XHJG+QGM",
      "visit.aka": "Aussi listé comme Nbz Hardware Ltd / NBZ Hardware Shop.",
      "cta.gmaps": "Itinéraire",
      "day.mon": "Lundi", "day.tue": "Mardi", "day.wed": "Mercredi", "day.thu": "Jeudi", "day.fri": "Vendredi", "day.sat": "Samedi", "day.sun": "Dimanche",
      closed: "Fermé",
      "ranges.kicker": "Rayons",
      "ranges.title": "Pour le chantier et le tableau électrique",
      "cat.el.t": "Électricité",
      "cat.el.d": "Câbles, appareillage, petits matériels pour l’installateur.",
      "cat.tools.t": "Outillage",
      "cat.tools.d": "Outils et consommables pour finir le travail le jour même.",
      "cat.mat.t": "Matériaux",
      "cat.mat.d": "Fournitures de quincaillerie et matériaux courants.",
      "cat.del.t": "Livraison",
      "cat.del.d": "On vous amène la commande. Demandez les conditions au 263 8711.",
      "story.kicker": "Depuis plus de 30 ans",
      "story.title": "Le partenaire des électriciens et des bricoleurs du Nord",
      "story.p": "NBZ est une entreprise familiale. L’idée de ce site n’est pas de vendre en ligne : c’est que le contractor qui cherche « hardware Grand Baie » voie vos horaires, votre numéro, et puisse demander une livraison sans perdre un aller-retour.",
      "map.kicker": "Plan",
      "map.title": "XHJG+QGM, Grand Baie",
      "footer.draft": "Site vitrine proposé — pas encore le site officiel."
    },
    en: {
      draft: "Draft website — details to confirm with the owner.",
      "nav.info": "Info",
      "nav.ranges": "Stock",
      "nav.find": "Map",
      "hero.kicker": "Google 4.3–4.5 · Geranium Road",
      "hero.title": "Hardware, electrics, and we deliver.",
      "hero.lede": "NBZ Hardware Shop has been family-run for over 30 years. Tools, materials, electrical supplies — and delivery so you do not load the pickup twice.",
      "cta.call": "Call 263 8711",
      "cta.wa": "Ask for delivery",
      "cta.hint": "Tell us the area and what you need. We’ll say if we deliver.",
      "status.open": "Open — delivery possible today",
      "status.closed": "Closed — leave a WhatsApp",
      "trust.yrs": "Family years",
      "trust.rate": "Google rating",
      "trust.days": "Mon–Sat",
      "trust.del": "Grand Baie delivery",
      "close.kicker": "Site tomorrow morning?",
      "close.title": "WhatsApp — we pick or we deliver.",
      "close.p": "One message. No account, no cart.",
      delivery: "Delivery available — ask on 263 8711 or WhatsApp.",
      "hours.kicker": "Hours",
      "hours.title": "Open six days",
      "hours.note": "Some listings say 16:30. We used 16:00 — please confirm in store.",
      "visit.kicker": "Address",
      "visit.address": "Geranium Road, Grand Baie · plus code XHJG+QGM",
      "visit.aka": "Also listed as Nbz Hardware Ltd / NBZ Hardware Shop.",
      "cta.gmaps": "Directions",
      "day.mon": "Monday", "day.tue": "Tuesday", "day.wed": "Wednesday", "day.thu": "Thursday", "day.fri": "Friday", "day.sat": "Saturday", "day.sun": "Sunday",
      closed: "Closed",
      "ranges.kicker": "Stock",
      "ranges.title": "For the site and the consumer unit",
      "cat.el.t": "Electrical",
      "cat.el.d": "Cable, accessories, small gear for the installer.",
      "cat.tools.t": "Tools",
      "cat.tools.d": "Tools and consumables to finish the job today.",
      "cat.mat.t": "Materials",
      "cat.mat.d": "Everyday hardware and building supplies.",
      "cat.del.t": "Delivery",
      "cat.del.d": "We bring the order. Ask for terms on 263 8711.",
      "story.kicker": "30+ years",
      "story.title": "The north-coast electrician’s shop",
      "story.p": "NBZ is a family business. This site is not a web shop. It exists so a contractor searching “hardware Grand Baie” sees your hours, your number, and can ask for a delivery without a wasted trip.",
      "map.kicker": "Map",
      "map.title": "XHJG+QGM, Grand Baie",
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
  function setOpen() {
    var el = document.querySelector("[data-open]");
    if (!el) return;
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Indian/Mauritius", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    var map = {};
    parts.forEach(function (p) { map[p.type] = p.value; });
    var mins = parseInt(map.hour, 10) * 60 + parseInt(map.minute, 10);
    var open = map.weekday !== "Sun" && mins >= 7 * 60 + 30 && mins < 16 * 60;
    el.hidden = false;
    el.dataset.state = open ? "open" : "closed";
  }
  var start = "fr";
  try { start = localStorage.getItem(KEY) || "fr"; } catch (e) {}
  apply(start);
  setOpen();
})();
