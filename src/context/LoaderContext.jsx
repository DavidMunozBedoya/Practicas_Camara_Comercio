import { createContext, useState } from "react";
import Loader from "../components/Loader";

//contexto
export const LoaderContex = createContext();

//provider
export const LoaderContexProvider = ({ children }) => {
  //creo el estado
  const [isLoading, setIsLoading] = useState(true);

  //funcion para mutar el estado

  const toggleLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <LoaderContex.Provider value={{ isLoading, toggleLoading }}>
      <Loader isLoading={isLoading} />
      {children}
    </LoaderContex.Provider>
  );
};
