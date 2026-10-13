import { Ship, Gameboard, Player } from "./barrel.js"
import { gameStart } from "./dom.js";

test("Real player created successfully", () => {
    const players = gameStart()
    expect(players[0]).toBeInstanceOf(Player);
})

test("Computer player created successfully", () => {
    const players = gameStart();
    expect(players[1]).toBeInstanceOf(Player);
})

// Real player tests
test("Real player's carrier placement successful", () => {
    const players = gameStart();
    expect(players[0].gameboard.board[0][0]).toBe(players[0].fleet.carrier);
})

test("Real player's battleship placed", () => {
    const players = gameStart();
    expect(players[0].gameboard.board[2][2]).toBe(players[0].fleet.battleship);
})

test("Real player's cruiser placed", () => {
    const players = gameStart();
    expect(players[0].gameboard.board[5][5]).toBe(players[0].fleet.cruiser);
})

test("Real player's submarine placed", () => {
    const players = gameStart();
    expect(players[0].gameboard.board[7][0]).toBe(players[0].fleet.submarine);
})

test("Real player's destroyer placed", () => {
    const players = gameStart();
    expect(players[0].gameboard.board[9][7]).toBe(players[0].fleet.destroyer);
})

// Computer player tests
test("Computer player's carrier placed", () => {
    const players = gameStart();
    expect(players[1].gameboard.board[0][0]).toBe(players[1].fleet.carrier);
})

test("Computer player's battleship placed", () => {
    const players = gameStart();
    expect(players[1].gameboard.board[2][3]).toBe(players[1].fleet.battleship);
})

test("Computer player's cruiser placed", () => {
    const players = gameStart();
    expect(players[1].gameboard.board[5][1]).toBe(players[1].fleet.cruiser);
})

test("Computer player's submarine placed", () => {
    const players = gameStart();
    expect(players[1].gameboard.board[7][4]).toBe(players[1].fleet.submarine);
})

test("Computer player's destroyer placed", () => {
    const players = gameStart();
    expect(players[1].gameboard.board[9][7]).toBe(players[1].fleet.destroyer);
})
