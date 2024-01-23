//--------------- GAMEBOARD ---------------
const gameboard = (function () {
  const board = [];

  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      board[i][j] = "-";
    }
  }

  const checkMove = function (move, symbol) {
    console.log("test");
    switch (Number(move)) {
      case 1:
        if (board[0][0] === "-") board[0][0] = symbol;
        return board[0][0] === "-";
        break;
      case 2:
        if (board[0][1] === "-") board[0][1] = symbol;
        return board[0][1] === "-";
        break;
      case 3:
        if (board[0][2] === "-") board[0][2] = symbol;
        return board[0][2] === "-";
        break;
      case 4:
        if (board[1][0] === "-") board[1][0] = symbol;
        return board[1][0] === "-";
        break;
      case 5:
        if (board[1][1] === "-") board[1][1] = symbol;
        return board[1][1] === "-";
        break;
      case 6:
        if (board[1][2] === "-") board[1][2] = symbol;
        return board[1][2] === "-";
        break;
      case 7:
        if (board[2][0] === "-") board[2][0] = symbol;
        return board[2][0] === "-";
        break;
      case 8:
        if (board[2][1] === "-") board[2][1] = symbol;
        return board[2][1] === "-";
        break;
      case 9:
        if (board[2][2] === "-") board[2][2] = symbol;
        return board[2][2] === "-";
        break;
      default:
        return false;
    }
  };
  const setMove = function (move, symbol) {
    return !checkMove(move, symbol) === "-";
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

//--------------- GAMEFLOW / MAIN ---------------
const gameflow = (function () {
  const player1 = createPlayer("Player 1", "X");
  const player2 = createPlayer("Player 2", "O");
  let playerTurn = player1;

  player1.setTurn();

  while (!gameboard.gameover(playerTurn.getSymbol())) {
    if (player1.getTurn()) {
      playerTurn = player1;
      player1.setTurn();
    } else {
      playerTurn = player2;
    }

    displayGame(gameboard.getBoard());
    console.log("Move: " + playerTurn.getName());
    console.log(playerTurn.getSymbol());
    while (gameboard.setMove(prompt("Your move: " + playerTurn.name))) {
      console.log("Invalid Move!");
      displayGame(gameboard.getBoard());
    }
    break;
  }
  console.log("Gameover!");
  console.log("Player: " + playerTurn.getName() + "won!");
})();

//--------------- displayGame-Console ---------------
function displayGame(board) {
  console.log(board[0][0] + "|" + board[0][1] + "|" + board[0][2]);
  console.log(board[1][0] + "+" + board[1][1] + "+" + board[1][2]);
  console.log(board[2][0] + "|" + board[2][1] + "|" + board[2][2]);
}
