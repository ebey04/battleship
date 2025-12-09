const Gameboard = require('./src/gameboard');
const Ship = require('./src/ship'); 
const Player = require('./src/player');

// CREATE PLAYERS
const human = newPlayer(false); 
const computer = newPlayer(true); 

//CREATE FLEET -HUMAN
const carrier     = new Ship(5);
const battleship  = new Ship(4);
const destroyer   = new Ship(3);
const submarine   = new Ship(3);
const patrolBoat  = new Ship(2);

//CREATE FLEET -COMPUTER
const carrier     = new Ship(5);
const battleship  = new Ship(4);
const destroyer   = new Ship(3);
const submarine   = new Ship(3);
const patrolBoat  = new Ship(2);

