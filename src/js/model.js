import { CPU_CHOICE_RANGE } from './config.js';
import { INITIAL_SCORE } from './config.js';

export const state = {
  computerResponse: {},
  userResponse: [],
  resultText: {
    verdict: [],
    description: [],
  },
  score: [INITIAL_SCORE],
};

// Computer Response:
const getComputerResponse = function (num) {
  const randomNum = Math.floor(Math.random() * num);
  if (randomNum === 0) {
    return 'rock';
  }
  if (randomNum === 1) {
    return 'paper';
  }
  if (randomNum === 2) {
    return 'scissors';
  }
  if (randomNum === 3) {
    return 'lizard';
  }
  if (randomNum === 4) {
    return 'spock';
  }
};
const returnComputerState = function () {
  state.computerResponse = getComputerResponse(CPU_CHOICE_RANGE);
};
returnComputerState();

// console.log(state.computerResponse); // - For testing purposes - allows you to see cpu response in console

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
  if (storage) state.score = JSON.parse(storage);
};

init();
