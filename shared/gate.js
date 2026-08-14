(function () {
  var KEY = "vitrines-gate";
  var PASS = "mkweli-nord";
  try {
    if (sessionStorage.getItem(KEY) === "ok") return;
  } catch (e) {}
  var w = window.prompt("Accès équipe Mkweli");
  if (w === PASS) {
    try { sessionStorage.setItem(KEY, "ok"); } catch (e) {}
    return;
  }
  document.documentElement.innerHTML =
    "<head><meta charset='utf-8'><meta name='viewport' content='width=device-width'><title></title></head>" +
    "<body style='font-family:system-ui,sans-serif;padding:2rem;color:#333'>Accès réservé.</body>";
})();
