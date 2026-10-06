import { Ship } from "./ships.js";

test(`Ship hit successfully`, () => {
    let newShip = new Ship(3);
    newShip.hit()
    expect(newShip.hits).toBe(1);
})

test(`Ship sunk successfully`, () => {
    let newShip = new Ship(3);
    newShip.hit()
    newShip.hit()
    newShip.hit()
    expect(newShip.sunk).toBe(true);
})

test("Ship is already sunk, choose a new target", () => {
    let newShip = new Ship(3);

    newShip.hit();
    newShip.hit();
    newShip.hit();

    expect(() => newShip.hit()).toThrow();
})
