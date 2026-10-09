import { Ship, Gameboard, Player } from "./barrel.js"
const playerOneContainer = document.querySelector(".p1-gameboard");
const playerTwoContainer = document.querySelector(".p2-gameboard");
let realPlayer = new Player("real");
let computerPlayer = new Player("computer");

export function gameStart() {
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

    realPlayer.gameboard.board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const boardCell = document.createElement("div");
            boardCell.dataset.row = rowIndex;
            boardCell.dataset.col = colIndex;
            boardCell.classList.add("cell");
            playerOneContainer.appendChild(boardCell);

            if(cell !== null){
                boardCell.classList.add("ship-cell");
            }
        })
    })

    computerPlayer.gameboard.board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const boardCell = document.createElement("div");
            boardCell.dataset.row = rowIndex;
            boardCell.dataset.col = colIndex;
            boardCell.classList.add("cell");
            playerTwoContainer.appendChild(boardCell);

            boardCell.addEventListener("click", () => {
                if(boardCell.classList.contains("missed-cell") || boardCell.classList.contains("hit-cell")){
                    return;
                }

                let atkArray = []
                console.log("Cell clicked");

                atkArray.push(Number(boardCell.dataset.row));
                atkArray.push(Number(boardCell.dataset.col));

                computerPlayer.gameboard.receiveAttack(atkArray);

                if(computerPlayer.gameboard.missedAtks.some((coords) => {
                    return coords[0] === atkArray[0] && coords[1] === atkArray[1]
                })) {
                    boardCell.classList.add("missed-cell");
                } else {
                    boardCell.classList.add("hit-cell");
                }

                console.log(computerPlayer.fleet.carrier.hits);
                console.log(computerPlayer.gameboard.missedAtks);

            })

            
        })
    })

    return [realPlayer, computerPlayer]
}

gameStart();