import axios from 'axios';
import { useLoaderStore } from '../stores/useLoaderStore';

export const useAxios = (URL = 'https://pokeapi.co/api/v2/pokemon') => {
   const { toggleLoading } = useLoaderStore();

   const get = async (params = '', customURL = null) => {
      toggleLoading(true);
      try {
         // Si la petición viene con una URL directa completa (como la de los detalles del Pokémon), la usamos.
         // De lo contrario, usamos la URL base del Hook.
         const targetURL = customURL || URL;

         // Configuramos Axios de manera limpia utilizando su propiedad nativa 'params'
         const config = {
            headers: {
               "Content-Type": "application/json"
            }
         };

         if (params) {
            // Si pasas un string tipo "limit=200", lo convertimos en un objeto para Axios
            if (typeof params === 'string') {
               config.params = Object.fromEntries(new URLSearchParams(params));
            } else {
               config.params = params;
            }
         }

         const response = await axios.get(targetURL, config);
         return response.data;
      } catch (error) {
         console.error("Error en la petición centralizada:", error);
         throw error; // Lanzamos el error para que el Hook específico sepa si falló algo
      } finally {
         toggleLoading(false);
      }
   }

   return { get };
}
