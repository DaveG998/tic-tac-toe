//--------------- GAMEBOARD ---------------
const gameboard = (function () {
  const board = [];

  
  const resetBoard = () => {
    for (let i = 0; i < 3; i++) {
      board[i] = [];
      for (let j = 0; j < 3; j++) {
        board[i][j] = " ";
      }
    }
  }

  const setMove = (move, symbol) => {
    switch (Number(move)) {
      case 1:
        if (board[0][0] === " ") {
          board[0][0] = symbol;
          return true;
        }
        return false;
        break;
      case 2:
        if (board[0][1] === " ") {
          board[0][1] = symbol;
          return true;
        }
        return false;
        break;
      case 3:
        if (board[0][2] === " ") {
          board[0][2] = symbol;
          return true;
        }
        return false;
        break;
      case 4:
        if (board[1][0] === " ") {
          board[1][0] = symbol;
          return true;
        }
        return false;
        break;
      case 5:
        if (board[1][1] === " ") {
          board[1][1] = symbol;
          return true;
        }
        return false;
        break;
      case 6:
        if (board[1][2] === " ") {
          board[1][2] = symbol;
          return true;
        }
        return false;
        break;
      case 7:
        if (board[2][0] === " ") {
          board[2][0] = symbol;
          return true;
        }
        return false;
        break;
      case 8:
        if (board[2][1] === " ") {
          board[2][1] = symbol;
          return true;
        }
        return false;
        break;
      case 9:
        if (board[2][2] === " ") {
          board[2][2] = symbol;
          return true;
        }
        return false;
        break;
      default:
        return false;
    }
  };
  const getBoard = () => board;
  const gameover = function (symbol) {
    if (
      board[0][0] === symbol &&
      board[0][1] === symbol &&
      board[0][2] === symbol
    )
      return true;
    else if (
      board[1][0] === symbol &&
      board[1][1] === symbol &&
      board[1][2] === symbol
    )
      return true;
    else if (
      board[2][0] === symbol &&
      board[2][1] === symbol &&
      board[2][2] === symbol
    )
      return true;
    else if (
      board[0][0] === symbol &&
      board[1][0] === symbol &&
      board[2][0] === symbol
    )
      return true;
    else if (
      board[0][1] === symbol &&
      board[1][1] === symbol &&
      board[2][1] === symbol
    )
      return true;
    else if (
      board[0][2] === symbol &&
      board[1][2] === symbol &&
      board[2][2] === symbol
    )
      return true;
    else if (
      board[0][0] === symbol &&
      board[1][1] === symbol &&
      board[2][2] === symbol
    )
      return true;
    else if (
      board[0][2] === symbol &&
      board[1][1] === symbol &&
      board[2][0] === symbol
    )
      return true;
    return false;
  };
  const full = function() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if(board[i][j] === " ")
          return false;
      }
    }
    return true;
  }
  resetBoard();
  return { getBoard, setMove, gameover, full, resetBoard };
})();

//--------------- PLAYER ---------------
function createPlayer(symbol) {
  let playerName;
  const playerSymbol = symbol;
  let points = 0;
  let turn = false;

  const setPoints = () => points++;
  const getPoints = () => points;
  const setName = (name) => playerName = name; 
  const getName = () => playerName;
  const getSymbol = () => playerSymbol;
  const setTurn = () => {
    turn = !turn;
  };
  const getTurn = () => turn;

  return { setPoints, getPoints, setName, getName, getSymbol, getTurn, setTurn };
}

