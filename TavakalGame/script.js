'use strict';
const btnRoll = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const totalScore0 = document.getElementById('score--0');
const totalScore1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
            
totalScore0.textContent = 0;
totalScore1.textContent = 0;
let currentScore = 0,
  activeUser = 0,
  totalScores = [0, 0];

btnRoll.addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${randomNumber}.png`;
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById('current--' + activeUser).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById('current--' + activeUser).textContent =
      currentScore;
    activeUser = activeUser === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

holdBtn.addEventListener('click', function () {
  dice.classList.add('hidden');
  totalScores[activeUser] += currentScore;
  currentScore = 0;
  document.getElementById(`current--${activeUser}`).textContent = currentScore;
  document.getElementById(`score--${activeUser}`).textContent =
    totalScores[activeUser];
  activeUser = activeUser === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  if (totalScores[activeUser] >=50) {
    document
      .querySelector('.player--' + activeUser)
      .classList.add('player--winner');
    btnRoll.setAttribute('disabled', true);
    btnRoll.style.cursor = 'not-allowed';
    holdBtn.setAttribute('disabled', true);
    holdBtn.style.cursor = 'not-allowed';
  }
});

newBtn.addEventListener('click', function () {
  location.href=location.href;  
});
