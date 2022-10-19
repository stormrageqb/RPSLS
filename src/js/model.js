import { CPU_CHOICE_RANGE } from './config.js';
import { INITIAL_SCORE } from './config.js';

export const state = {
  computerResponse: {},
  userResponse: [],
  resultText: {
    verdict: [],
    description: [],
  },
  // score: INITIAL_SCORE,
  score: [INITIAL_SCORE],
};

// Computer Response:
const getComputerResponse = function (num) {
  const randomNum = Math.floor(Math.random() * num);
  if (randomNum === 0) {
    // return (state.computerResponse = "rock");
    return 'rock';
  }
  if (randomNum === 1) {
    // return (state.computerResponse = "paper");
    return 'paper';
  }
  if (randomNum === 2) {
    // return (state.computerResponse = "scissors");
    return 'scissors';
  }
  if (randomNum === 3) {
    // return (state.computerResponse = "lizard");
    return 'lizard';
  }
  if (randomNum === 4) {
    // return (state.computerResponse = "spock");
    return 'spock';
  }
};
const returnComputerState = function () {
  state.computerResponse = getComputerResponse(CPU_CHOICE_RANGE);
};
returnComputerState();

console.log(state.computerResponse);

export const persistScore = function () {
  try {
    localStorage.setItem('score', JSON.stringify(state.score));
  } catch (err) {
    console.error(err, 'localStorage disabled - cannot keep track of score');
  }
};

// persistScore();

const init = function () {
  const storage = localStorage.getItem('score');
  console.log(storage);
  if (storage) state.score = JSON.parse(storage);
  console.log(state.score);
  // localStorage.clear();
};

init();
