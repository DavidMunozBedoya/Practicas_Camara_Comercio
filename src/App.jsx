import { Modal } from "./components/Modal";
import Loader from "./components/Loader";
import { AppRouter } from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";

function App() {

   return (
      <div>
         <Modal />
         <Toaster />
         <Loader />
         <AppRouter />
      </div>
   );
}

export default App;