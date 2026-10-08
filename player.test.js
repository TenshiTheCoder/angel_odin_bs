import { Gameboard } from "./gameboard.js";
import { Ship } from "./ships.js";
import { Player } from "./player.js";

test("Player gameboard ready!", () => {
    let player = new Player();

    expect(player.gameboard).toBeInstanceOf(Gameboard);
})

test("Computer opponent created", () => {
    let player = new Player("computer");

    expect(player.type).toBe("computer");
})

test("Player fleet generated", () => {
    let player = new Player("real");

    expect(player.fleet).toHaveProperty("carrier");
})

test("Fleets are unique", () => {
    let player = new Player("real");
    let player2 = new Player("real");
    
    expect(player.fleet.carrier).not.toBe(player2.fleet.carrier);
})