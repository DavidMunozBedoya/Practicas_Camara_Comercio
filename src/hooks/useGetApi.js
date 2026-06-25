import axios from "axios";
import { useState, useEffect, useCallback, useContext } from "react";
import { LoaderContex } from "../context/LoaderContext";

export function useGetApi(limit = 20) {
  const [pokemon, setPokemon] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=";
  const { toggleLoading } = useContext(LoaderContex);  

  const getApi = useCallback(async () => {

    toggleLoading(true);
    try {
      //consulto la api para obtener datos
      const response = await axios.get(`${URL}${limit}`);
      //consulto los detalles de cada pokemon y los mapeo para extraerlo
      const pokemonDetails = await Promise.all(
        response.data.results.map((pokemon) => axios.get(pokemon.url)),
      );

      //actualizo el estado con los detalles de cada pokemón
      setPokemon(pokemonDetails.map((res) => res.data));
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoading(false);
    }
  }, [limit]);

  // solo se encarga de llamar la función
  useEffect(() => {
    getApi();
  }, [getApi]);

  return pokemon;
}
