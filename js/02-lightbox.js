import { galleryItems } from "./gallery-items.js";
// Change code below this line

const creatItemsEl = (galleryItems) =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
      `<div><a class="gallery__item" href="${original}">
      <img class ="gallery__image"
           src = "${preview}"    
           alt = "${description}" 
           "/>
           </a>
     </div>`
    )
    .join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", creatItemsEl(galleryItems));

new SimpleLightbox("ul.gallery a", {
  overlayOpacity: 0.9,
  captionsData: "alt",
  captionDelay: 250
});
