const Ship = (shipLength) => {
  const length = shipLength;
  let numberOfHits = 0;
  function hit() {
    numberOfHits = numberOfHits + 1;
    return numberOfHits;
  }
  function isSunk() {
    if (numberOfHits === length) {
      return true;
    }
    return false;
  }

  return { length, hit, isSunk };
};
export { Ship };
