let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let gameCount = 0;

const resetBoard = () => {
  gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  inputBoxes.forEach((inputBox) => {
    const input = inputBox.querySelector(".input");
    input.classList.remove("disabled");
    if (inputBox.children[1]) inputBox.removeChild(inputBox.children[1]);
  });

  gameCount = 0;
};

const checkGameBoard = () => {
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
      console.log(`${gameBoard[a]} won!`);
      resetBoard();
    }
  });

  let isFull = true;
  gameBoard.forEach((piece) => {
    if (piece === " ") isFull = false;
  });
  if (isFull) {
    console.log("tie");
    resetBoard();
  }
};

const inputBoxes = document.querySelectorAll(".input-box");
inputBoxes.forEach((inputBox) => {
  inputBox.addEventListener("change", () => {
    const input = inputBox.querySelector(".input");

    if (gameCount % 2 === 0) {
      const div = document.createElement("div");
      div.classList.add("XBox");
      div.innerText = "X";
      inputBox.appendChild(div);
      gameBoard[input.value - 1] = "X";
    } else {
      const div = document.createElement("div");
      div.classList.add("OBox");
      div.innerText = "O";
      inputBox.appendChild(div);
      gameBoard[input.value - 1] = "O";
    }
    console.log(gameBoard);
    gameCount++;

    input.classList.add("disabled");
    checkGameBoard();
  });
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  resetBoard();
});
