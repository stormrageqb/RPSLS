import * as model from "./model.js";
import faceOffView from "./views/faceOffView.js";

const controlComputerResponse = function () {
  try {
    // model.getComputerResponse()
    faceOffView.renderComputerResponse(model.state.computerResponse);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  faceOffView.addHandlerClick(controlComputerResponse);
};

init();
// controlComputerResponse();
