import { GameBoard } from "./GameBoard";
import "../styles/game.scss";
import Ship  from "./Ship";

const mainContainer = document.querySelector(".main-container");
const result = document.querySelector(".result");

const playerSection = document.createElement("div");
mainContainer.appendChild(playerSection);
const computerSection = document.createElement("div");
mainContainer.appendChild(computerSection);

const playerGameBoard = GameBoard();
const computerGameBoard = GameBoard();
const gameBoard = playerGameBoard.createGameBoard();
const cgameBoard = computerGameBoard.createGameBoard();


function initializePlayerBoard() {
  const playerContainer = document.createElement("div");
  const heading = document.createElement("h2");
  heading.textContent = "Player";
  playerContainer.classList.add("player-container");
  playerSection.appendChild(heading)
  playerSection.appendChild(playerContainer);
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
  const heading = document.createElement("h2");
  heading.textContent = "Computer"
  computerContainer.classList.add("computer-container");
  // computerContainer.classList.add("computer-container-appear");
  computerSection.appendChild(heading);
  computerSection.appendChild(computerContainer);
  const fragment = document.createDocumentFragment();

  function placeShips(){
    const shipsArr = [5, 3, 2, 4, 3];
    while(shipsArr.length > 0){
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      const cor = [x,y];
      const shipPlacement = computerGameBoard.placeShip(Ship(shipsArr[0]), [+cor[0], +cor[1]]);
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
      // if (item !== null) {
      //   square.style.backgroundColor = "black";
      // }
      fragment.appendChild(square);
    });
  });

  computerContainer.appendChild(fragment);
}

const cor = [];
let minimizeCor = [];
function attack(e) {
  const arr = e.target.dataset.position.split(",");
  // console.log(arr);
  const hit = computerGameBoard.receiveAttack(arr);
  if (hit) {
    e.target.style.backgroundColor = "green";
  } else {
    e.target.style.backgroundColor = "red";
  }
  e.target.disabled = true;
  if (computerGameBoard.allShipsSunk()) {
    result.textContent = "you won";
    result.classList.add("show-result")
  }

  function cattack() {
    let x = null;
    let y = null;
    if(minimizeCor.length > 0){
      x = +minimizeCor[0];
      y = +minimizeCor[1] + Math.floor(Math.random()) + 1;
      if(y>9 ) y = y - 2;
    }else{
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
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
      minimizeCor = arr;
    } else {
      square.style.backgroundColor = "red";
      minimizeCor = [];
    }

    square.disabled = true;
    if (playerGameBoard.allShipsSunk()) {
      result.textContent = "you lose";
      result.classList.add("show-result")
    }
  }
  cattack();
}
