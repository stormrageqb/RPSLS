class FaceOffView {
  _data;
  _userResponse;
  _resultText;
  _parentElement = document.querySelector('.play-container');
  #gameContainerElement = document.querySelector('.pentagon-container');

  renderComputerResponse(data, userResponse, resultText) {
    this._data = data;
    this._userResponse = userResponse;
    this._resultText = resultText;
    console.log(resultText);
    console.log(userResponse);
    console.log(this._userResponse);
    console.log(this);
    console.log('computer response:', data);
    const markup = this.#generateMarkup();
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
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
          <button class="btn btn-play-again">Play Again</button>
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

  addHandlerClick(handler, computerResponse, userResponse, resultText) {
    // console.log(this._userResponse);
    // console.log(resultText);
    const compareChoices = function (
      computerResponse,
      userSelection,
      resultText
    ) {
      if (computerResponse === userSelection) {
        console.log('It is a draw');
        resultText.push('Draw');
        // resultText = "It's a draw!";
        // return resultText;
        // renderMatch(computerResponse, userSelection, resultText);
      }

      if (computerResponse === 'rock' && userSelection === 'scissors') {
        console.log('The CPU wins');
        resultText.push('You lose');
      } else if (userSelection === 'rock' && computerResponse === 'scissors') {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'paper' && userSelection === 'rock') {
        console.log('You lose');
        resultText.push('You lose');
      } else if (userSelection === 'paper' && computerResponse === 'rock') {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'scissors' && userSelection === 'paper') {
        console.log('You lose');
        resultText.push('You lose');
      } else if (userSelection === 'scissors' && computerResponse === 'paper') {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'spock' && userSelection === 'scissors') {
        console.log('The CPU wins');
        resultText.push('You lose');
      } else if (userSelection === 'spock' && computerResponse === 'scissors') {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'spock' && userSelection === 'rock') {
        console.log('The CPU wins');
        resultText.push('You lose');
      } else if (userSelection === 'spock' && computerResponse === 'rock') {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'paper' && userSelection === 'spock') {
        console.log('The CPU wins');
        resultText.push('You lose');
      } else if (userSelection === 'paper' && computerResponse === 'spock') {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'lizard' && userSelection === 'spock') {
        console.log('The CPU wins');
        resultText.push('You lose');
      } else if (userSelection === 'lizard' && computerResponse === 'spock') {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'rock' && userSelection === 'lizard') {
        console.log('The CPU wins');
        resultText.push('You lose');
      } else if (userSelection === 'rock' && computerResponse === 'lizard') {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'scissors' && userSelection === 'lizard') {
        console.log('The CPU wins');
        resultText.push('You lose');
      } else if (
        userSelection === 'scissors' &&
        computerResponse === 'lizard'
      ) {
        console.log('You win!');
        resultText.push('You win');
      }

      if (computerResponse === 'lizard' && userSelection === 'paper') {
        console.log('The CPU wins');
        resultText.push('You lose');
      } else if (userSelection === 'lizard' && computerResponse === 'paper') {
        console.log('You win!');
        resultText.push('You win');
      }
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
      compareChoices(computerResponse, userResponse[0], resultText);
      handler(userResponse[0]);
    };

    this.#gameContainerElement.addEventListener('click', getUserResponse);
  }

  //   compareChoices(computerResponse, userSelection) {
  //     if (computerResponse === userSelection) {
  //       console.log("It is a draw");
  //     }

  //     if (computerResponse === "rock" && userSelection === "scissors") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "rock" && computerResponse === "scissors") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "paper" && userSelection === "rock") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "paper" && computerResponse === "rock") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "scissors" && userSelection === "paper") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "scissors" && computerResponse === "paper") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "spock" && userSelection === "scissors") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "spock" && computerResponse === "scissors") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "spock" && userSelection === "rock") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "spock" && computerResponse === "rock") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "paper" && userSelection === "spock") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "paper" && computerResponse === "spock") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "lizard" && userSelection === "spock") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "lizard" && computerResponse === "spock") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "rock" && userSelection === "lizard") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "rock" && computerResponse === "lizard") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "scissors" && userSelection === "lizard") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "scissors" && computerResponse === "lizard") {
  //       console.log("You win!");
  //     }

  //     if (computerResponse === "lizard" && userSelection === "paper") {
  //       console.log("The CPU wins");
  //     } else if (userSelection === "lizard" && computerResponse === "paper") {
  //       console.log("You win!");
  //     }
  //   }
}

export default new FaceOffView();
