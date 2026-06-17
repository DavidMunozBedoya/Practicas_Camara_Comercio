import { Square } from "./Squares";
import { useTicTacToe } from "../../hooks/useTicTacToe";

// Componente padre
export default function Board() {
  
  const { squares, status, generatePlay } = useTicTacToe();    

  console.log("OK")
  
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row grid grid-cols-3">
        { squares.map((e, i) =>  <Square key={i} value={e} onSquareClick={() => generatePlay(i)} />) }
      </div>
    </div>
  );
}