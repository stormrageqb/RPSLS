import * as model from "./model.js";
import FaceOffView from "./views/faceOffView.js";

const controlComputerResponse = function () {
  try {
    // model.getComputerResponse()
    FaceOffView.renderComputerResponse(
      model.state.computerResponse,
      model.state.userResponse,
      model.state.resultText
    );
  } catch (err) {
    console.error(err);
  }
};

// const controlUserResponse = function () {
//   try {
//     const userResponse = faceOffView.getUserResponse((data = "paper"));
//     // if (!userResponse) return;
//     console.log(userResponse);
//   } catch (err) {
//     console.error(err);
//   }
// };

const init = function () {
  FaceOffView.addHandlerClick(
    controlComputerResponse,
    model.state.computerResponse,
    model.state.userResponse,
    model.state.resultText
  );
};

init();
// controlComputerResponse();
