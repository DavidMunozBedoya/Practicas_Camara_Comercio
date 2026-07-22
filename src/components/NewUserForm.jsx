import { IconX } from "../assets/icons/tablerIcons";
import { Button } from "./Button";
import { ButtonSpan } from "./ButtonSpan";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";
import { useCreateUser } from "../hooks/useCreateUser";
import { useForm } from "react-hook-form";
import { createUserSchema } from "../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation } from "wouter";
import { inputFields } from "../helpers/inputFields";
import toast from "react-hot-toast";

export default function NewUserForm() {
   const { createUser } = useCreateUser();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid }
   } = useForm({
      mode: "all",
      resolver: yupResolver(createUserSchema),
   });

   const [, setlocation] = useLocation();
   const onSubmit = async (data) => {
      try {
         await createUser(data)
         toast.success(`Usuario creado exitosamente: ${data.name}`);
         reset();
      } catch (error) {
         toast.error(error)
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center min-h-screen bg-linear-to-br from-[#080722] via-[#161434] to-[#0c0066]">
         <div className="flex flex-col  items-center justify-center px-6 md:px-8 py-8 mx-auto lg:py-0 w-full">
            <div className="relative w-full bg-white rounded-lg z-10 max-w-2xl overflow-auto max-h-[90vh]">
               <ButtonSpan className={'absolute top-3 right-3 hover:cursor-pointer'} action={() => { setlocation("/") }} icon={<IconX />} />
               <div className="space-y-5 md:space-y-4 sm:p-8 m-7">
                  <p className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl pb-4">
                     Crear Nuevo Usuario
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                     {inputFields.map((field) => (
                        <FormInput
                           key={field.name}
                           label={field.label}
                           type={field.type}
                           name={field.name}
                           id={field.name}
                           placeholder={field.placeholder}
                           error={errors[field.name]}
                           {...register(field.name)}
                        />
                     ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                     <Checkbox
                        label="Terminos y Condiciones*"
                        id="terms"
                        name="terms"
                        error={errors.terms}
                        {...register("terms")}
                     />
                     <Button
                        disabled={!isValid}
                        type="submit"
                        text="Crear Cuenta"
                        className="min-w-full"
                     />
                  </div>
               </div>
            </div>
         </div>
      </form >
   )
}
