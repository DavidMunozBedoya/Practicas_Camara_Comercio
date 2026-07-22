import { Button } from "./Button";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../stores/useAuthStore";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../schemas/loginSchema";

export default function ReactHookForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid }
   } = useForm({
      mode: "all",
      resolver: yupResolver(userLoginSchema)
   });

   const { toggleAuth } = useAuthStore();

   const onSubmit = handleSubmit((data) => {
      toggleAuth(true);
      console.log(data);
      toast.success(`Bienvenido!`);
   });

   return (
      <form onSubmit={onSubmit} className="space-y-4">
         <h1 className="text-2xl font-bold text-center">Bienvenido!</h1>
         <FormInput
            label="Correo *"
            type="email"
            placeholder="email@test.com"
            name="email"
            id="email"
            error={errors.email}
            {...register("email")}
         />
         <FormInput
            label="Contraseña*"
            type="password"
            placeholder="**********"
            name="password"
            id="password"
            error={errors.password}
            {...register("password")}
         />
         <Button
            disabled={!isValid}
            text="Iniciar Sesión"
            className="flex justify-center min-w-full"
         />
      </form>
   )
}
