// Componente hijo de < Board />
export function Square({ value, onSquareClick }) {
   return (
      <button className="square h-17 border rounded-md text-blue-950 text-6xl hover:bg-gray-200 ..." onClick={onSquareClick}>
         {value}
      </button>
   );
}