import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export function useGetApi(limit = 21) {
  const [pokemon, setPokemon] = useState([]);

  const getApi = useCallback(async () => {
    try {
      //consulto la api para obtener datos
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
      );
      /* console.log("primer consumo: ", response.data); */ // esta respuesta solo trae la url de cada pokemón

      //consulto los detalles de cada pokemon y los mapeo para extraerlo
      const pokemonDetails = await Promise.all(
        response.data.results.map((pokemon) => axios.get(pokemon.url)),
      );

      //actualizo el estado con los detalles de cada pokemón
      setPokemon(pokemonDetails.map((res) => res.data));
    } catch (error) {
      console.log(error);
    }
  }, [limit]);

  // solo se encarga de llamar la función 
  useEffect(() => {
    getApi();
  }, [getApi]);

  return pokemon;
}
