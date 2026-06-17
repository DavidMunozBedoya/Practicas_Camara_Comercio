export function Square({ value, onSquareClick }) {
  return (
    <button className="square border" onClick={onSquareClick}>
      {value}.
    </button>
  );
}