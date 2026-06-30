import axios from "axios";
import { useState, useEffect, useCallback, useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

const URL = "https://pokeapi.co/api/v2/pokemon/?";

export function useGetApi(limit) {
   const URL_API = `${URL}${limit}`;
   const [pokemons, setPokemons] = useState([]);
   const { toggleLoading } = useContext(LoaderContext);

   const getApi = useCallback(async () => {
      toggleLoading(true);
      try {
         const response = await axios.get(URL_API);
         //consulto los detalles de cada pokemon y los mapeo para extraerlo
         const pokemonDetails = await Promise.all(
            response.data.results.map((pokemon) => axios.get(pokemon.url)),
         );
         setPokemons(pokemonDetails.map((res) => res.data));
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   }, [URL_API]);

   useEffect(() => {
      getApi();
   }, [getApi]);

   return pokemons;
}
