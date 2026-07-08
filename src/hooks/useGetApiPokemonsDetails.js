import { useAxios } from "./useAxios";
import { useState, useEffect, useCallback } from "react";


export function useGetApiPokemonDetails(params){
   
   const [details, setDetails] = useState(null);
   const { get } = useAxios();

   const getPokemon = useCallback(async () => {
      try{
         const response = await get(params);
         setDetails(response.data);
      } catch (error) {
         console.log(error);
      }      

      
   }, [params]);

   useEffect(() => {
     getPokemon();
   }, [params]);

   return details;

};