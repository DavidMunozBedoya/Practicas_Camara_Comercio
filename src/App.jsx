/* import { useState } from "react";
import InputFootbol from "./components/footbol/InputFootbol";
import CardFootbolAll from "./components/footbol/CardFootbolAll"; */
/* import { SpinnerContextProvider } from "./context/SpinnerContext"; */
/* import Spinner from "./components/Spinner"; */
/* import { useGetApiFootbol } from "./hooks/useGetApiFootbol"; */
import { LoaderContexProvider } from "./context/LoaderContext";
import Loader from "./components/Loader";
import Card from "./components/Card";

//context
/* import { useState } from "react";
import { Mycontext } from "./context/MyContext";
import MyComponent from "./components/MyComponent"; */

function App() {
  /*  const [league, setLeague] = useState(1);
  const changeLeague = (value) => setLeague(value);
  const teams = useGetApiFootbol(league);

  //context */
  /* const  [ text, setText ] = useState("Pasando al contexto..."); */

  return (
    <LoaderContexProvider>
      <Loader />
      <Card />
    </LoaderContexProvider>
   
    /* {<LoaderContexProvider>
      <Card />
    </LoaderContexProvider>}
     */

    /* <div>
      <Spinner />
      <InputFootbol league={league} changeLeague={changeLeague} />
      <CardFootbolAll teams={teams} />
    </div> */

    // <SpinnerContextProvider>
    //   <InputFootbol league={league} changeLeague={changeLeague} />
    //   <CardFootbolAll value={league} />
    // </SpinnerContextProvider>

    /* //context
    <div>
      <Mycontext.Provider value={{ text, setText }}>
        <MyComponent />
      </Mycontext.Provider>
    </div> */
  );

  /* 

  return (
    
  ) */
}

export default App;
