import { galleryItems } from "./gallery-items.js";
// Change code below this line

function makeMarcup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    )
    .join("");
}

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", makeMarcup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionDelay: 250,
    captionsData: 'alt', 
    animationSpeed: 250,
});

console.log(galleryItems);
