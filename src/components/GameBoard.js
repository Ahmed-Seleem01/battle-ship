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

  // const coordinatesArr = createGameBoard();
  // console.log(coordinatesArr)
  function placeShip(ship = {}, coordinates = []) {
    const x = coordinates[0] - 1;
    const y = coordinates[1] - 1;
    const slicedArr = coordinatesArr[x].slice(y);
    console.log(slicedArr[0]);
    if (
      slicedArr.length >= ship.length &&
      slicedArr.every((item) => item == null)
    ) {
      for (let i = 0; i < ship.length; i++) {
        coordinatesArr[x][y + i] = ship.length;
      }
      console.log(coordinatesArr[x]);
      return true;
    }
    return false;
  }

  // function receiveAttack(){

  // }

  return { createGameBoard, getGameBoard, placeShip };
};
export { GameBoard };
