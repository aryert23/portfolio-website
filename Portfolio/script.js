// Smooth scroll for CTA buttons
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Subtle parallax effect on mouse move for hero card
const hero = document.querySelector(".hero");
const profileCard = document.querySelector(".profile-card");

if (hero && profileCard) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    profileCard.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  hero.addEventListener("mouseleave", () => {
    profileCard.style.transform = "translate3d(0, 0, 0)";
  });
}
