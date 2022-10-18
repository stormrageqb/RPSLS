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

  #generateMarkup() {
    console.log(this._data);
    console.log(this._userResponse);
    console.log(this._resultText);
    return /* HTML */ `
      <div class="game-round-container">
        <h2 class="choice-text">You picked:</h2>
        <p>&nbsp;</p>
        <h2 class="choice-text">The house picked:</h2>
        <div class="play-circle ${this._userResponse[0]} choice-circle">
          <img
            class="play-icon in-play-icon"
            src="./src/img/logos/icon-${this._userResponse[0]}.svg"
            alt="${this._userResponse[0]} icon"
          />
        </div>

        <div class="win-lose-container">
          <h2 class="win-lose-text">${this._resultText}</h2>
          <button data-id="playBtn" class="btn btn-play-again">
            Play Again
          </button>
        </div>

        <div class="play-circle ${this._data} choice-circle">
          <img
            class="play-icon in-play-icon"
            src="./src/img/logos/icon-${this._data}.svg"
            alt="Paper icon"
          />
        </div>
      </div>
    `;
  }

  #generateScoreMarkup() {
    console.log(this._score);
    return `<h1 class="score">${this._score}</h1>`;
  }

  // getUserResponse(data) {
  //   this._userResponse = data;
  //   this.#gameContainerElement.addEventListener("click", function (e) {
  //     const playBtn = e.target.closest(".play-circle");
  //     console.log(playBtn);
  //     // if (!playBtn) return;
  //     this._userResponse = playBtn.dataset.id;
  //     console.log(userResponse);
  //   });

  //   console.log(this._userResponse);
  //   return this._userResponse;
  // }

  addHandlerClick(
    handler,
    computerResponse,
    userResponse,
    resultText,
    score,
    persistScore
  ) {
    // console.log(this._userResponse);
    // console.log(resultText);
    console.log(score);
    const compareChoices = function (
      computerResponse,
      userSelection,
      resultText,
      score,
      persistScore
    ) {
      if (computerResponse === userSelection) {
        console.log('It is a draw');
        resultText.push('Draw');
        score[0] = +score + 0;
      }

      if (computerResponse === 'rock' && userSelection === 'scissors') {
        console.log('The CPU wins');
        resultText.push('You lose');
        score[0] = +score - 1;
        // persistScore();
        console.log(score);
      } else if (userSelection === 'rock' && computerResponse === 'scissors') {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
        // persistScore();
        console.log(score);
      }

      if (computerResponse === 'paper' && userSelection === 'rock') {
        console.log('You lose');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (userSelection === 'paper' && computerResponse === 'rock') {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
      }

      if (computerResponse === 'scissors' && userSelection === 'paper') {
        console.log('You lose');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (userSelection === 'scissors' && computerResponse === 'paper') {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
      }

      if (computerResponse === 'spock' && userSelection === 'scissors') {
        console.log('The CPU wins');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (userSelection === 'spock' && computerResponse === 'scissors') {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
      }

      if (computerResponse === 'spock' && userSelection === 'rock') {
        console.log('The CPU wins');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (userSelection === 'spock' && computerResponse === 'rock') {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
      }

      if (computerResponse === 'paper' && userSelection === 'spock') {
        console.log('The CPU wins');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (userSelection === 'paper' && computerResponse === 'spock') {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
      }

      if (computerResponse === 'lizard' && userSelection === 'spock') {
        console.log('The CPU wins');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (userSelection === 'lizard' && computerResponse === 'spock') {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
      }

      if (computerResponse === 'rock' && userSelection === 'lizard') {
        console.log('The CPU wins');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (userSelection === 'rock' && computerResponse === 'lizard') {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
      }

      if (computerResponse === 'scissors' && userSelection === 'lizard') {
        console.log('The CPU wins');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (
        userSelection === 'scissors' &&
        computerResponse === 'lizard'
      ) {
        console.log('You win!');
        resultText.push('You win');
        score[0] = +score + 1;
      }

      if (computerResponse === 'lizard' && userSelection === 'paper') {
        console.log('The CPU wins');
        resultText.push('You lose');
        score[0] = +score - 1;
      } else if (userSelection === 'lizard' && computerResponse === 'paper') {
        console.log('You win!');
        resultText.push('You win');
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
        window.location.reload();
      }
    });
  }
}

export default new FaceOffView();
