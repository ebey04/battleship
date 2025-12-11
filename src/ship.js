class Ship {
    constructor(length, color = "gray") {
        this.length = length;
        this.hits = 0;
        this.color = color;   // <-- now 'color' IS a parameter
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        return this.hits >= this.length;
    }
}

export default Ship;
