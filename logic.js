var player = "X";
var gameOver = false;
var turn = 0;

function onInputClick(inputID) {
  const input = document.getElementById(inputID);
  input.disabled = true;
  input.value = player;
  gameOver = checkWinGame();
  if (gameOver) {
    endGame();
    document.getElementById("restartButton").classList.remove("hide")
    document.getElementById("result").innerText =
      "Player " + player + " won the game!!";
  }
  turn++;
  if (turn === 9 && !gameOver) {
    document.getElementById("restartButton").classList.remove("hide")
    document.getElementById("result").innerText = "There was a draw!";
  }
  changePlayer();
}

function changePlayer() {
  player = player === "X" ? "O" : "X";
}

function checkWinGame() {
  const input1_1 = document.getElementById("input1-1").value;
  const input1_2 = document.getElementById("input1-2").value;
  const input1_3 = document.getElementById("input1-3").value;

  const input2_1 = document.getElementById("input2-1").value;
  const input2_2 = document.getElementById("input2-2").value;
  const input2_3 = document.getElementById("input2-3").value;

  const input3_1 = document.getElementById("input3-1").value;
  const input3_2 = document.getElementById("input3-2").value;
  const input3_3 = document.getElementById("input3-3").value;

  // Horizontal lines
  if (input1_1 !== "" && input1_1 === input1_2 && input1_2 === input1_3) {
    return true;
  }

  if (input2_1 !== "" && input2_1 === input2_2 && input2_2 === input2_3) {
    return true;
  }

  if (input3_1 !== "" && input3_1 === input3_2 && input3_2 === input3_3) {
    return true;
  }

  // Vertical lines
  if (input1_1 !== "" && input1_1 === input2_1 && input2_1 === input3_1) {
    return true;
  }

  if (input1_2 !== "" && input1_2 === input2_2 && input2_2 === input3_2) {
    return true;
  }

  if (input1_3 !== "" && input1_3 === input2_3 && input2_3 === input3_3) {
    return true;
  }

  // Cross
  if (input1_1 !== "" && input1_1 === input2_2 && input2_2 === input3_3) {
    return true;
  }

  if (input1_3 !== "" && input1_3 === input2_2 && input2_2 === input3_1) {
    return true;
  }

  return false;
}

function endGame() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      document.getElementById(`input${i}-${j}`).disabled = true;
    }
  }
}

function restart() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      const input = document.getElementById(`input${i}-${j}`);
      input.disabled = false;
      input.value = "";
    }
  }
  turn = 0;
  document.getElementById("restartButton").classList.add("hide")
  document.getElementById("result").innerText = ""
}
