class FaceOffView {
  _data;
  _userResponse;
  _resultText;
  _score;
  _parentElement = document.querySelector('.play-container');
  _scoreElement = document.querySelector('.score');
  #gameContainerElement = document.querySelector('.pentagon-container');
  _playAgainBtn = document.querySelector('.btn-play-again');

  renderScoreOnLoad(score) {
    this._score = score;
    console.log(score);
    const scoreMarkup = this.#generateScoreMarkup();
    this._scoreElement.innerHTML = '';
    this._scoreElement.insertAdjacentHTML('afterbegin', scoreMarkup);
  }

  renderComputerResponse(data, userResponse, resultText, score) {
    this._data = data;
    this._userResponse = userResponse;
    this._resultText = resultText;
    this._score = score;
    // console.log(resultText);
    // console.log(userResponse);
    console.log(score);
    console.log(this._score);
    // console.log(this._userResponse);
    console.log(this);
    console.log('computer response:', data);
    const markup = this.#generateMarkup();
    const scoreMarkup = this.#generateScoreMarkup();
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this._scoreElement.innerHTML = '';
    this._scoreElement.insertAdjacentHTML('afterbegin', scoreMarkup);
  }

  renderGameStart() {
    window.location.reload();
  }

  // Alternative for re-rendering HTML:
  // renderGameStart() {
  //   const gameRoundContainer = document.querySelector('.game-round-container');
  //   const startMarkup = this.#generateStartMarkup();
  //   // this._parentElement.removeChild(gameRoundContainer);
  //   this._parentElement.innerHTML = '';
  //   this._parentElement.insertAdjacentHTML('afterbegin', startMarkup);
  // }

