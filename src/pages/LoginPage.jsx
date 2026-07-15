import Form from "../components/Form";
import { Link } from "wouter";

export default function LoginPage() {
   return (
      <div className="h-screen bg-linear-to-br from-[#080722] via-[#161434] to-[#0c0066]">
         <div className="flex justify-center items-center h-full">
            <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 flex-col flex shadow-2xl/70 items-center justify-center sm:px-4">
               <div className="flex h-full flex-col justify-center gap-8 p-6">
                  <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                     <Form />
                     <div className="min-w-67.5">
                        <div className="mt-4 text-center dark:text-gray-200">
                           <h2>No tienes cuenta?</h2>
                           <Link href="/nuevo-usuario">
                              <span className="hover:text-blue-700">
                                 <strong>Crear una Cuenta</strong>
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}
