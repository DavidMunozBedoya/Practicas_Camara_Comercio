import { IconX } from "../assets/icons/tablerIcons";
import { Button } from "./Button";
import { ButtonSpan } from "./ButtonSpan";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { userLoginSchema } from "../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation } from "wouter";

export default function NewUserForm() {

   const {
      register,
      handleSubmit,
      formState: { errors, isValid }
   } = useForm({
      mode: "onBlur",
      resolver: yupResolver(userLoginSchema),
   });

   const [, setlocation] = useLocation();
   const onSubmit = handleSubmit((data) => {
      console.log("cuenta creada exitosamente", data);
   });

   return (
      <form onSubmit={onSubmit} className="flex justify-center items-center h-screen bg-linear-to-br from-[#080722] via-[#161434] to-[#0c0066]">
         <div className="flex flex-col  items-center justify-center px-6 md:px-8 py-8 mx-auto lg:py-0">
            <div className="relative w-full bg-white rounded-lg">
               <ButtonSpan className={'absolute top-3 right-3 hover:cursor-pointer'} action={() => { setlocation("/") }} icon={<IconX />} />
               <div className="space-y-5 md:space-y-4 sm:p-8 m-7">
                  <p className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl pb-4">
                     Nuevo Usuario
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                     <FormInput
                        label="Nombres*"
                        type="name"
                        name="name"
                        placeholder="Juan Carlos"
                        id="name"
                        error={errors.name}
                        {...register("name")}
                     />
                     <FormInput
                        label="Correo*"
                        type="email"
                        name="email"
                        placeholder="ejemplo@correo.com"
                        id="email"
                        error={errors.email}
                        {...register("email")}
                     />
                     <FormInput
                        label="Contraseña*"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        id="password"
                        error={errors.password}
                        {...register("password")}
                     />
                     <FormInput
                        label="Confirma tu Contraseña*"
                        type="password"
                        name="passwordConfirm"
                        placeholder="••••••••"
                        id="passwordConfirm"
                        error={errors.passwordConfirm}
                        {...register("passwordConfirm")}
                     />
                  </div>
                  <Button
                     disabled={!isValid}
                     type="submit"
                     text="Crear Cuenta"
                  />
               </div>
            </div>
         </div>
      </form >
   )
}
