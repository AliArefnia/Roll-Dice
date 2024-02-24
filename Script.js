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
let player1Current = 0;
let player2Current = 0;
let player1endScore = 0;
let player2endScore = 0;
let playing = true;
//Define Functions
const result = function (result) {
  document.querySelector('.result').textContent = result;
};

// Initiations
diceImage.classList.add('hidden');
player1Score.textContent = 0;
player2Score.textContent = 0;

// Rolling dice
diceBtn.addEventListener('click', function () {
  if (playing) {
    // Generate Randum Number between 1 and 6
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    //showing dice
    diceImage.classList.remove('hidden');
    diceImage.src = `Dice Images/dice-${diceValue}.png`;
    //check for roll 1
    if (player1.classList.contains('activePlayer')) {
      //if dice isn't 1, add dice value to current score
      if (diceValue !== 1) {
        player1Current += diceValue;
        player1CurrentScore.textContent = `${player1Current}`;
      } else {
        // if dice is 1, seitch active player and reset player current score
        player1.classList.remove('activePlayer');
        player2.classList.add('activePlayer');
        player1Current = 0;
        player1CurrentScore.textContent = `${player1Current}`;
      }
    } else {
      if (diceValue !== 1) {
        player2Current += diceValue;
        player2CurrentScore.textContent = `${player2Current}`;
      } else {
        player2.classList.remove('activePlayer');
        player1.classList.add('activePlayer');
        player2Current = 0;
        player2CurrentScore.textContent = `${player2Current}`;
      }
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    if (player1.classList.contains('activePlayer')) {
      player1endScore += player1Current;
      player1Score.textContent = player1endScore;
      if (player1endScore >= 100) {
        diceImage.classList.add('hidden');
        player1.classList.add('winner');
        playing = 0;
      }
      player1.classList.remove('activePlayer');
      player2.classList.add('activePlayer');
      player1Current = 0;
      player1CurrentScore.textContent = `${player1Current}`;
    } else {
      player2endScore += player2Current;
      player2Score.textContent = player2endScore;
      if (player2endScore >= 100) {
        diceImage.classList.add('hidden');
        player2.classList.add('winner');
        playing = 0;
      }
      player2.classList.remove('activePlayer');
      player1.classList.add('activePlayer');
      player2Current = 0;
      player2CurrentScore.textContent = `${player2Current}`;
    }
  }
});

newGameBtn.addEventListener('click', function () {
  player1Current = 0;
  player2Current = 0;
  player1endScore = 0;
  player1Score.textContent = 0;
  player2endScore = 0;
  player2Score.textContent = 0;

  playing = true;
  player1.classList.remove('winner');
  player2.classList.remove('winner');
  player1.classList.add('activePlayer');
  player2.classList.remove('activePlayer');
});
