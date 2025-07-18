// Sound effects
let clickSound = new Audio('click.mp3');
let winSound = new Audio('win.mp3');
let drawSound = new Audio('draw.mp3');
let restartSound = new Audio('restart.mp3');

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function handleCellClick(e) {
  const index = e.target.dataset.index;

  if (gameState[index] !== '' || !gameActive) return;

  gameState[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  clickSound.play();

  checkResult();
}

function checkResult() {
  let won = false;

  for (const condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      won = true;
      break;
    }
  }

  if (won) {
    statusText.textContent = `🎉 Player ${currentPlayer} Wins!`;
    winSound.play();
    gameActive = false;
    return;
  }

  if (!gameState.includes('')) {
    statusText.textContent = `🤝 It's a Draw!`;
    drawSound.play();
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function restartGame() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  statusText.textContent = `Player X's Turn`;
  cells.forEach(cell => cell.textContent = '');
  restartSound.play();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
