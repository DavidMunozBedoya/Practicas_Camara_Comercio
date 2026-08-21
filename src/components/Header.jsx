import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ButtonSpan } from "./ButtonSpan";
import { IconLogout, IconMenu, IconUp } from "../assets/icons/tablerIcons";
import { useAuthStore } from "../stores/useAuthStore";
import { useMenuStore } from "../stores/useMenuStore";
import ToastConfirm from "./ToastConfirm";

export default function Header({ children }) {

   const { toggleAuth } = useAuthStore();
   const { isOpen, toggleOpen } = useMenuStore();
   const [location, navigate] = useLocation();

   useEffect(() => {
      navigate("/calendario");
   }, []);
   console.log(isOpen);

   return (
      <div>
         <header className="fixed top-0 left-0 w-full z-10 py-0.5 bg-[#161434]">
            {
               !isOpen ?
                  <div className="flex justify-center">
                     <button className="text-white" onClick={() => { toggleOpen() }}>
                        <IconMenu />
                     </button>
                  </div> :
                  <div>
                     <nav className="flex flex-col text-xs md:text-sm md:flex-row justify-center items-center top-0 left-0 gap-3 my-2">
                        <Link href="/pokemon">
                           <span className="text-gray-500 hover:text-white">Pokémon</span>
                           {location.includes("/pokemon") && <div className="bg-amber-400 w-full h-1 animate-pulse rounded-full" />}
                        </Link>
                        <Link href="/futbol">
                           <span className="text-gray-500 hover:text-white">Fútbol</span>
                           {location.includes("/futbol") && <div className="bg-blue-600 w-full h-1 animate-pulse rounded-full" />}
                        </Link>
                        <Link href="/calendario">
                           <span className="text-gray-500 hover:text-white">Calendario</span>
                           {location.includes("/calendario") && <div className="bg-green-600 w-full h-1 animate-pulse rounded-full " />}
                        </Link>
                        <div className="fixed top-6 right-6">
                           <ButtonSpan action={() => ToastConfirm({ onConfirm: () => toggleAuth(false), text: "¿Desea cerrar sesión?" })}
                              className={'hover:cursor-pointer text-gray-500 hover:text-[#080722] '}
                              icon={<IconLogout />} />
                        </div>

                     </nav>
                     <div className="flex justify-center">
                        <button className="text-white" onClick={() => { toggleOpen() }}>
                           <IconUp />
                        </button>
                     </div>
                  </div>


            }
         </header>
         {children}
      </div>
   )
}