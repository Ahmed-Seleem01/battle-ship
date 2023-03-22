/* eslint-disable no-undef */
import { Ship } from "./src/components/Ship";

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

