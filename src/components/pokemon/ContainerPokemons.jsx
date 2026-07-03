import Card from "./CardPokemon";
import { useModalStore } from "../../stores/useModalStore";
import PokemonDetails from "./PokemonDetails";
import Pagination from "../Pagination";
import { useGetApi } from "../../hooks/useGetApi";
import { useState, useLayoutEffect } from "react";

export const ContainerPokemons = () => {
   const { openModal } = useModalStore();
   const [page, setPage] = useState(1);
   const [pokemonPage, setPokemonPage] = useState([]);
   const [startIndex, setStartIndex] = useState(0);
   const [endIndex, setEndIndex] = useState(21);


   const { allPokemons, totalPages } = useGetApi();

   const clickNextPage = () => {
      if (page >= totalPages) return;
      setPage(page + 1);
      setStartIndex(startIndex + 21)
      setEndIndex(endIndex + 21)
   };
   const clickPrevPage = () => {
      if (page <= 1) return;
      setPage(page - 1);
      setStartIndex(startIndex - 21);
      setEndIndex(endIndex - 21);
   }

   useLayoutEffect(() => {
      setPokemonPage(allPokemons.slice(startIndex, endIndex));
   }, [startIndex, endIndex, allPokemons])

   return (
      <div className="">
         <div className="text-center">
            <h1 className="text-5xl font-medium tracking-tight">Pokédex</h1>
            <p className="text-sm text-gray-400 mt-1">
               Selecciona un Pokémon para ver sus detalles
            </p>
         </div>

         <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 px-5 py-5">
            {pokemonPage.map((pokemon) => (
               <Card
                  key={pokemon?.id}
                  pokemon={pokemon}
                  action={() => openModal(<PokemonDetails pokemon={pokemon} />)}
               />
            ))}
         </div>
         <div>
            <Pagination currentPage={page} totalPages={totalPages} actions={{ clickPrevPage, clickNextPage }} />
         </div>
      </div>
   );
};
