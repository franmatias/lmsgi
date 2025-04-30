// Modo oscuro/claro
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Botón de "ir arriba"
const scrollTopButton = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    if (scrollTopButton) {
      scrollTopButton.style.display = "block";
    }
  } else {
    if (scrollTopButton) {
      scrollTopButton.style.display = "none";
    }
  }
});
if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

