function playGame(playerMove) {
  const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Rock') {
      if(computerMove === 'Rock') {
        result = 'Tie.';
      } else if (computerMove === 'Paper') {
          result = 'You lose.';
      } else if (computerMove === 'Scissors') {
        result = 'You win.';
      }
    } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
        result = 'You win.';
      } else if (computerMove === 'Paper') {
          result = 'Tie.';
      } else if (computerMove === 'Scissors') {
        result = 'You lose.';
      }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose.';
    } else if (computerMove === 'Paper') {
        result = 'You win.';
    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }
  }
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`)
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
       computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
       computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
       computerMove = 'Scissors';
    }
    return computerMove;
}