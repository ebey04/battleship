const Gameboard = require('./gameboard');

class Player {
    constructor(isComputer = false) {
        this.isComputer = isComputer;
        this.board = new Gameboard();
        this.prevMoves = [];
    }

    attack(opponentBoard, coord) {
        opponentBoard.receiveAttack(coord);
        this.prevMoves.push(coord);
    }
}



module.exports = Player;