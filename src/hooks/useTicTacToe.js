import { useCallback, useMemo, useState } from "react";
import { useCalculateWinner } from "./useCalculateWinner";

export const useTicTacToe = () => {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
 /*  const [status, setStatus] = useState("HOLAAAAAAAAAA"); */
  const winner = useCalculateWinner(squares);
  
  const generatePlay = useCallback((i) => {
    if (winner || squares[i]) return;
  
    const nextSquare = [...squares];
  
    xIsNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");
  
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }, [squares]);

  //let status = winner ? `Ganador: ${ winner }` : `Turno para: ${ xIsNext ? "X" : "O" }`;
  // useLayoutEffect(() => {
  //   if(winner) return setStatus(`Ganador: ${ winner }`);
  //   setStatus(`Turno para: ${ xIsNext ? "X" : "O" }`);

  //   return () => setStatus("");
  // }, [winner, squares])

  const status = useMemo(() =>{

    if(winner) return `Ganador: ${winner}`;
    return `Turno para: ${xIsNext ? "X" : "O"}`; 

  }, [squares])

  console.log("OK2")

  return {
    squares,
    status,
    generatePlay
  }
}