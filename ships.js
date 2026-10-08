export class Ship {
    constructor(length, hits = 0, sunk = false){
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
    }

    hit(){
        if(this.sunk){
            throw new Error("Ship has already been sunk, choose a new target")
        }

        this.hits += 1;
        this.isSunk();
    }

    isSunk(){
        if(this.hits === this.length){
            return this.sunk = true; 
        } else return this.sunk;
    }
}

