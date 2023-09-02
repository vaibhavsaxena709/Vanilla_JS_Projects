'use strict';
// window + . => emojis

function getRndInteger(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}
let secretNumber = getRndInteger(1, 20);
console.log('secret number: ' + secretNumber);

const guessMessage = 'Keep Guessing!!!';

document.querySelector('.check').addEventListener('click', function () {
  let currentScore = document.querySelector('.score').textContent;
  currentScore = Number(currentScore);
  const guess = Number(document.querySelector('.guess').value);
  if (guess > 20 || guess == 0) {
    document.querySelector('.message').textContent =
      'Please enter between 1 and 20!';
    document.body.style.background = '#FF0000';
  } else {
    if (guess == secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      document.getElementById('numb').style.width = '25rem';
      if (document.querySelector('.score').textContent == 100)
        document.querySelector('.message').textContent =
          "Hit the Bull's eye! 🏆 Click Again to continue Playing";
      else
        document.querySelector('.message').textContent =
          'Gotcha! 🏆 Click Again to continue Playing';
      document.querySelector('.score').textContent = currentScore + 50;
      document.querySelector('.check').setAttribute('disabled', 'disabled');
      document.body.style.background = '#60b347';
      let highscore = document.querySelector('.highscore').textContent;
      highscore = Number(highscore);
      let newscore = document.querySelector('.score').textContent;
      newscore = Number(newscore);
      if (highscore < newscore)
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
    } else {
      document.body.style.background = '#222';
      document.querySelector('.score').textContent = currentScore - 10;
      if (secretNumber == guess + 1 || secretNumber == guess - 1)
        document.querySelector('.message').textContent =
          'Almost there!' + guessMessage;
      else if (secretNumber < guess)
        document.querySelector('.message').textContent =
          'Too, big!' + guessMessage;
      else
        document.querySelector('.message').textContent =
          'Too, small!' + guessMessage;
    }
  }
  if (document.querySelector('.score').textContent == 0) {
    document.body.style.background = '#FF0000';
    document.querySelector('.message').textContent =
      'No Chances Left!!! 🔳 Click Again to continue Guessing';
    document.querySelector('h1').textContent = 'LOST!!!!';
    document.querySelector('.check').setAttribute('disabled', 'disabled');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.getElementById('numb').style.width = '15rem';
  secretNumber = getRndInteger(1, 20);
  console.log('secret number: ' + secretNumber);
  document.querySelector('.guess').value = '';
  document.body.style.background = '#222';
  document.querySelector('.check').removeAttribute('disabled');
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.score').textContent = 100;
});
