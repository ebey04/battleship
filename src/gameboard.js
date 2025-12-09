class Gameboard {
        constructor() {
            this.grid = Array.from({length: 10}, () => 
                        Array.from({length: 10}, () => null));
            this.missedShots = []
            }

        placeShip(ship, startingCoor, direction) {
            let plannedCoord = [];
            let startRow = startingCoor[0];
            let startCol = startingCoor[1];

            if (
                startCol < 0 || startCol > 9 ||
                startRow < 0 || startRow > 9
            ) {
                return false;
            }

            for (let i = 0; i < ship.length; i++) {
                let row = startRow;
                let col = startCol;

                if (direction === "horizontal") {
                    col = startCol + i;
                    if (col < 0 || col > 9) {
                        return false;
                    }
                } else if (direction === "vertical") {
                    row = startRow + i;
                    if (row < 0 || row > 9) {
                        return false;
                    }
                }

                plannedCoord.push([row, col]);
            }

            for (let [row, col] of plannedCoord) {
                if (this.grid[row][col] !== null) {
                    return false;
                }
            }

            plannedCoord.forEach(([row, col]) => {
                this.grid[row][col] = ship;
        });
    }
        receiveAttack([row, col]) {
            const target = this.grid[row][col];

            if (target !== null) {
                target.hit();
            }

        }




}

module.exports = Gameboard;