const cells = document.querySelectorAll('[data-index]');
const gameStatus = document.querySelector('.game-status');
const playerXScore = document.querySelector('.player-x .player-score');
const playerOScore = document.querySelector('.player-o .player-score');
const resetButton = document.querySelector('.reset-btn');
const winScreen = document.querySelector('.win-screen');
const winMessage = document.querySelector('.win-content h1');
let isXTurn = true;
let board = Array(9).fill(null);

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick, { once: true });
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(e) {
    const cell = e.target;
    const currentPlayer = isXTurn ? 'x' : 'o';
    cell.classList.add(currentPlayer);
    board[cell.dataset.index] = currentPlayer;

    if (checkWin(currentPlayer)) {
        endGame(currentPlayer);
    } else if (board.every(cell => cell)) {
        endGame(null);
    } else {
        isXTurn = !isXTurn;
        setBoardHoverClass();
        gameStatus.textContent = `Player ${isXTurn ? 'X' : 'O'}'s turn`;
    }
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function endGame(winner) {
    if (winner) {
        winMessage.textContent = `Player ${winner.toUpperCase()} Wins!`;
        winMessage.classList.add('winner');
        if (winner === 'x') {
            playerXScore.textContent = parseInt(playerXScore.textContent) + 1;
        } else {
            playerOScore.textContent = parseInt(playerOScore.textContent) + 1;
        }
    } else {
        winMessage.textContent = `It's a Draw!`;
    }
    winScreen.style.display = 'flex';
}

function resetGame() {
    board = Array(9).fill(null);
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
        cell.addEventListener('click', handleCellClick, { once: true });
    });
    isXTurn = true;
    gameStatus.textContent = `Player X's turn`;
    winScreen.style.display = 'none';
    setBoardHoverClass();
}

function startGame() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.game-container').style.display = 'block';
}

document.querySelector('.start-btn').addEventListener('click', startGame);
