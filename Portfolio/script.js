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

// Smooth scroll for CTA buttons
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Dynamic year
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent =
    new Date().getFullYear();
});


// ===== DOM PRACTICE =====

// 1️⃣ Change paragraph text
function changeText() {
  const paragraph = document.getElementById("demo-text");
  paragraph.textContent =
    "The text has been changed using JavaScript!";
}

// 2️⃣ Add list item
let itemCount = 0;

function addItem() {
  const list = document.getElementById("dynamic-list");
  const newItem = document.createElement("li");

  itemCount++;
  newItem.textContent = "List Item " + itemCount;

  list.appendChild(newItem);
}

// 3️⃣ Remove last item
function removeItem() {
  const list = document.getElementById("dynamic-list");

  if (list.lastChild) {
    list.removeChild(list.lastChild);
    itemCount--;
  }
}

// 4️⃣ Change background
function changeBg(color) {
  document.body.style.background = color;
}