  #generateMarkup() {
    console.log(this._data);
    console.log(this._userResponse);
    console.log(this._resultText);
    return /* HTML */ `
      <div class="game-round-container">
        <h2 class="choice-text">You picked:</h2>
        <p>&nbsp;</p>
        <h2 class="choice-text">The house picked:</h2>
        <div
          class="play-circle ${this
            ._userResponse[0]} choice-circle user-fade-in"
        >
          <img
            class="play-icon in-play-icon"
            src="./src/img/logos/icon-${this._userResponse[0]}.svg"
            alt="${this._userResponse[0]} icon"
          />
        </div>

        <div class="win-lose-container">
          <h2 class="win-lose-text">${this._resultText.verdict}</h2>
          <p class="win-lose-description">${this._resultText.description}</p>
          <button data-id="playBtn" class="btn btn-play-again">
            Play Again
          </button>
        </div>

        <div class="play-circle ${this._data} choice-circle house-fade-in">
          <img
            class="play-icon in-play-icon"
            src="./src/img/logos/icon-${this._data}.svg"
            alt="${this._data} icon"
          />
        </div>
      </div>
    `;
  }

  #generateScoreMarkup() {
    console.log(this._score);
    return `<h1 class="score">${this._score}</h1>`;
  }

  addHandlerClick(
    handler,
    computerResponse,
    userResponse,
    resultText,
    score,
    persistScore
  ) {
    console.log(score);
    const compareChoices = function (
      computerResponse,
      userSelection,
      resultText,
      score,
      persistScore
    ) {
      const scoreElement = document.querySelector('.score');
      scoreElement.classList.add('score-fade-in');
      if (computerResponse === userSelection) {
        console.log('It is a draw');
        resultText.verdict.push('Draw');
        score[0] = +score + 0;
      }

      if (computerResponse === 'rock' && userSelection === 'scissors') {
        console.log('The CPU wins');
        resultText.verdict.push('You lose');
        resultText.description.push('Scissors is crushed by rock');
        score[0] = +score - 1;
        console.log(score);
      } else if (userSelection === 'rock' && computerResponse === 'scissors') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Rock crushes scissors');
        score[0] = +score + 1;
        console.log(score);
      }

      if (computerResponse === 'paper' && userSelection === 'rock') {
        console.log('You lose');
        resultText.verdict.push('You lose');
        resultText.description.push('Rock is covered by paper');
        score[0] = +score - 1;
      } else if (userSelection === 'paper' && computerResponse === 'rock') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Paper covers rock');
        score[0] = +score + 1;
      }

      if (computerResponse === 'scissors' && userSelection === 'paper') {
        console.log('You lose');
        resultText.verdict.push('You lose');
        resultText.description.push('Paper is cut by scissors');
        score[0] = +score - 1;
      } else if (userSelection === 'scissors' && computerResponse === 'paper') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Scissors cuts paper');
        score[0] = +score + 1;
      }

      if (computerResponse === 'spock' && userSelection === 'scissors') {
        console.log('The CPU wins');
        resultText.verdict.push('You lose');
        resultText.description.push('Scissors is smashed by Spock');
        score[0] = +score - 1;
      } else if (userSelection === 'spock' && computerResponse === 'scissors') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Spock smashes scissors');
        score[0] = +score + 1;
      }

      if (computerResponse === 'spock' && userSelection === 'rock') {
        console.log('The CPU wins');
        resultText.verdict.push('You lose');
        resultText.description.push('Rock is vaporized by Spock');
        score[0] = +score - 1;
      } else if (userSelection === 'spock' && computerResponse === 'rock') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Spock vaporizes rock');
        score[0] = +score + 1;
      }

      if (computerResponse === 'paper' && userSelection === 'spock') {
        console.log('The CPU wins');
        resultText.verdict.push('You lose');
        resultText.description.push('Spock is disproved by paper');
        score[0] = +score - 1;
      } else if (userSelection === 'paper' && computerResponse === 'spock') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Paper disproves Spock');
        score[0] = +score + 1;
      }

      if (computerResponse === 'lizard' && userSelection === 'spock') {
        console.log('The CPU wins');
        resultText.verdict.push('You lose');
        resultText.description.push('Spock is poisoned by lizard');
        score[0] = +score - 1;
      } else if (userSelection === 'lizard' && computerResponse === 'spock') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Lizard poisons Spock');
        score[0] = +score + 1;
      }

      if (computerResponse === 'rock' && userSelection === 'lizard') {
        console.log('The CPU wins');
        resultText.verdict.push('You lose');
        resultText.description.push('Lizard is crushed by rock');
        score[0] = +score - 1;
      } else if (userSelection === 'rock' && computerResponse === 'lizard') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Rock crushes lizard');
        score[0] = +score + 1;
      }

      if (computerResponse === 'scissors' && userSelection === 'lizard') {
        console.log('The CPU wins');
        resultText.verdict.push('You lose');
        resultText.description.push('Lizard is decapitated by scissors');
        score[0] = +score - 1;
      } else if (
        userSelection === 'scissors' &&
        computerResponse === 'lizard'
      ) {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Scissors decapitates lizard');
        score[0] = +score + 1;
      }

      if (computerResponse === 'lizard' && userSelection === 'paper') {
        console.log('The CPU wins');
        resultText.verdict.push('You lose');
        resultText.description.push('Paper is eaten by lizard');
        score[0] = +score - 1;
      } else if (userSelection === 'lizard' && computerResponse === 'paper') {
        console.log('You win!');
        resultText.verdict.push('You win');
        resultText.description.push('Lizard eats paper');
        score[0] = +score + 1;
      }
      persistScore();
    };

    const getUserResponse = function (e) {
      this._data = computerResponse;
      console.log(computerResponse);

      const playBtn = e.target.closest('.play-circle');
      if (!playBtn) return;
      let userSelection = playBtn.dataset.id;
      console.log(userSelection);
      userResponse.push(userSelection);
      console.log(userResponse);
      this._userResponse = userResponse;
      console.log(this._userResponse);
      compareChoices(
        computerResponse,
        userResponse[0],
        resultText,
        score,
        persistScore
      );
      handler(userResponse[0]);
    };

    this.#gameContainerElement.addEventListener('click', getUserResponse);
  }

  addHandlerClickRefresh(handler) {
    document.addEventListener('click', function (e) {
      if (e.target && e.target.dataset.id === 'playBtn') {
        handler();
      }
    });
  }
}

export default new FaceOffView();
