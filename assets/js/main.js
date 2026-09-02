// theme toggle
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var saved;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);

  function current() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function sync() { if (btn) btn.textContent = current() === "dark" ? "light" : "dark"; }
  sync();

  if (btn) btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
})();

// tabs
(function () {
  var tabs = [].slice.call(document.querySelectorAll(".tabs a"));
  var panels = [].slice.call(document.querySelectorAll("main > section"));
  if (!tabs.length) return;

  function show(id) {
    if (!panels.some(function (p) { return p.id === id; })) id = panels[0].id;
    panels.forEach(function (p) { p.hidden = p.id !== id; });
    tabs.forEach(function (t) {
      t.classList.toggle("active", t.getAttribute("href") === "#" + id);
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function (e) {
      e.preventDefault();
      var id = t.getAttribute("href").slice(1);
      show(id);
      history.replaceState(null, "", "#" + id);
      window.scrollTo(0, 0);
    });
  });

  window.addEventListener("hashchange", function () {
    show(location.hash.slice(1));
  });

  show(location.hash.slice(1));
})();

// photo slots: try .jpg/.jpeg/.png/.webp, otherwise show a labelled placeholder
(function () {
  var EXT = [".jpg", ".jpeg", ".png", ".webp"];

  function tryImage(img, base, done) {
    var i = 0;
    img.onerror = function () {
      i++;
      if (i < EXT.length) img.src = base + EXT[i];
      else { img.onerror = null; done(false); };
    };
    img.onload = function () { done(true); };
    img.src = base + EXT[0];
  }

  // header avatar
  var avatar = document.getElementById("avatar");
  if (avatar) {
    tryImage(avatar, avatar.getAttribute("data-fallback"), function (ok) {
      if (!ok) avatar.style.display = "none";
    });
  }

  // section photo grids
  document.querySelectorAll(".photos[data-count]").forEach(function (grid) {
    var count = parseInt(grid.getAttribute("data-count"), 10) || 0;
    var prefix = grid.getAttribute("data-prefix");
    for (var n = 1; n <= count; n++) {
      (function (n) {
        var base = prefix + n;
        var a = document.createElement("a");
        var name = base.split("/").pop() + ".jpg";
        a.href = base + ".jpg";
        a.className = "empty";
        a.textContent = name;

        var img = new Image();
        tryImage(img, base, function (ok) {
          if (ok) {
            a.className = "filled";
            a.textContent = "";
            a.appendChild(img);
          }
        });
        grid.appendChild(a);
      })(n);
    }
  });
})();
