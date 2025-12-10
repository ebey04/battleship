const Gameboard = require('./src/gameboard');
const Ship = require('./src/ship'); 
const Player = require('./src/player');

// CREATE PLAYERS
let human
let computer 

// CREATE FLEETS

let humanFleet
let computerFleet

// RANDOMIZE FLEET FUNCTION

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

// OPPONENT/TURN HANDLERS

function getOpponent(player) {
    return player === human ? computer : human;
}

let currentPlayer
let gameOver = false

function endGame(winner) {
    gameOver = true;
    console.log(`${winner === human ? 'Human' : 'Computer'} wins!`);
}


function handleTurn(coord) {
    if (gameOver) return;

    const opponent = getOpponent(currentPlayer);

    if (currentPlayer === human) {
        currentPlayer.attack(opponent.board, coord);
    } else {
        currentPlayer.attack(opponent.board);
    }

    if (opponent.board.allShipsSunk()) {
        endGame(currentPlayer);
        return;
    }

    currentPlayer = opponent;

    if (currentPlayer === computer) {
        handleTurn(); 
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

    // Later: DOM.drawBoards(...);
    console.log("Game started! Fleets placed.");
}

startGame();
