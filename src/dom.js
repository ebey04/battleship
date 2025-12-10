import { startGame, handleTurn } from './index.js';

// STATIC HTML ELEMENTS
const deployBtn    = document.getElementById('deploy');
const fleetBoard   = document.getElementById('fleet-board');
const enemyBoard   = document.getElementById('enemy-board');
const overlay      = document.getElementById('overlay');
const startGameBtn = document.getElementById('start-game');
const messages     = document.getElementById('messages');
