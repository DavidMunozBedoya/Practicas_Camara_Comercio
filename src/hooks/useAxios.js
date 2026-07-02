import axios from 'axios';
import { useLoaderStore } from '../stores/useLoaderStore';

export const useAxios = (URL = 'https://pokeapi.co/api/v2/pokemon?') => {

   const { toggleLoading } = useLoaderStore();

   const get = async (params) => {
      console.log(params);
      toggleLoading(true);
      try {
         const response = await axios.get(`${URL}/${params}`, {
            headers: {
               "Content-Type": "application/json"
            }
         });

         return response.data;
      } catch (error) {
         console.log(error);
      } finally {
         toggleLoading(false);
      }
   }

   return {
      get
   }
}
