/* Set LocalStorage */
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
  updateScoreElement()

/* AutoPlay Function */
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId =  setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
    isAutoPlaying = true;

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
/* Stop Auto Play Function */
  function stopPlay() {
    const stopElement = document.querySelector('.auto-stop-button');
  
      if (stopElement.innerHTML === 'Auto Play') {
        stopElement.innerHTML = 'Stop Auto Play';
      } else {
        stopElement.innerHTML = 'Auto Play';
      }
  }

/* Click Function to Select Rock Paper Scissor */
document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper');
});

document.querySelector('.js-scissor-button').addEventListener('click', () => {
  playGame('Scissors');
});

/* Keydown Function to Select Rock Paper Scissor */
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock');
  } else if (event.key === 'p') {
    playGame('Paper');
  } else if (event.key === 's') {
    playGame('Scissors');
  }
});

/* Player Move Function and Result Checks */
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

/* Result Function */
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement()

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You 
    <img src="./images/${playerMove}-emoji.png" class="move-icon">
    <img src="./images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

/* Live Result Section */
function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

/* Computer Random Pick Section */
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