'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 19;

let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

console.log(`secret number is ${secretNumber}`);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No number inserted')
  } else if (guess === secretNumber) {
    displayMessage('You won');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    } else {
      null;
    }
  } else if (guess !== secretNumber) {
    if (score >= 0){
        document.querySelector('.score').textContent = score--;
        displayMessage( guess > secretNumber ? 'Too high' : 'Too low');
    } else {
        displayMessage('You lost the game');
    }
  }
  //   else if (guess > secretNumber) {
  //     if (score >= 0) {
  //       document.querySelector('.score').textContent = score--;
  //       document.querySelector('.message').textContent = 'Too high';
  //       // score--;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score >= 0) {
  //       document.querySelector('.score').textContent = score--;
  //       document.querySelector('.message').textContent = 'Too low';
  //       // score--;
  //     }
  //     else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 19;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
