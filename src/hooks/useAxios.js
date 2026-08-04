import axios from 'axios';
import { urlPool }  from '../helpers/urlPool';
// import { useLoaderStore } from '../stores/useLoaderStore';

export const useAxios = () => {
   // const { toggleLoading } = useLoaderStore();

   const get = async (params) => {
      /* toggleLoading(true); */
      try {
         const response = await axios.get(urlPool.urlPokemons, {
            params,
            headers: {
               "Content-Type": "application/json"
            },
         });
        
         return response.data;

      } catch (error) {
         console.log(error);
      } /* finally{
         toggleLoading(false);
      } */
   }

   return {
      get
   }
}
