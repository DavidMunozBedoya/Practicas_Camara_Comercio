import { Link, useLocation } from "wouter";

export default function Header({ children }) {

   const [location] = useLocation();

   return (
      <div>
         <header className="fixed top-0 left-0 w-full z-10 bg-white py-5">
            <nav className="flex justify-center items-center top-0 left-0 gap-3 my-2.5">
               <Link href="/pokemon">
                  <span>Pokémon</span>
                  {location.includes("/pokemon") && <div className="bg-amber-400 w-full h-1 animate-pulse" />}
               </Link>
               |
               <Link href="/futbol">
                  <span>Fútbol</span>
                  {location.includes("/futbol") && <div className="bg-blue-600 w-full h-1 animate-pulse" />}
               </Link>
            </nav>
         </header>

         {children}
      </div>
   )
}