import './sass/main.scss';
import renderGallery from './js/renderGallery';
import modal from './js/renderModal';
import refs from './js/refs';
import changeImage from './js/modalSlider';


renderGallery();

refs.galleryContainer.addEventListener('click',  modal.handleOpenModal);

document.addEventListener('keydown', changeImage);


