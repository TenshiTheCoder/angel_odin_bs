import { Ship, Gameboard, Player } from "./barrel.js"



export function gameStart() {
    let realPlayer = new Player("real");
    let computerPlayer = new Player("computer");

    realPlayer.gameboard.placeShip(realPlayer.fleet.carrier, [0, 0], "horizontal");
    realPlayer.gameboard.placeShip(realPlayer.fleet.battleship, [2, 2], "vertical");
    realPlayer.gameboard.placeShip(realPlayer.fleet.cruiser, [5, 5], "horizontal");
    realPlayer.gameboard.placeShip(realPlayer.fleet.submarine, [7, 0], "vertical");
    realPlayer.gameboard.placeShip(realPlayer.fleet.destroyer, [9, 7], "horizontal");

    computerPlayer.gameboard.placeShip(computerPlayer.fleet.carrier, [0, 0], "vertical");
    computerPlayer.gameboard.placeShip(computerPlayer.fleet.battleship, [2, 3], "horizontal");
    computerPlayer.gameboard.placeShip(computerPlayer.fleet.cruiser, [5, 1], "horizontal");
    computerPlayer.gameboard.placeShip(computerPlayer.fleet.submarine, [7, 4], "vertical");
    computerPlayer.gameboard.placeShip(computerPlayer.fleet.destroyer, [9, 7], "horizontal");
    return [realPlayer, computerPlayer]
}