import { LoaderContextProvider } from "./context/LoaderContext";
import { Modal } from "./components/Modal";
import { ContainerPokemons } from "./components/pokemon/ContainerPokemons";
import Loader from "./components/Loader";

function App() {
  /* const [league, setLeague] = useState(1);
  const changeLeague = (value) => setLeague(value);
  const teams = useGetApiFootbol(league); */

  

  return (
    /*  <div>
      <LoaderContexProvider>
        <Loader />
        <Modal />
        <Card />
      </LoaderContexProvider>
    </div>
 */
    <div>
      <>
        <Modal />        
        <LoaderContextProvider>
          <Loader />
          <ContainerPokemons />
        </LoaderContextProvider>
      </>
    </div>

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
