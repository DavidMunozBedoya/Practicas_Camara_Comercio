import { useAxios } from './useAxios';
import axios from 'axios';
import { useState, useEffect, useCallback } from "react";
import { LoaderContext } from '../context/LoaderContext';
import { useContext } from 'react';

const limitPokemons = 21;

export function useGetApi() {

   const [allPokemons, setAllPokemons] = useState([]);
   const [totalPages, setTotalPages] = useState(0);
   const { get } = useAxios();
   const { toggleLoading } = useContext(LoaderContext);

   const getApi = useCallback(async () => {

      toggleLoading(true);
      try {
         const response = await get({ limit: 1350 });

         setTotalPages(Math.ceil(response.count / limitPokemons));

         const pokemonDetails = await Promise.all(
            response.results.map((pokemon) => axios.get(pokemon.url)),
         );
         setAllPokemons(pokemonDetails.map((res) => res.data));

      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      };
   }, []);

   useEffect(() => {
      getApi();
   }, [getApi]);

   return { allPokemons, totalPages };
}
