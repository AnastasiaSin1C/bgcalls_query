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

  function goAfterGoal(el, goalName) {
    el.addEventListener("click", function (e) {
      var href = el.getAttribute("href");
      if (typeof ym !== "function" || !href) return;
      e.preventDefault();
      var gone = false;
      function go() {
        if (gone) return;
        gone = true;
        window.location.href = href;
      }
      ym(counter, "reachGoal", goalName, {}, go);
      setTimeout(go, 500);
    });
  }

  setHref(".js-enroll", enroll);
  setHref(".js-program", program);

  document.querySelectorAll(".js-program").forEach(function (el) {
    goAfterGoal(el, goalProgram);
  });
})();
