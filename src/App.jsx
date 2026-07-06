import { LoaderContextProvider } from "./context/LoaderContext";
import { Modal } from "./components/Modal";
import { ContainerPokemons } from "./components/pokemon/ContainerPokemons";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  
   return (
     
      <div>
         <Modal />
         <LoaderContextProvider>
            <Header />
            <main className="p-25">
               <Loader />
               <ContainerPokemons />
            </main>
         </LoaderContextProvider>
      </div>
 
   );

}

export default App;
