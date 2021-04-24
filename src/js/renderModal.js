import gallery from './gallery-items';
import refs from './refs';


class RenderModal {
    constructor () {
        this.currentIndex = 0;
    }

    handleOpenModal = (evt)  => {
        evt.preventDefault();

        if (evt.target.nodeName !== 'IMG') {
            return
        }

        this.currentIndex =gallery.findIndex(el => el.preview===evt.target.src)
        
        refs.modal.classList.add('is-open');
        this.changeAttribute (evt.target.dataset.source,evt.target.alt);

        this.activateCloseModal();
    }

    changeAttribute(src, alt) {
        refs.modalImage.src = src;
        refs.modalImage.alt = alt;
    }

   closeModal = () => {
        refs.modal.classList.remove('is-open');
        this.changeAttribute ("","");
        this.deactivateCloseModal();
    }

    closeModalByEsc = (evt) => {
        if ((evt.code === "Escape") & (refs.modal.classList.contains('is-open'))) {
            this.closeModal();
        }
    }

    activateCloseModal = () => {
        refs.modalBtnClose.addEventListener('click', this.closeModal);
        refs.modalOverlay.addEventListener('click', this.closeModal);
        document.addEventListener('keydown', this.closeModalByEsc);
    }

    deactivateCloseModal = () => {
        refs.modalBtnClose.removeEventListener('click', this.closeModal);
        refs.modalOverlay.removeEventListener('click', this.closeModal);
        document.removeEventListener('keydown', this.closeModalByEsc);
    }



}

const renderModal = new RenderModal();
export default renderModal;



