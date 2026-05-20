$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");
  var navScrollRequest;
  var navScrollStorageKey = "alfolio-navigation-scroll-target";

  function normalizePath(pathname) {
    return pathname.replace(/\/+$/, "") || "/";
  }

  function getTargetFromHash(hash) {
    if (!hash || hash === "#") {
      return null;
    }

    return document.getElementById(decodeURIComponent(hash.slice(1)));
  }

  function getNavbarOffset() {
    var navbar = document.getElementById("navbar");
    return navbar ? Math.ceil(navbar.getBoundingClientRect().height + 8) : 0;
  }

  function getTargetScrollPosition(target) {
    var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    var targetTop = window.pageYOffset + target.getBoundingClientRect().top - getNavbarOffset();
    return Math.min(maxScroll, Math.max(0, targetTop));
  }

  function easeInOutCubic(progress) {
    return progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  }

  function slowScrollToTarget(target, hash) {
    if (!target) {
      return;
    }

    if (navScrollRequest) {
      window.cancelAnimationFrame(navScrollRequest);
    }

    var startY = window.pageYOffset;
    var targetY = getTargetScrollPosition(target);
    var distance = Math.abs(targetY - startY);
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var duration = reduceMotion ? 0 : Math.min(2600, Math.max(900, distance * 0.85));
    var startTime;

    if (history.pushState && hash) {
      history.pushState(null, "", hash);
    }

    function step(timestamp) {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      var progress = duration === 0 ? 1 : Math.min((timestamp - startTime) / duration, 1);
      var nextY = startY + (targetY - startY) * easeInOutCubic(progress);
      window.scrollTo(0, nextY);

      if (progress < 1) {
        navScrollRequest = window.requestAnimationFrame(step);
      }
    }

    navScrollRequest = window.requestAnimationFrame(step);
  }

  function scrollAfterNavbarCollapse(wasOpen, target, hash) {
    if (wasOpen) {
      $("#navbarNav").one("hidden.bs.collapse", function () {
        slowScrollToTarget(target, hash);
      });
      return;
    }

    slowScrollToTarget(target, hash);
  }

  $("#navbarNav .nav-link[href*='#']").on("click", function (event) {
    var $navbarNav = $("#navbarNav");
    var navbarWasOpen = $navbarNav.hasClass("show");
    var destination = new URL(this.href, window.location.href);
    var samePage = destination.origin === window.location.origin && normalizePath(destination.pathname) === normalizePath(window.location.pathname);
    var target = getTargetFromHash(destination.hash);

    $navbarNav.collapse("hide");

    if (samePage && target) {
      event.preventDefault();
      scrollAfterNavbarCollapse(navbarWasOpen, target, destination.hash);
      return;
    }

    if (destination.origin === window.location.origin && destination.hash) {
      event.preventDefault();
      sessionStorage.setItem(navScrollStorageKey, destination.hash);
      destination.hash = "";
      window.location.assign(destination.href);
    }
  });

  var pendingHash = sessionStorage.getItem(navScrollStorageKey);
  var pendingTarget = getTargetFromHash(pendingHash);

  if (pendingTarget) {
    sessionStorage.removeItem(navScrollStorageKey);
    var scrollToPendingTarget = function () {
      slowScrollToTarget(pendingTarget, pendingHash);
    };

    if (document.readyState === "complete") {
      window.setTimeout(scrollToPendingTarget, 80);
    } else {
      $(window).one("load", function () {
        window.setTimeout(scrollToPendingTarget, 80);
      });
    }
  }

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
