const GameBoard = () => {
  const coordinatesArr = [];
  const missedShotsArr = [];
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
        coordinatesArr[x][y + i] = ship
      }
      return true;
    }
    return false;
  }

  function receiveAttack(arr){
    const [x, y] = arr;

    if(coordinatesArr[x][y] !== null){
      coordinatesArr[x][y].hit();
      return true;
    }
    missedShotsArr.push(arr);
    return false;
  }

  const missedShots = () => missedShotsArr; 

  return { createGameBoard, getGameBoard, placeShip, receiveAttack, missedShots };
};
export { GameBoard };
