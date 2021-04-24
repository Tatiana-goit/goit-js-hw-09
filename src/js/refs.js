const galleryContainer = document.querySelector('ul.js-gallery');
const modal = document.querySelector('div.js-lightbox');
const modalOverlay = document.querySelector('.lightbox__overlay')
const modalImage = document.querySelector('.lightbox__image');
const modalBtnClose = document.querySelector('button[data-action="close-lightbox"]');

export default {
    galleryContainer,
    modal,
    modalOverlay,
    modalImage,
    modalBtnClose,
}