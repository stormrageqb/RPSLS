class faceOffView {
  #data;

  renderComputerResponse(data) {
    this.#data = data;
    console.log(data);
  }
}

export default new faceOffView();
