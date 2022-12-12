import { galleryItems } from "./gallery-items.js";

//Створення і рендер розмітки

const creatItemsEl = (galleryItems) =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src='${preview}'
    data-source='${original}'
    alt='${description}'
  />
</a>
</div>`
    )
    .join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", creatItemsEl(galleryItems));



//Реалізація делегування на div.gallery
gallery.addEventListener("click", onGalleryClick);


function onGalleryClick(e) {
  e.preventDefault();
  
  if (!e.target.classList.contains(`gallery__image`)) {  
    // если элемент не содержит данного класса то выход
    return;
  };

  const bigImageUrl = e.target.dataset.source;

  const modal = basicLightbox.create(`
    <img src = "${bigImageUrl}" width = "100%" height = "100%"/>`,
    {
      onShow: () => {window.addEventListener('keydown', onEscKeyPress);},
      onClose: () => {window.removeEventListener('keydown', onEscKeyPress);},
    }
  );

  modal.show();

  function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
     modal.close();
    }
    };
};

