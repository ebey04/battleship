const Gameboard = require('./src/gameboard');
const Ship = require('./src/ship'); 
const Player = require('./src/player');

// CREATE PLAYERS
const human = newPlayer(false); 
const computer = newPlayer(true); 

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


randomizeFleet(player, fleetArray) {
    for (const ship in shipsArray) {
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