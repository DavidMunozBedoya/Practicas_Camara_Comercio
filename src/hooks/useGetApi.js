import axios from "axios";
import { useState, useEffect, useCallback, useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=";

export function useGetApi(limit) {
  const URL_API = `${URL}${limit}`;
  const [pokemons, setPokemons] = useState([]);
  const { toggleLoading } = useContext(LoaderContext);

  const getApi = useCallback(async () => {
    toggleLoading(true);
    try {
      //consulto la api para obtener datos
      const response = await axios.get(URL_API);
      //consulto los detalles de cada pokemon y los mapeo para extraerlo
      const pokemonDetails = await Promise.all(
        response.data.results.map((pokemon) => axios.get(pokemon.url)),
      );
      //actualizo el estado con los detalles de cada pokemón
      setPokemons(pokemonDetails.map((res) => res.data));
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

  return pokemons;
}
