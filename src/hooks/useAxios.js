import axios from 'axios';
import { useLoaderStore } from '../stores/useLoaderStore';

export const useAxios = (baseURL = 'https://pokeapi.co/api/v2/pokemon') => {
   const { toggleLoading } = useLoaderStore();

   const get = async (params) => {
      toggleLoading(true);
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
      } finally{
         toggleLoading(false);
      }
   }

   return {
      get
   }
}
