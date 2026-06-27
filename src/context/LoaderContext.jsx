import { createContext, useState } from "react";
import Loader from "../components/Loader";

//contexto
export const LoaderContext = createContext();

//provider
export const LoaderContextProvider = ({ children }) => {
   //creo el estado
   const [isLoading, setIsLoading] = useState(true);

   //funcion para mutar el estado

   const toggleLoading = (value) => {
      setIsLoading(value);
   };

   return (
      <LoaderContext.Provider value={{ isLoading, toggleLoading }}>
         <Loader />
         {children}
      </LoaderContext.Provider>
   );
};
