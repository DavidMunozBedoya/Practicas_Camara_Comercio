import { useState } from "react";
import InputFootbol from "./components/footbol/InputFootbol";
import CardFootbolAll from "./components/footbol/CardFootbolAll";

function App() {

  const [league, setLeague] = useState(1);
  const changeLeague = (value) => setLeague(value);

  return (
    <div>
      <InputFootbol league={league} changeLeague={changeLeague} />
      <CardFootbolAll value={league} />
    </div>
  )
}

export default App;