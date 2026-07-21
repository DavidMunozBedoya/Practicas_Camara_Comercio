import { useState } from "react";
import { useGetApi } from "../../hooks/useGetApi";
import Card from "./CardPokemon";

export const ContainerPokemons = () => {
   const [limit, setLimit] = useState(35);
   const pokemons = useGetApi(limit);
   return (
      <div>
         <div className="text-center my-8">
            <h1 className="text-5xl font-medium tracking-tight">Pokédex</h1>
            <p className="text-sm text-gray-400 mt-1">
               Selecciona un Pokémon para ver sus detalles
            </p>
         </div>

         <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 lg:grid-cols-6">
            {pokemons.map((pokemon) => <Card pokemon={pokemon} />)}
         </div>
      </div>
   )
}