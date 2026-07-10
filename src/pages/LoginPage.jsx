import Form from "../components/Form";
import NewUserForm from "../components/NewUserForm";
import { useModalStore } from "../stores/useModalStore";

export default function LoginPage() {
   const { openModal } = useModalStore();
   return (
      <div className="py-20 bg-linear-to-br from-[#080722] via-[#161434] to-[#0c0066]">
         <div className="flex h-full items-center justify-center">
            <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 flex-col flex shadow-2xl/70 items-center justify-center sm:px-4">
               <div className="flex h-full flex-col justify-center gap-4 p-6">
                  <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                     <Form />
                     <div className="min-w-67.5">
                        <div className="mt-4 text-center dark:text-gray-200">
                           <a
                              className="text-[#080722] underline hover:text-blue-600"
                              onClick={() => openModal(<NewUserForm />)}
                           >
                              Crear cuenta aquí
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}
