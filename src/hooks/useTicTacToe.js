import { useCallback, useState } from "react";
import { useCalculateWinner } from "./useCalculateWinner";

export const useTicTacToe = () => {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = useCalculateWinner(squares);
  
  const generatePlay = useCallback((i) => {
    if (winner || squares[i]) return;
  
    const nextSquare = [...squares];
  
    xIsNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");
  
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }, [winner, squares]);

  let status = winner ? `Ganador: ${ winner }` : `Turno para: ${ xIsNext ? "X" : "O" }`;
  
  console.log("OK2")

  return {
    squares,
    status,
    generatePlay
  }
}