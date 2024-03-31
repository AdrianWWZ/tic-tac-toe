let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
gameBoard[0] = "O";
gameBoard[1] = "O";
gameBoard[2] = "X";

gameBoard[3] = "X";
gameBoard[4] = "X";
gameBoard[5] = "O";

gameBoard[6] = "O";
gameBoard[7] = "O";
gameBoard[8] = "X";
console.log(gameBoard);

const resetBoard = () => {
  gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
};

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

winningPatterns.forEach((pattern) => {
  const a = pattern[0];
  const b = pattern[1];
  const c = pattern[2];
  if (
    gameBoard[a] !== " " &&
    gameBoard[a] === gameBoard[b] &&
    gameBoard[b] === gameBoard[c]
  ) {
    resetBoard();
  }
});

let isFull = true;
gameBoard.forEach((piece) => {
  if (piece === " ") isFull = false;
});
if (isFull) console.log("tie");

console.log(gameBoard);

const inputBoxes = document.querySelectorAll(".input-box");
inputBoxes.forEach((inputBox) => {
  inputBox.addEventListener("change", () => {
    inputBox.innerText = "disabled";
  });
});
