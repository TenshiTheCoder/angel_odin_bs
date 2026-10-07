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

// test("Ship placement exceeds left boundary", () => {
//     let ship = new Ship(3);
//     let gameboard = new Gameboard();

//     expect(() => gameboard.placeShip(ship, [-1, 4], "horizontal")).toThrow();
// })