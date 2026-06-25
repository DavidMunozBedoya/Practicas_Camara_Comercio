import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
/* import { SpinnerContext } from "../context/SpinnerContext"; */
import { useLoaderStore } from "../stores/useLoaderStore";

const API_KEY = "cfd19bc1c64934abdb0ca0a1570e953f";
const URL = "/api/scripts/api/api.php";

export function useGetApiFootbol(league) {
  const [teams, setTeams] = useState([]);
  // const { toggleLoading } = useContext(SpinnerContext);
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
      console.log(res.data.team);
      setTeams(res.data.team);
    } catch (error) {
      console.error(error);
    } finally {
      toggleLoading(false);
    }
  }), 
  useEffect(() => {
    getApi();
  }, [league]);

  return teams;
}
