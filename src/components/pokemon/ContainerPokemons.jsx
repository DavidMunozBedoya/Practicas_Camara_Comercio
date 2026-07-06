import Card from "./Card";
import PokemonDetails from "./PokemonDetails";
import { Pagination } from "../Pagination";
import { Button } from "../Button";
import { useGetApi } from "../../hooks/useGetApi";
import useControlPagination from "../../hooks/useControlPagination";
import { useModalStore } from "../../stores/useModalStore";
import { IconBack, IconNext } from "../../assets/icons/tablerIcons";

export const ContainerPokemons = () => {

   const { allPokemons, totalPages } = useGetApi();
   const { clickNextPage, clickPrevPage, page, startIndex, endIndex } = useControlPagination(totalPages);
   const { openModal } = useModalStore();
   const pokemonXSection = allPokemons.slice(startIndex, endIndex);

   return (
      <div>
         <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 px-5 py-5">
            {pokemonXSection.map((pokemon) => (
               <Card
                  key={pokemon?.id}
                  pokemon={pokemon}
                  action={() => openModal(<PokemonDetails pokemon={pokemon} />)}
               />
            ))}
         </div>
         <Pagination currentPage={page} totalPages={totalPages}>
            {page < totalPages && (
               <Button action={clickNextPage} icon={<IconNext />} className="fixed top-1/2 right-1 transform -translate-y-1/2 text-gray-500" />
            )}
            {page > 1 && (
               <Button action={clickPrevPage} icon={<IconBack />} className="fixed top-1/2 left-1 transform -translate-y-1/2 text-gray-500" />
            )}
         </Pagination>
      </div>
   );
};
