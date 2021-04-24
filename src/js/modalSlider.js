import modal from './renderModal';
import gallery from './gallery-items';


function updateSlider(index) {
    const src = gallery[modal.currentIndex].original;
    const alt = gallery[modal.currentIndex].description;
    modal.changeAttribute(src, alt);
}

export default function changeImage(evt) {
    const length = gallery.length - 1;
         
    if (evt.code === 'ArrowRight') {
        if (modal.currentIndex !== length) {
            modal.currentIndex += 1;
            updateSlider(modal.currentIndex);
         } else {
            modal.currentIndex = 0;
            updateSlider(modal.currentIndex);
        }
    }

    if (evt.code === 'ArrowLeft') {
        if (modal.currentIndex !== 0) {
            modal.currentIndex -= 1;
            updateSlider(modal.currentIndex);
         } else {
            modal.currentIndex = length;
            updateSlider(modal.currentIndex);
         }
    }
}