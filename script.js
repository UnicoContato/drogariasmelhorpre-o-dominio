const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const galleryButtons = document.querySelectorAll("[data-gallery]");
const imageModal = document.querySelector("[data-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const privacy = document.querySelector("[data-privacy]");
const year = document.querySelector("[data-year]");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const openModal = (src, alt) => {
  modalImage.src = src;
  modalImage.alt = alt;
  imageModal.classList.add("is-open");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  imageModal.classList.remove("is-open");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.removeAttribute("src");
  document.body.classList.remove("modal-open");
};

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    openModal(button.dataset.gallery, image.alt);
  });
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.querySelector("[data-privacy-open]").addEventListener("click", () => {
  privacy.classList.add("is-open");
  privacy.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
});

document.querySelectorAll("[data-privacy-close]").forEach((button) => {
  button.addEventListener("click", () => {
    privacy.classList.remove("is-open");
    privacy.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeModal();
  privacy.classList.remove("is-open");
  privacy.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
});
