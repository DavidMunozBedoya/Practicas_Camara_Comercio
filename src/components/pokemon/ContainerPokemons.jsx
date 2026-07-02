import Card from "./CardPokemon";
import { useModalStore } from "../../stores/useModalStore";
import PokemonDetails from "./PokemonDetails";
import { useGetApi } from "../../hooks/useGetApi";

export const ContainerPokemons = () => {
   const pokemons = useGetApi("limit=100");
   const { openModal } = useModalStore();

   return (
      <div className="">
         <div className="text-center my-8">
            <h1 className="text-5xl font-medium tracking-tight">Pokédex</h1>
            <p className="text-sm text-gray-400 mt-1">
               Selecciona un Pokémon para ver sus detalles
            </p>
         </div>

         <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 px-5 py-5">
            {pokemons.map((pokemon) => (
               <Card
                  key={pokemon?.id}
                  pokemon={pokemon}
                  action={() => openModal(<PokemonDetails pokemon={pokemon} />)}
               />
            ))}
         </div>
      </div>
   );
};
