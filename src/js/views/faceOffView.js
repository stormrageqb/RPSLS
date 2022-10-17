class faceOffView {
  _data;
  _userResponse;
  _parentElement = document.querySelector(".play-container");
  #gameContainerElement = document.querySelector(".pentagon-container");
  renderComputerResponse(data) {
    this._data = data;
    console.log("computer response:", data);
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

  addHandlerClick(handler, computerResponse) {
    const compareChoices = function (computerResponse, userSelection) {
      if (computerResponse === userSelection) {
        console.log("It is a draw");
        const resultText = "It is a draw";
        // renderMatch(computerResponse, userSelection, resultText);
      }

      if (computerResponse === "rock" && userSelection === "scissors") {
        console.log("The CPU wins");
      } else if (userSelection === "rock" && computerResponse === "scissors") {
        console.log("You win!");
      }

      if (computerResponse === "paper" && userSelection === "rock") {
        console.log("The CPU wins");
      } else if (userSelection === "paper" && computerResponse === "rock") {
        console.log("You win!");
      }

      if (computerResponse === "scissors" && userSelection === "paper") {
        console.log("The CPU wins");
      } else if (userSelection === "scissors" && computerResponse === "paper") {
        console.log("You win!");
      }

      if (computerResponse === "spock" && userSelection === "scissors") {
        console.log("The CPU wins");
      } else if (userSelection === "spock" && computerResponse === "scissors") {
        console.log("You win!");
      }

      if (computerResponse === "spock" && userSelection === "rock") {
        console.log("The CPU wins");
      } else if (userSelection === "spock" && computerResponse === "rock") {
        console.log("You win!");
      }

      if (computerResponse === "paper" && userSelection === "spock") {
        console.log("The CPU wins");
      } else if (userSelection === "paper" && computerResponse === "spock") {
        console.log("You win!");
      }

      if (computerResponse === "lizard" && userSelection === "spock") {
        console.log("The CPU wins");
      } else if (userSelection === "lizard" && computerResponse === "spock") {
        console.log("You win!");
      }

      if (computerResponse === "rock" && userSelection === "lizard") {
        console.log("The CPU wins");
      } else if (userSelection === "rock" && computerResponse === "lizard") {
        console.log("You win!");
      }

      if (computerResponse === "scissors" && userSelection === "lizard") {
        console.log("The CPU wins");
      } else if (
        userSelection === "scissors" &&
        computerResponse === "lizard"
      ) {
        console.log("You win!");
      }

      if (computerResponse === "lizard" && userSelection === "paper") {
        console.log("The CPU wins");
      } else if (userSelection === "lizard" && computerResponse === "paper") {
        console.log("You win!");
      }
    };

    this.#gameContainerElement.addEventListener("click", function (e) {
      this._data = computerResponse;
      console.log(computerResponse);
      const playBtn = e.target.closest(".play-circle");
      if (!playBtn) return;
      const userSelection = playBtn.dataset.id;
      console.log(userSelection);
      compareChoices(computerResponse, userSelection);
      handler(userSelection);
    });
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

export default new faceOffView();
