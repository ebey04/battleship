import './styles.css';
import './dom.js';
import Ship from "./ship.js";
import Gameboard from "./gameboard.js";
import Player from "./player.js";


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
    for (let ship of fleetArray) {
        let placed = false;
        let attempts = 0;

        while (!placed) {
            attempts++;

            // safety valve to avoid infinite loops
            if (attempts > 2000) {
                console.warn("Restarting fleet placement due to overflow…");
                player.board = new Gameboard();   // reset board
                return randomizeFleet(player, fleetArray); 
            }

            const row = Math.floor(Math.random() * 10);
            const col = Math.floor(Math.random() * 10);
            const coord = [row, col];
            const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

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

    // Check win
    if (opponent.board.allShipsSunk()) {
        endGame(currentPlayer);
        return;
    }

    // Switch to computer
    currentPlayer = computer;

    const compCoord = computer.attack(human.board);


    // Check win
    if (human.board.allShipsSunk()) {
        endGame(computer);
        return;
    }

    // Switch back to human
    currentPlayer = human;
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

export { startGame, handleTurn, human, computer };