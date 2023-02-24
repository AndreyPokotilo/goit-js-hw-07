import { galleryItems } from "./gallery-items.js";

function makeMarcup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
    )
    .join("");
}

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", makeMarcup(galleryItems));

galleryRef.addEventListener("click", galleryHandler);

let instance = "";

function galleryHandler(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const imgOriginal = e.target.dataset.source;
  instance = basicLightbox.create(`
    <img 
    class="modal__image"
    src="${imgOriginal}" 
    width="800" 
    height="600">`);
  instance.show();
  window.addEventListener("keydown", keyHandler);
}

function keyHandler(e) {
  const ESC__KEY__CODE = "Escape";

  if (e.code === ESC__KEY__CODE) {
    instance.close();
    window.removeEventListener("keydown", keyHandler);
  }
}
