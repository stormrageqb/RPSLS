class FaceOffView {
  _data;
  _userResponse;
  _resultText;
  _score;
  _parentElement = document.querySelector('.play-container');
  _scoreElement = document.querySelector('.score');
  _gameContainerElement = document.querySelector('.pentagon-container');
  _playAgainBtn = document.querySelector('.btn-play-again');

  renderScoreOnLoad(score) {
    this._score = score;
    const scoreMarkup = this.#generateScoreMarkup();
    this._scoreElement.innerHTML = '';
    this._scoreElement.insertAdjacentHTML('afterbegin', scoreMarkup);
  }

  renderComputerResponse(data, userResponse, resultText, score) {
    this._data = data;
    this._userResponse = userResponse;
    this._resultText = resultText;
    this._score = score;
    // console.log('computer response:', data);
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
    return /* HTML */ `
      <div class="game-round-container">
        <h2 class="choice-text user-text">You picked:</h2>
        <p class="empty-cell">&nbsp;</p>
        <h2 class="choice-text computer-text">The house picked:</h2>
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
        resultText.verdict.push('You lose');
        resultText.description.push('Scissors is crushed by rock');
        score[0] = +score - 1;
      } else if (userSelection === 'rock' && computerResponse === 'scissors') {
        resultText.verdict.push('You win');
        resultText.description.push('Rock crushes scissors');
        score[0] = +score + 1;
      }

      if (computerResponse === 'paper' && userSelection === 'rock') {
        resultText.verdict.push('You lose');
        resultText.description.push('Rock is covered by paper');
        score[0] = +score - 1;
      } else if (userSelection === 'paper' && computerResponse === 'rock') {
        resultText.verdict.push('You win');
        resultText.description.push('Paper covers rock');
        score[0] = +score + 1;
      }

      if (computerResponse === 'scissors' && userSelection === 'paper') {
        resultText.verdict.push('You lose');
        resultText.description.push('Paper is cut by scissors');
        score[0] = +score - 1;
      } else if (userSelection === 'scissors' && computerResponse === 'paper') {
        resultText.verdict.push('You win');
        resultText.description.push('Scissors cuts paper');
        score[0] = +score + 1;
      }

      if (computerResponse === 'spock' && userSelection === 'scissors') {
        resultText.verdict.push('You lose');
        resultText.description.push('Scissors is smashed by Spock');
        score[0] = +score - 1;
      } else if (userSelection === 'spock' && computerResponse === 'scissors') {
        resultText.verdict.push('You win');
        resultText.description.push('Spock smashes scissors');
        score[0] = +score + 1;
      }

      if (computerResponse === 'spock' && userSelection === 'rock') {
        resultText.verdict.push('You lose');
        resultText.description.push('Rock is vaporized by Spock');
        score[0] = +score - 1;
      } else if (userSelection === 'spock' && computerResponse === 'rock') {
        resultText.verdict.push('You win');
        resultText.description.push('Spock vaporizes rock');
        score[0] = +score + 1;
      }

      if (computerResponse === 'paper' && userSelection === 'spock') {
        resultText.verdict.push('You lose');
        resultText.description.push('Spock is disproved by paper');
        score[0] = +score - 1;
      } else if (userSelection === 'paper' && computerResponse === 'spock') {
        resultText.verdict.push('You win');
        resultText.description.push('Paper disproves Spock');
        score[0] = +score + 1;
      }

      if (computerResponse === 'lizard' && userSelection === 'spock') {
        resultText.verdict.push('You lose');
        resultText.description.push('Spock is poisoned by lizard');
        score[0] = +score - 1;
      } else if (userSelection === 'lizard' && computerResponse === 'spock') {
        resultText.verdict.push('You win');
        resultText.description.push('Lizard poisons Spock');
        score[0] = +score + 1;
      }

      if (computerResponse === 'rock' && userSelection === 'lizard') {
        resultText.verdict.push('You lose');
        resultText.description.push('Lizard is crushed by rock');
        score[0] = +score - 1;
      } else if (userSelection === 'rock' && computerResponse === 'lizard') {
        resultText.verdict.push('You win');
        resultText.description.push('Rock crushes lizard');
        score[0] = +score + 1;
      }

      if (computerResponse === 'scissors' && userSelection === 'lizard') {
        resultText.verdict.push('You lose');
        resultText.description.push('Lizard is decapitated by scissors');
        score[0] = +score - 1;
      } else if (
        userSelection === 'scissors' &&
        computerResponse === 'lizard'
      ) {
        resultText.verdict.push('You win');
        resultText.description.push('Scissors decapitates lizard');
        score[0] = +score + 1;
      }

      if (computerResponse === 'lizard' && userSelection === 'paper') {
        resultText.verdict.push('You lose');
        resultText.description.push('Paper is eaten by lizard');
        score[0] = +score - 1;
      } else if (userSelection === 'lizard' && computerResponse === 'paper') {
        resultText.verdict.push('You win');
        resultText.description.push('Lizard eats paper');
        score[0] = +score + 1;
      }
      persistScore();
    };

    const getUserResponse = function (e) {
      this._data = computerResponse;
      const playBtn = e.target.closest('.play-circle');
      if (!playBtn) return;
      let userSelection = playBtn.dataset.id;
      userResponse.push(userSelection);
      this._userResponse = userResponse;
      compareChoices(
        computerResponse,
        userResponse[0],
        resultText,
        score,
        persistScore
      );
      handler(userResponse[0]);
    };

    this._gameContainerElement.addEventListener('click', getUserResponse);
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
