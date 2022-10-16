export const state = {
  computerResponse: {},
  userResponse: {},
};

const getComputerResponse = function (max) {
  const randomNum = Math.floor(Math.random() * max);
  if (randomNum === 0) {
    return (state.computerResponse = "rock");
  }
  if (randomNum === 1) {
    return (state.computerResponse = "paper");
  }
  if (randomNum === 2) {
    return (state.computerResponse = "scissors");
  }
  if (randomNum === 3) {
    return (state.computerResponse = "lizard");
  }
  if (randomNum === 4) {
    return (state.computerResponse = "spock");
  }
};

getComputerResponse(5);
console.log(state.computerResponse);
