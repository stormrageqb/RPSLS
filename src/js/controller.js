import * as model from './model.js';
import FaceOffView from './views/faceOffView.js';
// Necessary for modal render
import ModalView from './views/modalView.js';

const controlComputerResponse = function () {
  try {
    // model.getComputerResponse()
    FaceOffView.renderComputerResponse(
      model.state.computerResponse,
      model.state.userResponse,
      model.state.resultText,
      model.state.score
    );
    // FaceOffView.renderScoreOnLoad(model.state.score);
  } catch (err) {
    console.error(err);
  }
};

const controlScoreLoad = function () {
  FaceOffView.renderScoreOnLoad(model.state.score);
};

controlScoreLoad();
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
    model.state.resultText,
    model.state.score,
    model.persistScore
  );
};

init();
// controlComputerResponse();
