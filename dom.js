import { Ship, Gameboard, Player } from "./barrel.js"
const playerOneContainer = document.querySelector(".p1-gameboard");
const playerTwoContainer = document.querySelector(".p2-gameboard");
let realPlayer;
let computerPlayer;
let playerTurn;
let comAttacks;

export function gameStart() {
    realPlayer = new Player("real");
    computerPlayer = new Player("computer");
    playerTurn = "real";
    comAttacks = [];

    playerOneContainer.innerHTML = "";
    playerTwoContainer.innerHTML = "";

    randomShips(realPlayer);
    randomShips(computerPlayer);

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

                if(playerTurn !== "real") return;

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

                if(computerPlayer.gameboard.allSunk()){
                    let playAgain = confirm("You win, Play Again?")

                    if(playAgain === false){
                        playerTurn = "gameOver"
                    } else {
                        gameStart();
                    }
                } else {
                    playerTurn = "computer";
                    comAtk();
                }
                
                console.log(computerPlayer.fleet.carrier.hits);
                console.log(computerPlayer.gameboard.missedAtks);

            })

            
        })
    })

    return [realPlayer, computerPlayer]
}

function comAtk(){
    let comAtkArray = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

    while(comAttacks.some((coords) => {
        return coords[0] === comAtkArray[0] && coords[1] === comAtkArray[1];
    })){ 
        comAtkArray = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    } 
        comAttacks.push(comAtkArray);
        realPlayer.gameboard.receiveAttack(comAtkArray);

        const attackedCell = playerOneContainer.querySelector(
            `[data-row="${comAtkArray[0]}"][data-col="${comAtkArray[1]}"]`
        );

        if(realPlayer.gameboard.missedAtks.some((coords) => {
                    return coords[0] === comAtkArray[0] && coords[1] === comAtkArray[1]
                })) {
                    attackedCell.classList.add("missed-cell");
                } else {
                    attackedCell.classList.add("hit-cell");
            }

        if(realPlayer.gameboard.allSunk()){
            let playAgain = confirm("Computer wins, Play Again?");

            if(playAgain === false){
                playerTurn = "gameOver"
            } else {
                gameStart();
            }
        } else {
            playerTurn = "real";
        }
}

function randomShips(player){
    for(let ship of Object.values(player.fleet)){
        let shipPlaced = false;
        

        while(!shipPlaced) {
            let startingCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
            let randomDirection = Math.random();
            let direction;

            if(randomDirection < 0.5){
                direction = "horizontal"
            } else {
                direction = "vertical"
            }

            try{
                player.gameboard.placeShip(ship, startingCoord, direction);
                shipPlaced = true;
            } catch {
                
            }
        }
    }
}

gameStart();


