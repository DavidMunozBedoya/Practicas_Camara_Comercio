import { Modal } from "./components/Modal";
import Loader from "./components/Loader";
import { AppRouter } from "./routes/AppRouter";

function App() {

   return (
      <div>
         <Modal />
         <Loader />
         <AppRouter />
      </div>
   );
}

export default App;
