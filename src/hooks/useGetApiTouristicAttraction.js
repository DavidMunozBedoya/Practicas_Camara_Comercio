import axios from "axios";
import { useLoaderStore } from "../stores/useLoaderStore";
import { urlPool } from "../helpers/urlPool";
import { useEffect, useState } from "react";

export function useGetApiTouristicAttraction(id) {
   const [item, setItem] = useState([]);
   const { toggleLoading } = useLoaderStore();

   useEffect(() => {
      const fetchData = async (id) => {
         toggleLoading(true);

         try {
            const res = await axios.get(`${urlPool.urlTouristicAttraction}/${encodeURIComponent(id)}`);
            console.log(res.data);
            setItem(res.data);
         } catch (error) {
            console.log(error)
         } finally {
            toggleLoading(false);
         }
      };
      fetchData(id);
   }, [toggleLoading, id])

   return item;
}