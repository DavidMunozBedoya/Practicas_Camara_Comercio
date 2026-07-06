import axios from 'axios';

export const useAxios = (baseURL = 'https://pokeapi.co/api/v2/pokemon') => {

   const get = async (params) => {

      try {
         const response = await axios.get(baseURL, {
            params,
            headers: {
               "Content-Type": "application/json"
            },
         });
        
         return response.data;

      } catch (error) {
         console.log(error);
      }
   }

   return {
      get
   }
}
