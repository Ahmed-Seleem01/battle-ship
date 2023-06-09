/* eslint-disable no-undef */
import Ship  from "./src/components/Ship";
import { GameBoard } from "./src/components/GameBoard";
import { Player } from "./src/components/Player";

describe("Test ship factory function", () => {
  const ship = Ship(1);

  test("check Ship instance", () => {
    expect(ship).toEqual({
      length: 1,
      hit: expect.any(Function),
      isSunk: expect.any(Function),
    });
  });

  test("check length of ship", () => {
    expect(ship.length).toBe(1);
  });

  test("check isSunk default behavior", () => {
    expect(ship.isSunk()).toBeFalsy();
  });

  test("check hit behavior", () => {
    expect(ship.hit()).toBe(1);
  });

  test("check isSunk running behavior", () => {
    expect(ship.isSunk()).toBeTruthy();
  });
});

describe("Check GameBoard factory function", () => {
  const gameBoard = GameBoard();
  const gameBoardArr = gameBoard.createGameBoard();
  test("check GameBoard instance", () => {
    expect(gameBoard).toEqual({
      createGameBoard: expect.any(Function),
      getGameBoard: expect.any(Function),
      placeShip: expect.any(Function),
      receiveAttack: expect.any(Function),
      missedShots: expect.any(Function),
      allShipsSunk: expect.any(Function),
    });
  });

  test("check GameBoard array", () => {
    expect(gameBoardArr).toEqual(expect.any(Array));
  });

  test("check outer array length", () => {
    expect(gameBoardArr).toHaveLength(10);
  });

  test("check inner array length", () => {
    gameBoardArr.forEach((arr) => {
      expect(arr).toHaveLength(10);
    });
  });

  test("place first ship", () => {
    expect(gameBoard.placeShip(Ship(2), [1, 2])).toBeTruthy();
  });

  test("check the coordinates duplication", () => {
    expect(gameBoard.placeShip(Ship(2), [1, 2])).toBeFalsy();
  });

  test("check if the shot is a hit", () => {
    expect(gameBoard.receiveAttack([1, 2])).toBeTruthy();
  });

  test("check if the shot is missed", () => {
    expect(gameBoard.receiveAttack([1, 5])).toBeFalsy();
  });

  test("display missed shots", () => {
    expect(gameBoard.missedShots()).toEqual(expect.any(Array));
  });

  test("check if the all ships are not sunk", () => {
    expect(gameBoard.allShipsSunk()).toBeFalsy();
  });

  test("check if the all ships are sunk", () => {
    gameBoard.receiveAttack([1, 3]);
    expect(gameBoard.allShipsSunk()).toBeTruthy();
  });
});

describe.only("test Player factory function", () => {
  test("check Player instance", () => {
    const player = Player("ama");
    expect(player).toEqual({ getPlayerName: expect.any(Function) });
  });

  test("check function to get player name", () => {
    const player = Player("ama");
    expect(player.getPlayerName()).toEqual("ama");
  });
});
