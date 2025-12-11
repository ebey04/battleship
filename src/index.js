import './styles.css';

const Gameboard = require('./gameboard');
const Ship = require('./ship');
const Player = require('./player');

// CREATE PLAYERS
let human;
let computer;

// CREATE FLEETS

let humanFleet;
let computerFleet;

//STARTER LOGIC

let currentPlayer;
let gameOver = false

// WORLD RULES/HELPER FUNCTIONS

function randomizeFleet(player, fleetArray) {
    for (const ship of fleetArray) {
        let placed = false;

        while (!placed) {
            const row = Math.floor(Math.random() * 10);
            const col = Math.floor(Math.random() * 10);
            const coord = [row, col];

            const rand = Math.floor(Math.random() * 2); 
            const directions = ['horizontal', 'vertical'];
            const direction = directions[rand];

            placed = player.board.placeShip(ship, coord, direction);
        }
    }
}

function getOpponent(player) {
    return player === human ? computer : human;
}

function endGame(winner) {
    gameOver = true;
    console.log(`${winner === human ? 'Human' : 'Computer'} wins!`);
}

//MAIN GAMEPLAY ENGINE
function handleTurn(coord) {
    if (gameOver) return;

    const opponent = getOpponent(currentPlayer);

    // HUMAN TURN
    if (currentPlayer === human) {
        currentPlayer.attack(opponent.board, coord);
    } 
    // COMPUTER TURN
    else {
        currentPlayer.attack(opponent.board);
    }

    // Check win
    if (opponent.board.allShipsSunk()) {
        endGame(currentPlayer);
        return;
    }

    // Switch players
    currentPlayer = opponent;

    // COMPUTER PLAYS AUTOMATICALLY *BUT SAFELY*
    if (currentPlayer === computer) {
        setTimeout(() => {
            handleTurn();
        }, 300); // delay prevents infinite recursive locking
    }
}


// START THE GAME
function startGame() {
    human = new Player(false); 
    computer = new Player(true); 

    humanFleet = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
];
    computerFleet = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
];

    randomizeFleet(human, humanFleet);
    randomizeFleet(computer, computerFleet);

    currentPlayer = human;

    gameOver = false;
}


module.exports = { startGame, handleTurn, human, computer};
