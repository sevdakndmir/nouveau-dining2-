fetch("navbar.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("site-header").innerHTML = html;

    // Aktif sayfayı işaretle
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nd-links a").forEach(a => {
      if (a.getAttribute("href") === current) a.classList.add("active");
    });
  });