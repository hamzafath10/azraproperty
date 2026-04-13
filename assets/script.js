// Navigation légère (effet scroll)
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background = "#0D1B2A";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
  }
});

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
