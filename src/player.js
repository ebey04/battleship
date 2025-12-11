import Gameboard from "./gameboard.js";

class Player {
    constructor(isComputer = false) {
        this.isComputer = isComputer;
        this.board = new Gameboard();
        this.prevMoves = [];
    }

    attack(opponentBoard, coord) {
        if (this.isComputer) {
            const row = Math.floor(Math.random() * 10);
            const col = Math.floor(Math.random() * 10);
            coord = [row, col];
        }
        if (this.prevMoves.some(move => move[0] === coord[0] && move[1] === coord[1])) {
            return false;
        }
        opponentBoard.receiveAttack(coord);
        this.prevMoves.push(coord);

        return coord;
    }
}



export default Player;