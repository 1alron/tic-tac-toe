import React from 'react';
import './Board.css';
import Square from '../Square/Square';

function Board({ xIsNext, squares, onPlay }) {

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = (xIsNext) ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="Board">
      <div className="status">{status}</div>
      <div className="square-row">
        <Square onClick={() => handleClick(0)} text={squares[0]}/>
        <Square onClick={() => handleClick(1)} text={squares[1]}/>
        <Square onClick={() => handleClick(2)} text={squares[2]}/>
      </div>
      <div className="square-row">
        <Square onClick={() => handleClick(3)} text={squares[3]}/>
        <Square onClick={() => handleClick(4)} text={squares[4]}/>
        <Square onClick={() => handleClick(5)} text={squares[5]}/>
      </div>
      <div className="square-row">
        <Square onClick={() => handleClick(6)} text={squares[6]}/>
        <Square onClick={() => handleClick(7)} text={squares[7]}/>
        <Square onClick={() => handleClick(8)} text={squares[8]}/>
      </div>

    </div>
  );
}

const calculateWinner = (squares) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];  
    }
  }
  return null;
}

export default Board;
