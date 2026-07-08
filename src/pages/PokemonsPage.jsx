import Card from "../components/pokemon/Card";
import PokemonDetails from "../components/pokemon/PokemonDetails";
import { Pagination } from "../components/Pagination";
import { Button } from "../components/Button";
import { useGetApi } from "../hooks/useGetApi";
import useControlPagination from "../hooks/useControlPagination";
import { useModalStore } from "../stores/useModalStore";
import { IconBack, IconNext } from "../assets/icons/tablerIcons";

export const PokemonsPage = () => {

   const { allPokemons, totalPages } = useGetApi();
   const { clickNextPage, clickPrevPage, page, pokemonXSection } = useControlPagination(allPokemons);
   const { openModal } = useModalStore();

   return (
      <div className="pt-24">
         <div className="text-center">
            <h1 className="text-5xl font-medium tracking-tight">Pokédex</h1>
            <p className="text-sm text-gray-400 mt-1">
               Selecciona un Pokémon para ver sus detalles
            </p>
         </div>
         <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 p-20">
            {pokemonXSection.map((pokemon) => (
               <Card
                  key={pokemon?.id}
                  pokemon={pokemon}
                  action={() => openModal(<PokemonDetails pokemon={pokemon} />)}
               />
            ))}
         </div>
         <Pagination currentPage={page} totalPages={totalPages}>
            <Button action={() => clickNextPage(totalPages)}
               icon={<IconNext />}
               className={`${page == totalPages ? 'hidden' : 'fixed top-1/2 right-1 transform -translate-y-1/2 text-gray-500'}`} />
            <Button action={clickPrevPage}
               icon={<IconBack />}
               className={`${page == 1 ? 'hidden' : 'fixed top-1/2 left-1 transform -translate-y-1/2 text-gray-500'}`} />
         </Pagination>
      </div>
   );
}