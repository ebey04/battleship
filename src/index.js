import './styles.css';
import './dom.js';
import Ship from "./ship.js";
import Gameboard from "./gameboard.js";
import Player from "./player.js";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

async function handleTurn(coord) {
    if (gameOver) return { ended: true };

    const opponent = getOpponent(currentPlayer);

    let humanResult = null;
    if (currentPlayer === human) {
        humanResult = currentPlayer.attack(opponent.board, coord); 
    }

    if (opponent.board.allShipsSunk()) {
        endGame(currentPlayer);
        return { ended: true, winner: "human" };
    }

    await sleep(1100);

    currentPlayer = computer;
    const compCoord = computer.attack(human.board);

    if (human.board.allShipsSunk()) {
        endGame(computer);
        return { ended: true, winner: "computer", compCoord };
    }

    currentPlayer = human;
    return { ended: false, compCoord };
}



// START THE GAME

const catColors = [
    "#1a1a1a",   // black
    "#d98c3c",   // orange tabby
    "#8b5a2b",   // brown tabby
    "#c0c0c0",   // grey
    "#f2f2f2"    // white
];

function startGame() {
    human = new Player(false); 
    computer = new Player(true); 

humanFleet = [
    new Ship(5, catColors[0]),
    new Ship(4, catColors[1]),
    new Ship(3, catColors[2]),
    new Ship(3, catColors[3]),
    new Ship(2, catColors[4]),
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