import { useLoaderStore } from "../stores/useLoaderStore";

export default function Loader() {

   const { isLoading } = useLoaderStore();
   if (!isLoading) return;

   return (
      <div>
         <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full size-20 border-7 border-blue-500 border-t-transparent"></div>
         </div>
      </div>
   );
}
