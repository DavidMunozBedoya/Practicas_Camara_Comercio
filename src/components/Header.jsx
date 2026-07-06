export default function Header() {
   return (
      <header className="fixed top-0 left-0 w-full z-50 bg-white py-5">
         <div className="text-center">
            <h1 className="text-5xl font-medium tracking-tight">Pokédex</h1>
            <p className="text-sm text-gray-400 mt-1">
               Selecciona un Pokémon para ver sus detalles
            </p>
         </div>
      </header>

   )
}
