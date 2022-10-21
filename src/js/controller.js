import * as model from './model.js';
import FaceOffView from './views/faceOffView.js';
// Necessary for modal render
import ModalView from './views/modalView.js';

const controlResponse = function () {
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

const refreshPage = function () {
  FaceOffView.renderGameStart();
};

controlScoreLoad();

const init = function () {
  FaceOffView.addHandlerClick(
    controlResponse,
    model.state.computerResponse,
    model.state.userResponse,
    model.state.resultText,
    model.state.score,
    model.persistScore
  );
  FaceOffView.addHandlerClickRefresh(refreshPage);
};

init();
