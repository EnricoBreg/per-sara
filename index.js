// Inizializza AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  once: true,
  offset: 50,
});

// Inizializza SimpleParallax
var image = document.getElementsByClassName("parallax-img");
new simpleParallax(image, {
  scale: 1.5,
  orientation: "up",
  overflow: true,
});

// *** 4. AGGIUNGI QUESTO NUOVO BLOCCO SCRIPT ***
// Inizializza SimpleParallax (Sfondo Sfuocato)
var bg_image = document.getElementsByClassName("parallax-bg-blurred");
new simpleParallax(bg_image, {
  scale: 2.0, // Zoom maggiore per un effetto sfondo
  orientation: "up",
  overflow: true,
  delay: 0.2, // Leggero ritardo
});
// *** FINE AGGIUNTA 4 ***

// *** NUOVO SCRIPT ***
// Logica per cambiare lo sfondo della Navbar da trasparente a scuro dopo lo scroll
const mainNavbar = document.getElementById("mainNavbar");
const backToTopButton = document.getElementById("backToTopBtn");

// All'inizio, la navbar sulla Hero è più bella trasparente
mainNavbar.classList.remove("bg-dark");
mainNavbar.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // Sfondo semi-trasparente iniziale

window.onscroll = function () {
  let scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition > 100) {
    // Quando si scorre, diventa scura
    mainNavbar.classList.add("bg-dark");
    mainNavbar.style.backgroundColor = ""; // Rimuove lo stile inline
  } else {
    // Quando si è in cima, torna semi-trasparente
    mainNavbar.classList.remove("bg-dark");
    mainNavbar.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  }

  if (scrollPosition > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
  console.log("backToTopButton", backToTopButton.classList);
};
