import { EXTRAS, CSS_CLASS, CSS_ID, COLORS } from './constants.js';
('use strict');

// Initializing constants and variables
const btnNew = document.querySelector(CSS_CLASS.newBtn);
const btnRoll = document.querySelector(CSS_CLASS.rollBtn);
const btnHold = document.querySelector(CSS_CLASS.holdBtn);
const player1 = document.getElementById(CSS_ID.name0).textContent;
const player2 = document.getElementById(CSS_ID.name1).textContent;
let player = CSS_CLASS.player1;
let score = 0;

// Generate a random number
const randomNum = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min;

// Toggle Player
const togglePlayer = function (player) {
  if (player === CSS_CLASS.player1) return CSS_CLASS.player2;
  else return CSS_CLASS.player1;
};

// Switching Players
const activePlayer = function (playerName) {
  document.querySelector(playerName).classList.add(EXTRAS.playerActive);
  if (playerName === CSS_CLASS.player1)
    document
      .querySelector(CSS_CLASS.player2)
      .classList.remove(EXTRAS.playerActive);
  else
    document
      .querySelector(CSS_CLASS.player1)
      .classList.remove(EXTRAS.playerActive);
};

// Victory Logic
const victory = function (current, name, player) {
  document.getElementById(current).textContent = score;
  if (score >= 100) commonProperties(name, player);
};

// Game Over
const commonProperties = function (name, playerName) {
  document.querySelector(CSS_CLASS.dice).setAttribute(EXTRAS.src, EXTRAS.diceX);
  document.getElementById(CSS_ID.roll).style.backgroundColor = COLORS.grey;
  btnRoll.setAttribute(EXTRAS.disabled, EXTRAS.disabled);
  btnRoll.setAttribute(EXTRAS.title, EXTRAS.clickNewGame);
  document.getElementById(CSS_ID.hold).style.backgroundColor = COLORS.grey;
  btnHold.setAttribute(EXTRAS.disabled, EXTRAS.disabled);
  btnHold.setAttribute(EXTRAS.title, EXTRAS.clickNewGame);
  document.getElementById(name).textContent = playerName + EXTRAS.wins;
  player = togglePlayer(player);
  document.getElementById(name).classList.add(CSS_CLASS.winnerName);
  document.querySelector(player).classList.add(CSS_CLASS.winner);
};

// NEW GAME BUTTON
const newGame = () => window.location.reload(EXTRAS.refresh);
btnNew.addEventListener(EXTRAS.click, newGame);

// HOLD BUTTON
btnHold.addEventListener(EXTRAS.click, function () {
  document.querySelector(CSS_CLASS.dice).setAttribute(EXTRAS.src, EXTRAS.diceX);
  if (player === CSS_CLASS.player1) {
    document.getElementById(CSS_ID.current0).textContent = 0;
    player = CSS_CLASS.player2;
    document.getElementById(CSS_ID.score0).textContent =
      score + Number(document.getElementById(CSS_ID.score0).textContent);
    if (Number(document.getElementById(CSS_ID.score0).textContent) >= 100)
      commonProperties(CSS_ID.name0, player1);
  } else {
    document.getElementById(CSS_ID.current1).textContent = 0;
    player = CSS_CLASS.player1;
    document.getElementById(CSS_ID.score1).textContent =
      score + Number(document.getElementById(CSS_ID.score1).textContent);
    if (Number(document.getElementById(CSS_ID.score1).textContent) >= 100)
      commonProperties(CSS_ID.name1, player2);
  }
  activePlayer(player);
  score = 0;
});

// ROLL DICE BUTTON
btnRoll.addEventListener(EXTRAS.click, function () {
  let rolledNum = Number(randomNum(1, 6));
  document
    .querySelector(CSS_CLASS.dice)
    .setAttribute(EXTRAS.src, `dice-${rolledNum}.png`);

  if (rolledNum === 1) {
    if (player === CSS_CLASS.player1) {
      player = CSS_CLASS.player2;
      document.getElementById(CSS_ID.current0).textContent = 0;
    } else {
      player = CSS_CLASS.player1;
      document.getElementById(CSS_ID.current1).textContent = 0;
    }
    rolledNum = 0;
    score = 0;
  }

  score += rolledNum;
  activePlayer(player);

  if (player === CSS_CLASS.player1)
    victory(CSS_ID.current0, CSS_ID.name0, player1);
  else victory(CSS_ID.current1, CSS_ID.name1, player2);
});
