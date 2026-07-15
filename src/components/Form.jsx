import { Button } from "./Button";
import { useAuthStore } from "../stores/useAuthStore";
import FormInput from "./FormInput";
import toast from "react-hot-toast";

export default function Form() {
   const { toggleAuth } = useAuthStore()

   const handleSubmit = (event) => {
      event.preventDefault()
      toggleAuth(true);
      toast.success("Bienvenido!")
   }

   return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
         <h1 className="mb-3 text-2xl text-center font-bold  dark:text-white">Bienvenido!</h1>
         <FormInput
            label="Correo"
            type="email"
            placeholder="email@correo.com"
            name="emailForm"
            id="emailForm"
            required={true}
         />
         <FormInput
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            name="passwordForm"
            id="PasswordForm"
            required={true}
         />
         <div className="flex justify-center items-center my-3">
            <Button
               type="submit"
               text="Iniciar sesión"
               className={'bg-[#0c0066] text-white font-bold p-2 w-2xs rounded-lg cursor-pointer hover:bg-blue-700 >'} />
         </div>
      </form>
   )
}