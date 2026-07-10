import { Button } from "./Button";

export default function NewUserForm() {
   return (
      <form className="fixed">
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <p className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                     Creemos tu Usuario
                  </p>
                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-900">
                        Tu Correo
                     </label>
                     <input
                        placeholder="ejemplo@email.com"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        id="username"
                        type="email"
                     />
                  </div>
                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-900">
                        Crea una Contraseña
                     </label>
                     <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        placeholder="••••••••"
                        id="password"
                        type="password"
                     />
                  </div>
                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-900">
                        Confirma tu Contraseña
                     </label>
                     <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        placeholder="••••••••"
                        id="confirmPassword"
                        type="password"
                     />
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                     type="submit"
                     text="Crear Cuenta"
                  />
               </div>
            </div>
         </div>
      </form>

   )
}
