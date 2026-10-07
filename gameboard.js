import { Ship } from "./ships.js"

function buildBoard(){
    let board = []
    for(let x = 0; x < 10; x++){
        let row = []
        for(let y = 0; y < 10; y++){
            row.push(null)
        }
        board.push(row);
    }
    return board;
}

export class Gameboard {
    constructor(){
        this.board = buildBoard();
        this.ships = [];
    }

    placeShip(ship, startingCoord, direction){
        let shipCoordinates = [];

        for(let i = 0; i < ship.length; i++){
            if(direction === "vertical"){
                shipCoordinates.push([
                    startingCoord[0] + i,
                    startingCoord[1]
                ])
            } else {
                shipCoordinates.push([
                    startingCoord[0],
                    startingCoord[1] + i
                ])
            }
        }

        for(let coord of shipCoordinates){
            if(
                coord[0] < 0 ||
                coord[0] >= 10 ||
                coord[1] < 0 ||
                coord[1] >= 10
            ) {
                throw new Error(`Invalid ship placement at ${coord}`)
            }
        }
    }

    recieveAttack(){
        let missedAtks = [];
    }
}