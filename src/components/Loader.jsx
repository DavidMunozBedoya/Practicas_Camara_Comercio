import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

export default function Loader() {

   const { isLoading } = useContext(LoaderContext);
   if (!isLoading) return;

   return (
      <div>
         <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-5 border-blue-500 border-t-transparent"></div>
         </div>
      </div>
   );
}
