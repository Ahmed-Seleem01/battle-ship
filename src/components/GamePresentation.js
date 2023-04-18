import { GameBoard } from "./GameBoard";
import "../styles/game.scss";
import Ship  from "./Ship";

const mainContainer = document.querySelector(".main-container");
const result = document.querySelector(".result");

const playerGameBoard = GameBoard();
const computerGameBoard = GameBoard();
const gameBoard = playerGameBoard.createGameBoard();
const cgameBoard = computerGameBoard.createGameBoard();

let isPlayerShipsPlaced = false;

function initializePlayerBoard() {
  const playerContainer = document.createElement("div");
  playerContainer.classList.add("player-container");
  mainContainer.appendChild(playerContainer);
  const fragment = document.createDocumentFragment();

  // Draw the board
  gameBoard.forEach((row, index) => {
    row.forEach((item, ind) => {
      const square = document.createElement("button");
      square.dataset.position = `${index},${ind}`;
      square.addEventListener("click", placeShips)
      fragment.appendChild(square);
    });
  });
  playerContainer.appendChild(fragment);

  const shipsArr = [5, 3, 2, 4, 3];
  function placeShips(e){
    const cor = e.target.dataset.position.split(",");
    const shipPlacement = playerGameBoard.placeShip(Ship(shipsArr[0]), [+cor[0], +cor[1]]);
    if(shipsArr.length > 0 && shipPlacement === true){
      shipsArr.splice(0,1);
      redrawBoard();

      if(shipsArr.length <= 0){
        isPlayerShipsPlaced = true;
        initializeComputerBoard();  
      }
    }
    else if(shipsArr.length > 0 && shipPlacement === false){
      console.log("enter ship in suitable place")
    }
  }
  

  function redrawBoard(){
    gameBoard.forEach((row, x) => {
      row.forEach((item, y) => {
        const square = document.querySelector(`.player-container button[data-position="${x},${y}"]`);
        if (item) {
          square.style.backgroundColor = "black";
          return;
        }
      });
    });
  }

}
initializePlayerBoard();


function initializeComputerBoard() {
  const computerContainer = document.createElement("div");
  computerContainer.classList.add("computer-container");
  mainContainer.appendChild(computerContainer);
  const fragment = document.createDocumentFragment();

  function placeShips(){
    const shipsArr = [5, 3, 2, 4, 3];
    while(shipsArr.length > 0){
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      const cor = [x,y];
      const shipPlacement = computerGameBoard.placeShip(Ship(shipsArr[0]), [+cor[0], +cor[1]]);
      console.log(shipPlacement)
      console.lo
      if(shipsArr.length > 0 && shipPlacement === true){
        shipsArr.splice(0,1);
      }
      else if(shipsArr.length > 0 && shipPlacement === false){
        console.log("enter ship in suitable place")
      } 
    }
  }
  placeShips()
  cgameBoard.forEach((row, index) => {
    row.forEach((item, ind) => {
      const square = document.createElement("button");
      square.dataset.position = `${index},${ind}`;
      square.addEventListener("click", attack);
      if (item !== null) {
        square.style.backgroundColor = "black";
      }
      fragment.appendChild(square);
    });
  });

  computerContainer.appendChild(fragment);
}

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
