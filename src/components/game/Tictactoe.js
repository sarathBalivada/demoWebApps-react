import { useState } from "react";
import "./tictactoe.css";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Button from "@mui/material/Button";

const Tictactoe = () => {
  return (
    <div>
      <Game />
    </div>
  );
};

function Game() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  //   useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  function finalWinner(board) {
    let list = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < list.length; i++) {
      const [a, b, c] = list[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    for (let i = 0; i < list.length; i++) {
        
    }
    return null;
  }

  const { width, height } = useWindowSize();

  const winner = finalWinner(board);

  const [isXturn, setIsXturn] = useState(true);

  function handleClick(index) {
    // changing board copy;
    // Get untouched box and allow them to change;
    // if no winner and if untouched then update it;
    if (!board[index] && !winner) {
      const copyBoard = [...board];
      copyBoard[index] = isXturn ? "X" : "O";
      setBoard(copyBoard);
      // changing turn
      setIsXturn(!isXturn);
      // () => setValue(value === "X" ? "O" : "X")
    }
  }
  const restart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXturn(true);
  };

  return (
    <div>
    <div className="full-game">
      <h1>TIC-TAC-TOE</h1><br/>
      {winner ? <Confetti width={width} height={height} gravity={0.2} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}{" "}
      </div>
      
      <Button style={{margin:"10px"}} variant="contained" onClick={restart}>Restart</Button>
      {winner ? <h1>WINNER : {winner}</h1> : <h2>{isXturn ? "X" : "O"}'s turn</h2>}
    </div>
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  return (
    <div
      className="game-box"
      //   onClick={() => setValue(value === "X" ? "O" : "X")}
      onClick={onPlayerClick}
      style={{ color: val === "X" ? "teal" : "red" }}
    >
      {" "}
      {val}
    </div>
  );
}

export default Tictactoe;

// Task
// // 1 draw conditon
// 2 choose to play X or o
// 3  whose turn is it
// 4  style while winning
