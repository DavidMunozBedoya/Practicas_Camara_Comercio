import { LoaderContextProvider } from "./context/LoaderContext";
import { Modal } from "./components/Modal";
import { ContainerPokemons } from "./components/pokemon/ContainerPokemons";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { Router, Route, Link } from 'wouter';
import CardFootbolAll from "./components/footbol/CardFootbolAll";
import InputFootbol from "./components/footbol/InputFootbol";

function App() {

   return (
      <Router>
         <nav className="flex justify-center top-0 gap-3 my-2.5">
            <Link href="/pokemons">
               Pokémons
            </Link>
            <Link href="/futbol">
               Fútbol
            </Link>
         </nav>

         <Route path='/pokemons'>
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
         </Route>
      </Router>



   );

}

export default App;
