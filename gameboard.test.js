import { Gameboard } from "./gameboard.js";
import { Ship } from "./ships.js";

test("Ship placement exceeds top boundary", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    expect(() => gameboard.placeShip(ship, [-1, 4], "horizontal")).toThrow();
})

test("Ship placement exceeds bottom boundary", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    expect(() => gameboard.placeShip(ship, [9, 4], "vertical")).toThrow();
})

test("Ship placement exceeds right boundary", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    expect(() => gameboard.placeShip(ship, [4, 9], "horizontal")).toThrow();
})

test("Ship overlaps with another", () => {
    let ship = new Ship(3);
    let shipTwo = new Ship(4);
    let gameboard = new Gameboard();

    gameboard.placeShip(ship, [2, 4], "horizontal");
    expect(() => gameboard.placeShip(shipTwo, [2, 4], "horizontal")).toThrow();
})

test("Ship successfully placed", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    gameboard.placeShip(ship, [2, 4], "horizontal")

    expect(gameboard.ships).toEqual([ship]);
})

test("Two ships successfully placed", () => {
    let ship = new Ship(3);
    let shipTwo = new Ship (4);
    let gameboard = new Gameboard();

    gameboard.placeShip(ship, [2, 4], "horizontal")
    gameboard.placeShip(shipTwo, [5, 3], "horizontal")

    expect(gameboard.ships).toEqual([ship, shipTwo]);
})

test("Attack received successfully", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    gameboard.placeShip(ship, [2, 4], "horizontal");
    gameboard.receiveAttack([2, 4]);

    expect(ship.hits).toBe(1);
})

test("Attack missed", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    gameboard.placeShip(ship, [2, 4], "horizontal");
    gameboard.receiveAttack([2, 7]);
    gameboard.receiveAttack([2, 8]);

    expect(gameboard.missedAtks).toEqual([[2, 7], [2, 8]]);
})

test("Both attacks missed", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    gameboard.placeShip(ship, [2, 4], "horizontal");
    gameboard.receiveAttack([2, 7]);
    gameboard.receiveAttack([2, 8]);

    expect(gameboard.missedAtks).toEqual([[2, 7], [2, 8]]);
})

test("All ships sunk, you win!", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    gameboard.placeShip(ship, [2, 4], "horizontal");
    gameboard.receiveAttack([2, 4]);
    gameboard.receiveAttack([2, 5]);
    gameboard.receiveAttack([2, 6]);

    expect(gameboard.allSunk()).toBe(true);
})

test("There's a ship still afloat, keep shooting!", () => {
    let ship = new Ship(3);
    let gameboard = new Gameboard();

    gameboard.placeShip(ship, [2, 4], "horizontal");
    gameboard.receiveAttack([2, 4]);
    gameboard.receiveAttack([2, 5]);

    expect(gameboard.allSunk()).toBe(false);
})