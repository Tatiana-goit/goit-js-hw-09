import refs from './refs';
import gallery from './gallery-items';

function createGallery() {
    return gallery.map(({preview, original, description}) => {
        return `
            <li class="gallery__item">
                <a
                    class="gallery__link"
                    href="${original}"
                >
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>
    `});
}

export default function renderGallary () {
    const markup = createGallery();
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup.join(""));
}


