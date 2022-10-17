class ModalView {
  _modalWindow = document.querySelector('.rule-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.btn-rules');
  _btnClose = document.querySelector('.btn-close-modal');

  constructor() {
    this._addHandlerShowModal();
    this._addHandlerHideModal();
  }

  toggleModal() {
    this._overlay.classList.toggle('hidden');
    this._modalWindow.classList.toggle('hidden');
  }

  _addHandlerShowModal() {
    this._btnOpen.addEventListener('click', this.toggleModal.bind(this));
    console.log('test');
  }

  _addHandlerHideModal() {
    this._btnClose.addEventListener('click', this.toggleModal.bind(this));
    this._overlay.addEventListener('click', this.toggleModal.bind(this));
  }
}

export default new ModalView();
