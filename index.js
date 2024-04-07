let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let gameCount = 0;
const sideText = document.querySelector(".win-text");

const resetBoard = () => {
  gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  inputBoxes.forEach((inputBox) => {
    const input = inputBox.querySelector(".input");
    input.classList.remove("disabled");
    if (inputBox.children[1]) inputBox.removeChild(inputBox.children[1]);
  });

  sideText.innerHTML = "";
  if (sideText.classList.contains("X")) sideText.classList.remove("X");
  if (sideText.classList.contains("O")) sideText.classList.remove("O");

  continueButton.classList.add("disabled");
};

const checkGameBoard = () => {
  const namePlayer1 = document.querySelector(".player1").value;
  const namePlayer2 = document.querySelector(".player2").value;

  let nameDisplay;
  if (gameCount % 2 === 0 && namePlayer1) {
    nameDisplay = `<span>${namePlayer1}</span>`;
  } else if (gameCount % 2 === 1 && namePlayer2) {
    nameDisplay = `<span>${namePlayer2}</span>`;
  } else if (gameCount % 2 === 0) {
    nameDisplay = "<span>Player</span> 1";
  } else {
    nameDisplay = "<span>Player</span> 2";
  }

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

  let noWin = true;
  winningPatterns.forEach((pattern) => {
    const a = pattern[0];
    const b = pattern[1];
    const c = pattern[2];
    if (
      gameBoard[a] !== " " &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c]
    ) {
      inputBoxes.forEach((inputBox) => {
        const input = inputBox.querySelector(".input");
        input.classList.add("disabled");
      });
      sideText.innerHTML = `${nameDisplay} Wins!`;
      sideText.classList.add(`${gameBoard[a]}`);
      console.log(`${gameBoard[a]} won!`);
      noWin = false;
    }
  });

  let isFull = true;
  gameBoard.forEach((piece) => {
    if (piece === " ") isFull = false;
  });
  if (isFull && noWin) {
    inputBoxes.forEach((inputBox) => {
      const input = inputBox.querySelector(".input");
      input.classList.add("disabled");
    });
    sideText.innerHTML = `Tie!`;
    console.log("tie");
    continueButton.classList.remove("disabled");
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

    console.log(gameCount);

    input.classList.add("disabled");
    checkGameBoard();
    gameCount++;
  });
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  resetBoard();
  gameCount = 0;
});

const continueButton = document.querySelector(".continue");
continueButton.addEventListener("click", () => {
  resetBoard();
});
