import { startGame, handleTurn, human, computer} from './index.js';

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

function renderFleetBoard(boardElement, grid) {
    const cells = boardElement.querySelectorAll(".cell");

    for (let row = 0; row < 10; row++){
        for (let col = 0; col < 10; col++) {
            
            const index = row * 10 + col;
            const cellDiv = cells[index];
    
            if (grid[row][col] === null) {
                cellDiv.style.backgroundColor = "blue";
            }
            else if (grid[row][col] === "hit") {
                cellDiv.style.backgroundColor = "red";
            }
            else if (grid[row][col] === "miss") {
                cellDiv.style.backgroundColor = "white";
            }
            else { cellDiv.style.backgroundColor = "grey"};
        }
    }
}

function renderEnemyBoard(boardElement, grid) {
    const cells = boardElement.querySelectorAll(".cell");

    for (let row = 0; row < 10; row++){
        for (let col = 0; col < 10; col++) {
            
            const index = row * 10 + col;
            const cellDiv = cells[index];
    
            if (grid[row][col] === "miss") {
                cellDiv.style.backgroundColor = "white";
            }
            else if (grid[row][col] === "hit") {
                cellDiv.style.backgroundColor = "red";
            }
            else {
                cellDiv.style.backgroundColor = "blue";
            }
        }
    }
}

function enemyClickHandler(event) {
    if (!event.target.classList.contains("cell")) return;

    let row = Number(event.target.dataset.row);
    let col = Number(event.target.dataset.col);
    let coord = [row, col];

    handleTurn(coord);

    renderFleetBoard(fleetBoard, human.board.grid);
    renderEnemyBoard(enemyBoard, computer.board.grid);
}

deployBtn.addEventListener("click", () => {
    startGame();
    renderFleetBoard(fleetBoard, human.board.grid);

    enemyBoard.addEventListener("click", enemyClickHandler);
})