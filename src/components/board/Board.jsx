import  Square  from "./Squares";
import { useTicTacToe } from "../../hooks/useTicTacToe";

// Componente padre
export default function Board() {
  const { squares, status, generatePlay } = useTicTacToe();

  console.log("OK");

  return (
    <div className="w-64 aspect-square py-48 mx-auto">
      <div className="status my-2 font-sans text-3xl text-center">{status}</div>
      <div className="board-row grid grid-cols-3">
        {squares.map((e, i) => (
          <Square key={i} value={e} onSquareClick={() => generatePlay(i)} />
        ))}
      </div>
    </div>
  );
}
