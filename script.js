// ===== CONFIGURATION — à personnaliser =====
// Numéro WhatsApp au format international, sans "+" ni espaces (ex. 229XXXXXXXX pour le Bénin).
const WHATSAPP_NUMBER = "229XXXXXXXX";
const ORDER_MESSAGE =
  "Bonjour, je souhaite commander le vélo d'appartement VELOX + Pack 21 jours offert à 130 000 FCFA.";

// Boutons de commande : ouvrent WhatsApp avec un message pré-rempli
const orderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ORDER_MESSAGE)}`;
document.querySelectorAll(".js-order").forEach((btn) => {
  btn.href = orderUrl;
  btn.target = "_blank";
  btn.rel = "noopener";
});

// FAQ : une seule question ouverte à la fois
const faqItems = document.querySelectorAll(".faq details");
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

// Apparition des blocs au scroll
const revealTargets = document.querySelectorAll(
  ".section-head, .card, .trust__item, .offer"
);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// Vidéos : chargées seulement à l'approche de l'écran, en pause quand elles sont hors écran
const lazyVideos = document.querySelectorAll(".js-lazy-video");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function loadVideo(video) {
  if (!video.src) video.src = video.dataset.src;
}
function playVideo(video) {
  if (reduceMotion) return; // on garde l'image fixe si l'utilisateur limite les animations
  loadVideo(video);
  video.play().catch(() => {});
}

if ("IntersectionObserver" in window) {
  const preloadObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !reduceMotion) {
          loadVideo(entry.target);
          preloadObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "600px 0px" }
  );
  const playObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) playVideo(entry.target);
        else entry.target.pause();
      });
    },
    { threshold: 0.25 }
  );
  lazyVideos.forEach((video) => {
    preloadObserver.observe(video);
    playObserver.observe(video);
  });
} else {
  lazyVideos.forEach(playVideo);
}

// Année du footer
document.getElementById("year").textContent = new Date().getFullYear();
