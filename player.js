import { Gameboard } from "./gameboard.js";
import { Ship } from "./ships.js";

export class Player {
    constructor(type){
        this.gameboard = new Gameboard();
        this.type = type;
        this.fleet = makeFleet();
    }
}

function makeFleet(){
    return {
        carrier: new Ship(5),
        battleship: new Ship(4),
        cruiser: new Ship(3),
        submarine: new Ship(3),
        destroyer: new Ship(2)
    }
}
