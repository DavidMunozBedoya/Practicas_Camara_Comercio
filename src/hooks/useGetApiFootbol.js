import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import { useLoaderStore } from "../stores/useLoaderStore";

const API_KEY = "cfd19bc1c64934abdb0ca0a1570e953f";
const URL = "/api/scripts/api/api.php";

export function useGetApiFootbol(league) {
   const [teams, setTeams] = useState([]);
   const { toggleLoading } = useLoaderStore();

   const getApi = useCallback(async () => {
      toggleLoading(true);
      try {
         const res = await axios.get(URL, {
            params: {
               key: API_KEY,
               tz: "Europe/Madrid",
               format: "json",
               req: "teams",
               league: league
            }
         });
         setTeams(res.data.team);
      } catch (error) {
         console.error(error);
      } finally {
         toggleLoading(false);
      }
   }, [league, toggleLoading]);

   useEffect(() => {
      getApi();
   }, [getApi]);

   return teams;
}
