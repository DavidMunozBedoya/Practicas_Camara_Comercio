import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ButtonSpan } from "./ButtonSpan";
import { IconLogout } from "../assets/icons/tablerIcons";
import { useAuthStore } from "../stores/useAuthStore";
import ToastConfirm from "./ToastConfirm";

export default function Header({ children }) {

   const { toggleAuth } = useAuthStore();
   const [location, navigate] = useLocation();

   useEffect(() => {
      navigate("/pokemon");
   }, []);

   return (
      <div>
         <header className="fixed top-0 left-0 w-full z-10 bg-white py-5">
            <nav className="flex justify-center items-center top-0 left-0 gap-3 my-2.5">
               <Link href="/pokemon">
                  <span className="text-gray-500 hover:text-black">Pokémon</span>
                  {location.includes("/pokemon") && <div className="bg-amber-400 w-full h-1 animate-pulse rounded-full" />}
               </Link>
               |
               <Link href="/futbol">
                  <span className="text-gray-500 hover:text-black">Fútbol</span>
                  {location.includes("/futbol") && <div className="bg-blue-600 w-full h-1 animate-pulse rounded-full" />}
               </Link>
               <div className="fixed right-6">
                  <ButtonSpan action={() => ToastConfirm({ onConfirm: () => toggleAuth(false), text: "¿Desea cerrar sesión?" })}
                     className={'hover:cursor-pointer text-gray-500 hover:text-[#080722] '}
                     icon={<IconLogout />} />
               </div>
            </nav>
         </header>
         {children}
      </div>
   )
}