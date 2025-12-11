import { startGame, handleTurn, human, computer} from './index.js';
import catYowl from "./sounds/cat-yowl.mp3";
import angryCat from "./sounds/angry-cat.mp3"


// STATIC HTML ELEMENTS
    const fleetBoard = document.getElementById("fleet-board");
    const enemyBoard = document.getElementById("enemy-board");
    const overlay = document.getElementById("overlay");
    const startGameBtn = document.getElementById("start-game");
    const deployBtn = document.getElementById("deploy");
    const messages = document.getElementById("messages");

// MESSAGE DISPLAY FUNCTION

let messageTimeout = null;

function showMessage(text, persistent = false) {
    if (messageTimeout) {
        clearTimeout(messageTimeout);
        messageTimeout = null;
        }

    messages.textContent = text;
    messages.style.display = "block";

    if (!persistent) {
        setTimeout(() => {
            messages.textContent = "";
            messages.style.display = "none"; 
        }, 2000);
    }
}

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

//SOUNDS

const yowlSound = new Audio(catYowl);
yowlSound.preload = "auto";

const explodeSound = new Audio(angryCat);
explodeSound.preload = "auto"

startGameBtn.addEventListener("click", () => {
    yowlSound.currentTime = 0;
    yowlSound.volume = 0.4; 
    yowlSound.play();

    overlay.classList.add("hidden");
    gridCreation(fleetBoard)
    gridCreation(enemyBoard)
    deployBtn.classList.remove("hidden");
})

// BOARD RENDERING

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
            else if (typeof grid[row][col] === "object") {
                cellDiv.style.backgroundColor = grid[row][col].color;
            }
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

//ENEMY CLICK HANDLER 

let gameOver = false;

function enemyClickHandler(event) {
    if (gameOver) return; 
    if (!event.target.classList.contains("cell")) return;

    let row = Number(event.target.dataset.row);
    let col = Number(event.target.dataset.col);
    let coord = [row, col];

    handleTurn(coord);

    renderFleetBoard(fleetBoard, human.board.grid);
    renderEnemyBoard(enemyBoard, computer.board.grid);

const humanResult = computer.board.grid[row][col];

    if (!gameOver && humanResult === "hit") {
        explodeSound.currentTime = 0;
        explodeSound.volume = 0.4;
        explodeSound.play();

        showMessage("Direct hit to the enemy's clowder!");

        const clickedCell = event.target;
        clickedCell.classList.add("smoke-plume");

        setTimeout(() => {
        clickedCell.classList.remove("smoke-plume");
        }, 1100);

    } else if (!gameOver && humanResult === "miss") {
        showMessage("Your shot missed the enemy cats.");
    }

    if (computer.board.allShipsSunk()) {
        gameOver = true;
        showMessage("You win! All enemy cats exploded!", true);
        enemyBoard.removeEventListener("click", enemyClickHandler);
        return;
    }

    if (human.board.allShipsSunk()) {
        gameOver = true;
        showMessage("Defeat... The enemy exploded your entire clowder.", true);
        enemyBoard.removeEventListener("click", enemyClickHandler);
        return;
    }

    const lastMove = computer.prevMoves[computer.prevMoves.length - 1];

    if (!gameOver && lastMove) {
        const [cRow, cCol] = lastMove;
        const compResult = human.board.grid[cRow][cCol];

        if (compResult === "hit") {
        explodeSound.currentTime = 0;
        explodeSound.volume = 0.2;
        explodeSound.play();
        
            setTimeout(() => {
            if (!gameOver) showMessage("The enemy exploded one of your cats!");
            }, 2000);
        } 
        else if (compResult === "miss") {
            setTimeout(() => {
                if (!gameOver) showMessage(" The enemy missed their shot.")
            }, 2000);
        }
    }
}

// DEPLOY BUTTON

deployBtn.addEventListener("click", () => {
    startGame();
    renderFleetBoard(fleetBoard, human.board.grid);

    showMessage("Clowder deployed! Begin your attack.");

    enemyBoard.addEventListener("click", enemyClickHandler);
})

