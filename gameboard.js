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
        this.missedAtks = [];
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

        for(let coord of shipCoordinates){
                if(this.board[coord[0]][coord[1]] !== null){
                    throw new Error("Ship placement overlaps, choose a new square");
                }
            }

        for(let coord of shipCoordinates){
            this.board[coord[0]][coord[1]] = ship
        }

        this.ships.push(ship);
    }

    receiveAttack(atkCoords){
        let target = this.board[atkCoords[0]][atkCoords[1]];

        if(target === null) {
            this.missedAtks.push(atkCoords)
        } else target.hit();
    }

    allSunk(){
        return this.ships.every((ship) => ship.sunk);
    }
}