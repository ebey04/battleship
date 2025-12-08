class Gameboard {
    constructor() {
        this.grid = Array.from({length: 10}, () => 
                    Array.from ({length: 10}, () => null));
                }

        placeShip(ship, startingCoor, direction) {
            let plannedCoord = [];
            let startRow = startingCoor[0];
            let startCol = startingCoor[1];

            for (let i = 0; i < ship.length; i++) {
                let row = startRow;
                let col = startCol;

                if (direction === "horizontal") {
                    col = startCol + i;
                } else if (direction === "vertical") {
                    row = startRow + i;
                }

                plannedCoord.push([row, col]);
            }

            return plannedCoord;
}

}

module.exports = Gameboard;