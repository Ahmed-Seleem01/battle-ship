const GameBoard = () => {
  const coordinatesArr = [];

  function createGameBoard() {
    for (let i = 0; i < 10; i++) {
      const arr = [];
      for (let j = 0; j < 10; j++) {
        arr.push(null);
      }
      coordinatesArr.push(arr);
    }
    return coordinatesArr;
  }

  const getGameBoard = () => coordinatesArr;

  function placeShip(ship = {}, coordinates = []) {
    const [x, y] = coordinates;

    const slicedArr = coordinatesArr[x].slice(y);
    if (
      slicedArr.length >= ship.length &&
      slicedArr.every((item) => item == null)
    ) {
      for (let i = 0; i < ship.length; i++) {
        coordinatesArr[x][y + i] = ship.length;
      }
      return true;
    }
    return false;
  }

  // function receiveAttack(){

  // }

  return { createGameBoard, getGameBoard, placeShip };
};
export { GameBoard };
