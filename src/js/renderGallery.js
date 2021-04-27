import refs from './refs';
import gallery from './gallery-items';
import cardTpl from "../templates/light-box.hbs";

function createGallery(gallery) {
    // return gallery.map(gallery => cardTpl(gallery));
    return gallery.map(cardTpl);

}

export default function renderGallary () {
    const markup = createGallery(gallery);
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup.join(""));
}


