class ModalView {
  // Rules Modal
  _modalWindow = document.querySelector('.rule-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.btn-rules');
  _btnClose = document.querySelector('.btn-close-modal');
  // Reset Modal
  _resetWindow = document.querySelector('.reset-window');
  _ruleOverlay = document.querySelector('.rule-overlay');
  _btnReset = document.querySelector('.btn-reset');
  _btnConfirm = document.querySelector('.btn-confirm');
  _btnDecline = document.querySelector('.btn-decline');

  constructor() {
    // Rules
    this._addHandlerShowModal();
    this._addHandlerHideModal();

    // Reset
    this._addHandlerShowReset();
    this._addHandlerHideReset();
  }

  // Rules

  toggleModal() {
    this._overlay.classList.toggle('hidden');
    this._modalWindow.classList.toggle('hidden');
  }

  _addHandlerShowModal() {
    this._btnOpen.addEventListener('click', this.toggleModal.bind(this));
  }

  _addHandlerHideModal() {
    this._btnClose.addEventListener('click', this.toggleModal.bind(this));
    this._overlay.addEventListener('click', this.toggleModal.bind(this));
  }

  // Reset

  toggleReset() {
    this._ruleOverlay.classList.toggle('hidden');
    this._resetWindow.classList.toggle('hidden');
  }

  _addHandlerShowReset() {
    this._btnReset.addEventListener('click', this.toggleReset.bind(this));
  }

  _addHandlerHideReset() {
    this._btnDecline.addEventListener('click', this.toggleReset.bind(this));
    this._ruleOverlay.addEventListener('click', this.toggleReset.bind(this));
  }
}

export default new ModalView();
