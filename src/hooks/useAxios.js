import axios from 'axios';

export const useAxios = (baseURL = 'https://pokeapi.co/api/v2/pokemon') => {

   const get = async (params) => {
      console.log('llamada a axios')

      try {
         const response = await axios.get(baseURL, {
            params,
            headers: {
               "Content-Type": "application/json"
            },
         });
         /* console.log('respuesta axios: ', response.data); */
         return response.data;

      } catch (error) {
         console.log(error);
      }
   }

   return {
      get
   }
}
