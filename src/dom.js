import { startGame, handleTurn } from './index.js';

// STATIC HTML ELEMENTS
const deployBtn    = document.getElementById('deploy');
const fleetBoard   = document.getElementById('fleet-board');
const enemyBoard   = document.getElementById('enemy-board');
const overlay      = document.getElementById('overlay');
const startGameBtn = document.getElementById('start-game');
const messages     = document.getElementById('messages');


function gridCreation(boardElement) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) { 
            const div = document.createElement('div'); 
            div.classList.add('cell'); 
            div.dataset.row = i
            div.dataset.col = j
            boardElement.appendChild(div);
            }
        }
    }

startGameBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    gridCreation(fleetBoard)
    gridCreation(enemyBoard)
    deployBtn.classList.remove("hidden");
})