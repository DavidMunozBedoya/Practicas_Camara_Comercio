import { useState, createContext } from "react";
import Spinner from "../components/Spinner";
//context
export const SpinnerContext = createContext();
//provider
export const SpinnerContextProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);

   //manejador de estado
   const toggleLoading = (value) => setIsLoading(value);

   //otra forma: funcion que solo va a mutar el estado. de true a false
   /*  const toggleLoading = () => {
      setIsLoading(!isLoading);
    }; */

   return (
      <SpinnerContext.Provider value={{ isLoading, toggleLoading }}>
         <Spinner isLoading={isLoading} />
         {children}
      </SpinnerContext.Provider>
   );
};
