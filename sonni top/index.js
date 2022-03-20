'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function showPlay() {
  const inputNumber = +document.querySelector('.guess').value;
  if (score >= 2) {
    if (inputNumber === randomNumber) {
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('.number').textContent = inputNumber;
      document.querySelector('.message').textContent = 'Topdingiz🏆🏆🏆';
      document.querySelector('body').style.backgroundColor = 'green';
    } else if (!inputNumber) {
      document.querySelector('.message').textContent = 'Raqam kiritilmadi 🤦‍♂️';
    } else if (inputNumber > randomNumber) {
      score--;
      document.querySelector('.message').textContent =
        'Tahmin qilgan raqamiz katta ❌❌❌';
      document.querySelector('.score').textContent = score;
    } else if (inputNumber < randomNumber) {
      score--;
      document.querySelector('.message').textContent =
        'Tahmin qilgan raqamiz kichik ❌❌❌';
      document.querySelector('.score').textContent = score;
    }
  }
   else {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent =
      'Ball qolmadi ,Yana tugmasini bosing';
    document.querySelector('.check').setAttribute('disabled', true);
    document.querySelector('.check').style.cursor = 'not-allowed';
    document.querySelector('body').style.backgroundColor='red';
  }
});

document.querySelector('.again').addEventListener('click', () => {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Tahmin qilish 👁‍🗨';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.check').style.cursor = 'pointer';
    
  });
