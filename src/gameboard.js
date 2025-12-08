class Gameboard {
    constructor() {
        this.grid = Array.from({length: 10}, () => 
                    Array.from ({length: 10}, () => null));
                }
}

module.exports = Gameboard;