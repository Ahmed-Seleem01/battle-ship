import { GameBoard } from "./GameBoard";
import "../styles/game.scss";
import { Ship } from "./Ship";

const mainContainer = document.querySelector(".main-container");
const result = document.querySelector(".result");

const playerGameBoard = GameBoard();
const computerGameBoard = GameBoard();
const gameBoard = playerGameBoard.createGameBoard();
const cgameBoard = computerGameBoard.createGameBoard();

function initializePlayerBoard() {
  const playerContainer = document.createElement("div");
  playerContainer.classList.add("player-container");
  mainContainer.appendChild(playerContainer);
  const fragment = document.createDocumentFragment();

  const ship1 = Ship(5);
  const ship2 = Ship(3);
  const ship3 = Ship(2);
  const ship4 = Ship(4);
  const ship5 = Ship(3);

  playerGameBoard.placeShip(ship1, [1, 1]);
  playerGameBoard.placeShip(ship2, [3, 5]);
  playerGameBoard.placeShip(ship3, [5, 3]);
  playerGameBoard.placeShip(ship4, [8, 6]);
  playerGameBoard.placeShip(ship5, [9, 0]);

  // Draw the board
  gameBoard.forEach((row, index) => {
    row.forEach((item, ind) => {
      const square = document.createElement("button");
      square.dataset.position = `${index},${ind}`;
      if (item !== null) {
        square.style.backgroundColor = "black";
      }
      fragment.appendChild(square);
    });
  });

  playerContainer.appendChild(fragment);
}
initializePlayerBoard();

function initializeComputerBoard() {
  const computerContainer = document.createElement("div");
  computerContainer.classList.add("computer-container");
  mainContainer.appendChild(computerContainer);
  const fragment = document.createDocumentFragment();

  const ship1 = Ship(5);
  const ship2 = Ship(3);
  const ship3 = Ship(2);
  const ship4 = Ship(4);
  const ship5 = Ship(3);

  computerGameBoard.placeShip(ship1, [1, 1]);
  computerGameBoard.placeShip(ship2, [3, 5]);
  computerGameBoard.placeShip(ship3, [5, 3]);
  computerGameBoard.placeShip(ship4, [8, 6]);
  computerGameBoard.placeShip(ship5, [9, 0]);

  cgameBoard.forEach((row, index) => {
    row.forEach((item, ind) => {
      const square = document.createElement("button");
      square.dataset.position = `${index},${ind}`;
      square.addEventListener("click", attack);
      // if (item !== null) {
      //   square.style.backgroundColor = "black";
      // }
      fragment.appendChild(square);
    });
  });

  computerContainer.appendChild(fragment);
}
initializeComputerBoard();

const cor = [];
function attack(e) {
  const arr = e.target.dataset.position.split(",");
  console.log(arr);
  const hit = computerGameBoard.receiveAttack(arr);
  if (hit) {
    e.target.style.backgroundColor = "green";
  } else {
    e.target.style.backgroundColor = "red";
  }
  e.target.disabled = true;
  if (computerGameBoard.allShipsSunk()) {
    result.textContent = "you won";
  }

  function cattack() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    console.log(x, y);
    while (cor.some((item) => item[0] === x && item[1] === y)) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    const arr = [x, y];
    cor.push(arr);
    const hit = playerGameBoard.receiveAttack(arr);

    const square = document.querySelector(
      `.player-container button[data-position="${x},${y}"]`
    );

    if (hit) {
      square.style.backgroundColor = "green";
    } else {
      square.style.backgroundColor = "red";
    }

    square.disabled = true;
    if (playerGameBoard.allShipsSunk()) {
      result.textContent = "you lose";
    }
  }
  cattack();
}
