import { useContext } from "react";
import { Mycontext } from "../context/MyContext";

export default function MyComponent() {
  const { text, setText } = useContext(Mycontext);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-9xl">{text}</h1>
      <button
        onClick={() => setText("Hello, World!")}
        className="border-4 border-black bg-sky-900 rounded-2xl"
      >
        <p className="text-amber-50 text-3xl font-semibold m-2">Click me</p>
      </button>
    </div>
  );
}
