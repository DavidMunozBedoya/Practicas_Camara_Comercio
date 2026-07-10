import { Button } from "./Button";
import { useAuthStore } from "../stores/useAuthStore";

export default function Form() {
   const { toggleAuth } = useAuthStore()
   return (
      <form>
         <h1 className="mb-4 text-2xl text-center font-bold  dark:text-white">Bienvenido!</h1>
         <div>
            <div className="mb-2">
               <label
                  className="text-sm font-medium text-[#0c0066] dark:text-gray-300"
                  htmlFor="email"
               >
                  Correo:
               </label>
            </div>
            <div className="flex w-full rounded-lg pt-1">
               <div className="relative w-full">
                  <input
                     className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                     id="email"
                     type="email"
                     name="email"
                     placeholder="email@ejemplo.com"
                     required
                  />
               </div>
            </div>
         </div>
         <div>
            <div className="mb-2">
               <label
                  className="text-sm font-medium text-[#0c0066] dark:text-gray-300"
                  data-testid="flowbite-label"
                  htmlFor="password"
               >
                  Contraseña
               </label>
            </div>
            <div className="flex w-full rounded-lg pt-1">
               <div className="relative w-full">
                  <input
                     className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                     id="password"
                     type="password"
                     name="password"
                     required
                  />
               </div>
            </div>
            <p className="mt-2 cursor-pointer text-[#0c0066] hover:text-blue-600">
               Olvidaste tu contraseña?
            </p>
         </div>
         <div className="flex justify-center items-center">
            <Button
               action={() => toggleAuth(true)}
               text="Iniciar sesión"
               className={'bg-[#0c0066] text-white font-bold p-2 w-2xs border border-sky-950 rounded-2xl cursor-pointer hover:text-cyan-500 >'} />
         </div>
      </form>
   )
}
