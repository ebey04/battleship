const Gameboard = require('./src/gameboard');
const Ship = require('./src/ship'); 
const Player = require('./src/player');

// CREATE PLAYERS
const human = new Player(false); 
const computer = new Player(true); 

// CREATE FLEETS

const humanFleet = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
];


const computerFleet = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
];

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

let currentPlayer = human;

let gameOver = false;

function endGame(winner) {
    gameOver = true;
    console.log(`${winner === human ? 'Human' : 'Computer'} wins!`);
}


function handleTurn(coord) {
    if (gameOver) return;

    const opponent = getOpponent(currentPlayer);

    currentPlayer.attack(opponent.board, coord);

    if (opponent.board.allShipsSunk()) {
        endGame(currentPlayer);
        return;
    }   

    currentPlayer = opponent;
}

// START THE GAME
function startGame() {
    randomizeFleet(human, humanFleet);
    randomizeFleet(computer, computerFleet);

    // Later: DOM.drawBoards(...);
    console.log("Game started! Fleets placed.");
}

startGame();
