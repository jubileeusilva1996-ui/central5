(function () {
  var base = (window.CENTRAL_APP_URL || "").replace(/\/$/, "");

  function href(path) {
    if (!base) return path || "#";
    return base + (path || "");
  }

  var tools = [
    { title: "Gerador de imagem", path: "/ferramentas/image-generator", kicker: "IA" },
    { title: "Photoshop", path: "/ferramentas/photoshop", kicker: "Design" },
    { title: "After Effects", path: "/ferramentas/after-effects", kicker: "Motion" },
    { title: "Poster", path: "/ferramentas/poster-generator", kicker: "Design" },
    { title: "Esportes", path: "/ferramentas/sports", kicker: "Jogos" },
    { title: "Plugins", path: "/plugins", kicker: "Adobe" },
    { title: "Admin", path: "/admin", kicker: "Painel" },
    { title: "Cardápio", path: "/cardapio", kicker: "App" },
  ];

  var grid = document.getElementById("tools-grid");
  if (grid) {
    tools.forEach(function (t) {
      var a = document.createElement("a");
      a.className = "card";
      a.href = href(t.path);
      a.innerHTML =
        '<span class="card-kicker">' +
        t.kicker +
        "</span><strong>" +
        t.title +
        "</strong><span>Abrir no hub</span>";
      grid.appendChild(a);
    });
  }

  document.querySelectorAll("[data-path]").forEach(function (el) {
    el.href = href(el.getAttribute("data-path"));
  });

  var primary = document.getElementById("btn-primary");
  var app = document.getElementById("btn-app");
  if (primary) primary.href = href("/");
  if (app) app.href = href("/");
})();
