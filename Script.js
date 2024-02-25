'use strict';

const player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');
let player1CurrentScore = document.getElementById('player1CurrentScore');
let player2CurrentScore = document.getElementById('player2CurrentScore');
const playerSection = document.querySelectorAll('.player');
const newGameBtn = document.querySelector('.newGameBtn');
const diceBtn = document.querySelector('.diceBtn');
const holdBtn = document.querySelector('.holdBtn');
const diceImage = document.querySelector('.diceImage');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

let score, currentScore, activePlayer, playing;

//Define Functions

// fucntion to switch players
const switchPlayer = function () {
  document.getElementById(`player${activePlayer}CurrentScore`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
  player1.classList.toggle('activePlayer');
  player2.classList.toggle('activePlayer');
};

// Initiation function

const initiation = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  playing = true;

  player1Score.textContent = 0;
  player2Score.textContent = 0;

  diceImage.classList.add('hidden');
  player1.classList.remove('winner');
  player2.classList.remove('winner');
  player1.classList.add('activePlayer');
  player2.classList.remove('activePlayer');
};
initiation();

//Game start
// Rolling dice Button
diceBtn.addEventListener('click', function () {
  if (playing) {
    // Generate Randum Number between 1 and 6
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    //showing dice
    diceImage.classList.remove('hidden');
    diceImage.src = `Dice Images/dice-${diceValue}.png`;
    //check for roll 1
    //if dice isn't 1, add dice value to current score
    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`player${activePlayer}CurrentScore`).textContent =
        currentScore;
    } else {
      // if dice is 1, seitch active player and reset player current score
      //Switch to the next Player
      switchPlayer();
    }
  }
});

// Hold Button
holdBtn.addEventListener('click', function () {
  //if playing is true (there was no winner)
  if (playing) {
    //add current score to the player score
    score[activePlayer - 1] += currentScore;
    document.getElementById(`player${activePlayer}Score`).textContent =
      score[activePlayer - 1];
    // player wins if it's score is above 100
    if (score[activePlayer - 1] >= 100) {
      diceImage.classList.add('hidden');
      document.querySelector(`.player${activePlayer}`).classList.add('winner');
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove('activePlayer');
      playing = 0;
    }
    // switch player
    switchPlayer();
  }
});

// New Game Button
newGameBtn.addEventListener('click', initiation);
