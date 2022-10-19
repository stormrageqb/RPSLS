class ModalView {
  _modalWindow = document.querySelector('.rule-window');
  _resetWindow = document.querySelector('.reset-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.btn-rules');
  _btnClose = document.querySelector('.btn-close-modal');
  _btnReset = document.querySelector('.btn-reset');

  constructor() {
    this._addHandlerShowModal();
    this._addHandlerHideModal();
  }

  toggleModal() {
    this._overlay.classList.toggle('hidden');
    this._modalWindow.classList.toggle('hidden');
  }

  toggleReset() {
    this._overlay.classList.toggle('hidden');
    this._resetWindow.classList.toggle('hidden');
  }

  _addHandlerShowModal() {
    this._btnOpen.addEventListener('click', this.toggleModal.bind(this));
    this._btnReset.addEventListener('click', this.toggleReset.bind(this));
  }

  _addHandlerHideModal() {
    this._btnClose.addEventListener('click', this.toggleModal.bind(this));
    this._overlay.addEventListener('click', this.toggleModal.bind(this));
  }
}

export default new ModalView();
