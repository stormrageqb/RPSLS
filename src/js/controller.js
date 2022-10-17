import * as model from "./model.js";
import faceOffView from "./views/faceOffView.js";

const controlComputerResponse = function () {
  try {
    // model.getComputerResponse()
    faceOffView.renderComputerResponse(
      model.state.computerResponse,
      model.state.userResponse
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
  faceOffView.addHandlerClick(
    controlComputerResponse,
    model.state.computerResponse,
    model.state.userResponse
  );
};

init();
// controlComputerResponse();
