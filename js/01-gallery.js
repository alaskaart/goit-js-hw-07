import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainerEl = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
     <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
          />
        </a>
    </div>
       `;
    })
        .join('');
}

const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", cardsMarkup)

galleryContainerEl.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const originalImage = basicLightbox.create (` <img src="${evt.target.dataset.source}"/>`);

    // console.log(evt.target);
    originalImage.show();
    
    galleryContainerEl.addEventListener('keydown', evt => {
        if (evt.code === "Escape") {
            originalImage.close();
        }
    });
}

