(function () {
  var pay = window.BG_PAY || {};
  var counter = pay.metrika || 94870906;
  var goalProgram = pay.goalProgram || "query_to_tools";
  var enroll = pay.enroll || "https://bgcalls.ru/tools";
  var program = pay.program || "https://bgcalls.ru/tools#rec713897254";

  function withCampaignParams(url) {
    var qs = window.location.search.replace(/^\?/, "");
    if (!qs) return url;
    var hash = "";
    var base = url;
    var hashAt = url.indexOf("#");
    if (hashAt !== -1) {
      hash = url.slice(hashAt);
      base = url.slice(0, hashAt);
    }
    var sep = base.indexOf("?") === -1 ? "?" : "&";
    return base + sep + qs + hash;
  }

  function setHref(selector, url) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.setAttribute("href", withCampaignParams(url));
    });
  }

  setHref(".js-enroll", enroll);
  setHref(".js-program", program);

  document.querySelectorAll(".js-program").forEach(function (el) {
    el.addEventListener("click", function () {
      if (typeof ym === "function") {
        ym(counter, "reachGoal", goalProgram);
      }
    });
  });
})();