//--------------- cacheDom ---------------
const cacheDom = (function () {
  const field = document.querySelector("main");
  const field1 = field.querySelector("#box1");
  const field2 = field.querySelector("#box2");
  const field3 = field.querySelector("#box3");
  const field4 = field.querySelector("#box4");
  const field5 = field.querySelector("#box5");
  const field6 = field.querySelector("#box6");
  const field7 = field.querySelector("#box7");
  const field8 = field.querySelector("#box8");
  const field9 = field.querySelector("#box9");
  const turn = field.querySelector("#turn");
  const dialog = field.querySelector("#dialog-1");
  const btnConfirm = field.querySelector("#btnConfirm");
  const name1 = field.querySelector("#player1");
  const name2 = field.querySelector("#player2");
  const required = field.querySelector("#required");
  const dialog_2 = field.querySelector("#dialog-2");
  const won = field.querySelector("#won");
  const points = field.querySelector("#points");
  const playAgain = field.querySelector("#playAgain");

  field1.addEventListener("click", () => {
    game("1");
  });
  field2.addEventListener("click", () => {
    game("2");
  });
  field3.addEventListener("click", () => {
    game("3");
  });
  field4.addEventListener("click", () => {
    game("4");
  });
  field5.addEventListener("click", () => {
    game("5");
  });
  field6.addEventListener("click", () => {
    game("6");
  });
  field7.addEventListener("click", () => {
    game("7");
  });
  field8.addEventListener("click", () => {
    game("8");
  });
  field9.addEventListener("click", () => {
    game("9");
  });

  btnConfirm.addEventListener("click", () => {
    if(!name1.value == "" && !name2.value == "") {
      player1.setName(name1.value);
      player2.setName(name2.value);
      setupGame();
      dialog.close();
    } else {
      required.textContent = "Please fill in missing names!";
    }
  });

  playAgain.addEventListener("click", () => {
    dialog_2.close();
    restardGame();
  });

  return {
    field1,
    field2,
    field3,
    field4,
    field5,
    field6,
    field7,
    field8,
    field9,
    turn,
    dialog,
    dialog_2,
    won,
    playAgain,
    points,
  };
})();

function restardGame() {
  gameboard.resetBoard();
  displayGameDOM(gameboard.getBoard());
}

//--------------- displayGame-Console ---------------
function displayGame(board) {
  console.log(board[0][0] + "|" + board[0][1] + "|" + board[0][2]);
  console.log(board[1][0] + "+" + board[1][1] + "+" + board[1][2]);
  console.log(board[2][0] + "|" + board[2][1] + "|" + board[2][2]);
}

//--------------- displayGame - DOM ----------------
function displayGameDOM(board) {
  cacheDom.field1.textContent = board[0][0];
  cacheDom.field2.textContent = board[0][1];
  cacheDom.field3.textContent = board[0][2];
  cacheDom.field4.textContent = board[1][0];
  cacheDom.field5.textContent = board[1][1];
  cacheDom.field6.textContent = board[1][2];
  cacheDom.field7.textContent = board[2][0];
  cacheDom.field8.textContent = board[2][1];
  cacheDom.field9.textContent = board[2][2];
}

function setupGame() {
  playerTurn = player1;
  cacheDom.turn.textContent =  player1.getName() + " turn";
}

function displayGameover(str) {
  cacheDom.dialog_2.showModal();
  if(str === "winner") {
    playerTurn.setPoints();
    cacheDom.won.textContent = playerTurn.getName() + " has won!";
  }
  else {
    cacheDom.won.textContent = "It's a tie!"; 
  }
  cacheDom.points.textContent = player1.getName() + " points: " + player1.getPoints() + "    "+ player2.getName() + " points: " + player2.getPoints(); 
}

//--------------- GAMEFLOW / MAIN ---------------
const player1 = createPlayer("X");
const player2 = createPlayer("O");
let playerTurn;
cacheDom.dialog.showModal();


function game(field) {
  if (gameboard.setMove(field, playerTurn.getSymbol())) {
    displayGameDOM(gameboard.getBoard());
    if (gameboard.gameover(playerTurn.getSymbol())) {
      displayGameover("winner");
    } else if (gameboard.full()){
      displayGameover("tie");
    }

    if (player1.getTurn()) {
      cacheDom.turn.textContent =  player1.getName() + "turn";
      playerTurn = player1;
      player1.setTurn();
    } else {
      cacheDom.turn.textContent = player2.getName() + "turn";
      playerTurn = player2;
      player1.setTurn();
    }
  } else {
    console.log("Invalid Move!");
  }
}


