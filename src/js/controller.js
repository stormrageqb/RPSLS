import * as model from "./model.js";
import faceOffView from "./views/faceOffView.js";

const controlComputerResponse = function () {
  try {
    faceOffView.renderComputerResponse(model.state.computerResponse);
  } catch (err) {
    console.error(err);
  }
};

controlComputerResponse();
