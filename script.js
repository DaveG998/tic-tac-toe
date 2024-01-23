//--------------- GAMEBOARD ---------------
const gameboard = (function () {
  const board = [];

  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      board[i][j] = " ";
    }
  }

  const setMove = function (move, symbol) {
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

  return { getBoard, setMove, gameover };
})();

//--------------- PLAYER ---------------
function createPlayer(name, symbol) {
  const playerName = name;
  const playerSymbol = symbol;
  let points = 0;
  let turn = false;

  const givePoints = () => point++;
  const getPoints = () => points;
  const getName = () => playerName;
  const getSymbol = () => playerSymbol;
  const setTurn = () => {
    turn = !turn;
  };
  const getTurn = () => turn;

  return { givePoints, getPoints, getName, getSymbol, getTurn, setTurn };
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
  const result = field.querySelector("#result");

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
    result,
  };
})();

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

//--------------- GAMEFLOW / MAIN ---------------

const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player 2", "O");

let playerTurn = player1;
//let roundCount = 0;
cacheDom.turn.textContent = "Player 1 turn";

function game(field) {
  if (gameboard.setMove(field, playerTurn.getSymbol())) {
    displayGameDOM(gameboard.getBoard());
    if (gameboard.gameover(playerTurn.getSymbol())) {
      cacheDom.result.textContent = playerTurn.getName() + " has won!";
    } else {
      //console.log("It's a tie!");
    }
    if (player1.getTurn()) {
      cacheDom.turn.textContent = "Player 1 turn";
      playerTurn = player1;
      player1.setTurn();
    } else {
      cacheDom.turn.textContent = "Player 2 turn";
      playerTurn = player2;
      player1.setTurn();
    }
  } else {
    console.log("Invalid Move!");
  }
}

//---------------------------------------------
// while (!gameboard.gameover(playerTurn.getSymbol()) && roundCount < 9) {
//   if (player1.getTurn()) {
//     playerTurn = player1;
//     player1.setTurn();
//   } else {
//     playerTurn = player2;
//     player1.setTurn();
//   }

//   displayGame(gameboard.getBoard());
//   displayGameDOM(gameboard.getBoard());
//   console.log("Move: " + playerTurn.getName());
//   console.log(playerTurn.getSymbol());
//   while (true) {
//     if (
//       gameboard.setMove(
//         prompt("Your move: " + playerTurn.getName()),
//         playerTurn.getSymbol()
//       )
//     ) {
//       break;
//     }

//     console.log("Invalid Move!");
//     displayGame(gameboard.getBoard());
//     displayGameDOM(gameboard.getBoard());
//   }
//   roundCount++;
//   //break;
// }
// console.log("Gameover!");
// if (gameboard.gameover(playerTurn.getSymbol())) {
//   console.log("Player: " + playerTurn.getName() + " won!");
// } else {
//   console.log("It's a tie!");
// }
