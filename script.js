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
  const dialog = field.querySelector("#dialog-1");
  const btnConfirm = field.querySelector("#btnConfirm");
  const name1 = field.querySelector("#player1");
  const name2 = field.querySelector("#player2");
  const required = field.querySelector("#required");
  const dialog_2 = field.querySelector("#dialog-2");
  const won = field.querySelector("#won");
  const playAgain = field.querySelector("#playAgain");
  const points1 = field.querySelector("#points-1");
  const points2 = field.querySelector("#points-2");
  const player1Points = field.querySelector("#points-player1");
  const player2Points = field.querySelector("#points-player2");
  const btnRestart = field.querySelector("#restartBtn");
  const turnDisc = field.querySelector("#turnDisc");
  const playerName = field.querySelector("#playerName");

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
    dialog,
    dialog_2,
    won,
    playAgain,
    points1,
    points2,
    player1Points,
    player2Points,
    btnConfirm,
    name2,
    name1,
    required,
    btnRestart,
    turnDisc,
    playerName,
  };
})();

//--------------- GAMEBOARD ---------------
const gameboard = (function () {
  const board = [];

  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      board[i][j] = " ";
    }
  }

  const resetBoard = () => {
    for (let i = 0; i < 3; i++) {
      board[i] = [];
      for (let j = 0; j < 3; j++) {
        board[i][j] = " ";
      }
    }
    displayGameDOM();
  };

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
  const full = function () {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === " ") return false;
      }
    }
    return true;
  };

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
  const setName = (name) => (playerName = name);
  const getName = () => playerName;
  const getSymbol = () => playerSymbol;
  const setTurn = () => {
    turn = !turn;
  };
  const getTurn = () => turn;
  const resetPoints = () =>
    points = 0;
    return {
    setPoints,
    getPoints,
    setName,
    getName,
    getSymbol,
    getTurn,
    setTurn,
    resetPoints,
  };
}


//--------------- addEventlistener ---------------
function addEventListeners() {
  cacheDom.field1.addEventListener("click", () => {
    game("1");
  });
  cacheDom.field2.addEventListener("click", () => {
    game("2");
  });
  cacheDom.field3.addEventListener("click", () => {
    game("3");
  });
  cacheDom.field4.addEventListener("click", () => {
    game("4");
  });
  cacheDom.field5.addEventListener("click", () => {
    game("5");
  });
  cacheDom.field6.addEventListener("click", () => {
    game("6");
  });
  cacheDom.field7.addEventListener("click", () => {
    game("7");
  });
  cacheDom.field8.addEventListener("click", () => {
    game("8");
  });
  cacheDom.field9.addEventListener("click", () => {
    game("9");
  });

  cacheDom.btnConfirm.addEventListener("click", () => {
    if (!cacheDom.name1.value == "" && !cacheDom.name2.value == "") {
      player1.setName(cacheDom.name1.value);
      player2.setName(cacheDom.name2.value);
      setupGame();
      cacheDom.dialog.close();
      
    } else {
      cacheDom.required.textContent = "Please fill in missing names!";
    }
  });

  cacheDom.playAgain.addEventListener("click", () => {
    cacheDom.dialog_2.close();
    gameboard.resetBoard();
  });
  cacheDom.btnRestart.addEventListener("click", () => {
    gameboard.resetBoard();
    player1.resetPoints();
    player2.resetPoints();
    cacheDom.player1Points.textContent = player1.getPoints();
    cacheDom.player2Points.textContent = player2.getPoints();
  });
}

//--------------- displayGame - DOM ----------------
function displayGameDOM() {
  cacheDom.field1.textContent = gameboard.getBoard()[0][0];
  cacheDom.field2.textContent = gameboard.getBoard()[0][1];
  cacheDom.field3.textContent = gameboard.getBoard()[0][2];
  cacheDom.field4.textContent = gameboard.getBoard()[1][0];
  cacheDom.field5.textContent = gameboard.getBoard()[1][1];
  cacheDom.field6.textContent = gameboard.getBoard()[1][2];
  cacheDom.field7.textContent = gameboard.getBoard()[2][0];
  cacheDom.field8.textContent = gameboard.getBoard()[2][1];
  cacheDom.field9.textContent = gameboard.getBoard()[2][2];
}

function setupGame() {
  playerTurn = player1;
  cacheDom.points1.textContent = player1.getName();
  cacheDom.points2.textContent = player2.getName();
  cacheDom.player1Points.textContent = player1.getPoints();
  cacheDom.player2Points.textContent = player2.getPoints();
  cacheDom.turnDisc.textContent = "Player's turn:";
  cacheDom.playerName.textContent = player1.getName();
}

function displayGameover(str) {
  cacheDom.dialog_2.showModal();
  if (str === "winner") {
    playerTurn.setPoints();
    cacheDom.won.textContent = playerTurn.getName() + " won!";
  } else {
    cacheDom.won.textContent = "It's a tie!";
  }
}

//--------------- START_GLOBAL ---------------
const player1 = createPlayer("X");
const player2 = createPlayer("O");
let playerTurn;
addEventListeners();
cacheDom.dialog.showModal();

//-------------- GAMEFLOW --------------
function game(field) {
  if (gameboard.setMove(field, playerTurn.getSymbol())) {
    displayGameDOM();
    if (gameboard.gameover(playerTurn.getSymbol())) {
      displayGameover("winner");
      cacheDom.player1Points.textContent = player1.getPoints();
      cacheDom.player2Points.textContent = player2.getPoints();
    } else if (gameboard.full()) {
      displayGameover("tie");
    }

    if (player1.getTurn()) {
      cacheDom.playerName.textContent = player1.getName();
      playerTurn = player1;
      player1.setTurn();
    } else {
      cacheDom.playerName.textContent = player2.getName();
      playerTurn = player2;
      player1.setTurn();
    }
      } else {
        cacheDom.playerName.textContent += " INVALID MOVE!!";
  }
}

