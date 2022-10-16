class faceOffView {
  #data;
  #parentElement = document.querySelector(".play-container");
  #gameContainerElement = document.querySelector(".pentagon-container");
  renderComputerResponse(data) {
    this.#data = data;
    console.log(data);
  }

  addHandlerClick(handler) {
    this.#gameContainerElement.addEventListener("click", function (e) {
      const playBtn = e.target.closest(".play-circle");
      if (!playBtn) return;
      console.log(playBtn);
    });
  }
}

export default new faceOffView();
