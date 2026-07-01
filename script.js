const intro = document.getElementById("filmIntro");
const skipIntro = document.getElementById("skipIntro");
const revealElements = document.querySelectorAll(".reveal");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function closeIntro() {
  if (!intro) return;
  intro.classList.add("hidden");
  setTimeout(() => intro.remove(), 1200);
}

setTimeout(closeIntro, 3400);
skipIntro?.addEventListener("click", closeIntro);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.16 });

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 45, 300)}ms`;
  observer.observe(element);
});

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Demande de devis enregistrée en démonstration. Plus tard, ce formulaire sera connecté à votre adresse e-mail.");
});


// FAQ : referme automatiquement la question ouverte quand on clique sur une autre.
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    }
  });
});
