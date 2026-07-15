import { Button } from "./Button";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../stores/useAuthStore";
import { toast } from "react-hot-toast";


export default function ReactHookForm() {
   const { register, handleSubmit } = useForm();
   const { toggleAuth } = useAuthStore();

   const onSubmit = handleSubmit((data) => {
      toggleAuth(true);
      toast.success(`Bienvenido! ${data.email}`)
      console.log(data);
   });

   return (
      <form onSubmit={onSubmit} className="space-y-5">
         <h1 className="text-2xl font-bold text-center">Bienvenido!</h1>
         <FormInput
            label="Correo:"
            type="email"
            placeholder="email@test.com"
            name="email"
            id="email"
            required={true}
            {...register("email")}
         />
         <FormInput
            label="Contraseña:"
            type="password"
            placeholder="**********"
            name="password"
            id="password"
            required={true}
            {...register("password")}
         />
         <div className="space-x-1">
            <input
               type="checkbox"
               name="terminos"
               id="terminos"
               {...register("terminos")} />
            <span className="text-red-600">
               Terminos y condiciones
            </span>
         </div>
         <div className="flex justify-center my-3">
            <Button
               type="submit"
               className={'bg-[#0c0066] text-white font-bold p-2 w-2xs rounded-lg cursor-pointer hover:bg-blue-700 >'}
               text="Iniciar Sesión"
            />
         </div>
      </form>
   )
}
