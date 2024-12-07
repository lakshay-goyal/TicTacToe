// // // Existing Tic Tac Toe game logic
// // document.addEventListener('DOMContentLoaded', () => {
// //     const boxes = document.querySelectorAll('.box');
// //     const gameInfo = document.querySelector('.game-info');
// //     const newGameBtn = document.querySelector('.btn');
// //     const startBtn = document.querySelector('.start-btn');
// //     const welcomeScreen = document.querySelector('.welcome-screen');
// //     const gameContainer = document.querySelector('.game-container');

// //     let currentPlayer = 'X';
// //     let gameGrid = Array(9).fill('');
// //     let gameActive = true;

// //     const winningPositions = [
// //         [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
// //         [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
// //         [0, 4, 8], [2, 4, 6]  // Diagonals
// //     ];

// //     // Start button functionality
// //     startBtn.addEventListener('click', () => {
// //         welcomeScreen.style.display = 'none';
// //         gameContainer.style.display = 'block';
// //     });

// //     // Game logic remains the same as in the previous implementation
// //     function handleBoxClick(index) {
// //         if (gameGrid[index] !== '' || !gameActive) return;

// //         gameGrid[index] = currentPlayer;
// //         boxes[index].textContent = currentPlayer;
        
// //         if (checkWin()) {
// //             gameInfo.textContent = `Winner is ${currentPlayer}!`;
// //             gameActive = false;
// //             boxes.forEach((box, idx) => {
// //                 if (winningPositions.some(pos => pos.includes(idx) && checkWinningCombo(pos))) {
// //                     box.classList.add('win');
// //                 }
// //             });
// //             newGameBtn.classList.add('active');
// //             return;
// //         }

// //         if (checkDraw()) {
// //             gameInfo.textContent = 'Game Drawn!';
// //             gameActive = false;
// //             newGameBtn.classList.add('active');
// //             return;
// //         }

// //         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// //         gameInfo.textContent = `Current Player - ${currentPlayer}`;
// //     }

// //     function checkWin() {
// //         return winningPositions.some(position => {
// //             return position.every(
// //                 index => gameGrid[index] === currentPlayer
// //             );
// //         });
// //     }

// //     function checkWinningCombo(combo) {
// //         return combo.every(index => gameGrid[index] === currentPlayer);
// //     }

// //     function checkDraw() {
// //         return gameGrid.every(box => box !== '');
// //     }

// //     function handleNewGame() {
// //         gameGrid = Array(9).fill('');
// //         gameActive = true;
// //         currentPlayer = 'X';

// //         gameInfo.textContent = `Current Player - ${currentPlayer}`;
        
// //         boxes.forEach(box => {
// //             box.textContent = '';
// //             box.classList.remove('win');
// //         });

// //         newGameBtn.classList.remove('active');
// //     }

// //     boxes.forEach((box, index) => {
// //         box.addEventListener('click', () => handleBoxClick(index));
// //     });

// //     newGameBtn.addEventListener('click', handleNewGame);

// //     // Initialize game info
// //     gameInfo.textContent = `Current Player - ${currentPlayer}`;
// // });


// document.addEventListener('DOMContentLoaded', () => {
//     const startBtn = document.querySelector('.start-btn');
//     const welcomeScreen = document.querySelector('.welcome-screen');
//     const gameContainer = document.querySelector('.game-container');
//     const cells = document.querySelectorAll('.cell');
//     const resetBtn = document.querySelector('.reset-btn');
//     const gameStatus = document.querySelector('.game-status');
//     const playerXScore = document.querySelector('.player-x .player-score');
//     const playerOScore = document.querySelector('.player-o .player-score');

//     let currentPlayer = 'x';
//     let gameBoard = ['', '', '', '', '', '', '', '', ''];
//     let scores = { x: 0, o: 0 };
//     let gameActive = true;

//     const winningCombinations = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
//         [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
//         [0, 4, 8], [2, 4, 6]              // Diagonals
//     ];

//     // Start Game
//     startBtn.addEventListener('click', () => {
//         welcomeScreen.style.display = 'none';
//         gameContainer.style.display = 'block';
//         updateGameStatus();
//     });

//     // Cell Click Handler
//     cells.forEach(cell => {
//         cell.addEventListener('click', () => {
//             const index = cell.getAttribute('data-index');
            
//             if (gameBoard[index] || !gameActive) return;

//             gameBoard[index] = currentPlayer;
//             cell.classList.add(currentPlayer);

//             if (checkWin(currentPlayer)) {
//                 endGame(false);
//             } else if (isDraw()) {
//                 endGame(true);
//             } else {
//                 currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
//                 updateGameStatus();
//             }
//         });
//     });

//     // Reset Game
//     resetBtn.addEventListener('click', () => {
//         gameBoard = ['', '', '', '', '', '', '', '', ''];
//         gameActive = true;
//         currentPlayer = 'x';

//         cells.forEach(cell => {
//             cell.classList.remove('x', 'o');
//         });

//         updateGameStatus();
//     });

//     function checkWin(player) {
//         return winningCombinations.some(combination => {
//             return combination.every(index => {
//                 return gameBoard[index] === player;
//             });
//         });
//     }

//     function isDraw() {
//         return gameBoard.every(cell => cell !== '');
//     }

//     function endGame(draw) {
//         gameActive = false;

//         if (draw) {
//             gameStatus.textContent = 'Draw!';
//         } else {
//             scores[currentPlayer]++;
//             updateScores();
//             gameStatus.textContent = `${currentPlayer.toUpperCase()} Wins!`;
//         }
//     }

//     function updateScores() {
//         playerXScore.textContent = scores.x;
//         playerOScore.textContent = scores.o;
//     }

//     function updateGameStatus() {
//         gameStatus.textContent = `${currentPlayer.toUpperCase()}'s Turn`;
//     }
// });


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
