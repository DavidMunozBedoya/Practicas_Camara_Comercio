import { Link } from "wouter";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
   return (
      <div className="flex flex-col justify-center items-center h-screen bg-linear-to-br from-[#080722] via-[#161434] to-[#0c0066]">
         <div className="flex flex-col justify-center border border-gray-500 rounded-2xl p-9 bg-white gap-2">
            <LoginForm />
            <div className="flex justify-center gap-2">
               <h2>No tienes cuenta?</h2>
               <Link href="/nuevo-usuario">
                  <span className="hover:text-blue-700">
                     <strong>Crear una Aquí!</strong>
                  </span>
               </Link>
            </div>
         </div>
      </div>
   )
}
