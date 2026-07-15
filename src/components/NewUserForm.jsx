import { Button } from "./Button";
import FormInput from "./FormInput";

export default function NewUserForm() {

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit")
   }

   return (
      <form onSubmit={handleSubmit} className="flex justify-center items-center h-screen bg-linear-to-br from-[#080722] via-[#161434] to-[#0c0066]">
         <div className="flex flex-col items-center justify-center px-6 md:px-8 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg">
               <div className="space-y-5 md:space-y-4 sm:p-8 m-7">
                  <p className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl pb-4">
                     Nuevo Usuario
                  </p>
                  <FormInput
                     label="Correo"
                     type="email"
                     name="email"
                     placeholder="ejemplo@correo.com"
                     id="username"
                     required={true}
                  />
                  <div>
                     <FormInput
                        label="Contraseña"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        id="password"
                        required={true}
                     />
                  </div>
                  <div>
                     <FormInput
                        label="Confirma tu Contraseña"
                        type="password"
                        name="confirmPassword"
                        placeholder="••••••••"
                        id="confirmPassword"
                        required={true}
                     />
                  </div>
                  <Button
                     type="submit"
                     text="Crear Cuenta"
                     className={'bg-[#0c0066] text-white font-bold p-2 w-2xs rounded-lg cursor-pointer hover:bg-blue-700 >'}
                  />
               </div>
            </div>
         </div>
      </form>

   )
}
