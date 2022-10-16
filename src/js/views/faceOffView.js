class faceOffView {
  _data;
  #parentElement = document.querySelector(".play-container");
  #gameContainerElement = document.querySelector(".pentagon-container");
  renderComputerResponse(data) {
    this._data = data;
    console.log("computer response:", data);
  }

  addHandlerClick(handler, data) {
    this.#gameContainerElement.addEventListener("click", function (e) {
      this._data = data;
      console.log(data);
      const playBtn = e.target.closest(".play-circle");
      if (!playBtn) return;
      const userSelection = playBtn.dataset.id;
      console.log(userSelection);
      handler(userSelection);
    });
  }
}

export default new faceOffView();
