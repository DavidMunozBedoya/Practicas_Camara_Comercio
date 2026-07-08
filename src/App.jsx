import ContainerFootbol from "./components/footbol/ContainerFootbol";
import InputFootbol from "./components/footbol/InputFootbol";
import Spinner from "./components/Spinner";

/* import { LoaderContextProvider } from "./context/LoaderContext";
import { Modal } from "./components/Modal";
import Loader from "./components/Loader";
 */
function App() {

   return (

      <div>
         <Spinner />
         <InputFootbol />
         <ContainerFootbol />
      </div>

   );

}

export default App;
