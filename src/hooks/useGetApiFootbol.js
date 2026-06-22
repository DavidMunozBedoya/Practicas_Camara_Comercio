import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function useGetApiFootbol({value}) {
  const [teams, setTeams] = useState([]);
  const urlApi = `/api/scripts/api/api.php?key=cfd19bc1c64934abdb0ca0a1570e953f&tz=Europe/Madrid&format=json&req=teams&league=${value}`;

  const getApi = useCallback(async () => {
    try {
      const res = await axios.get(urlApi);
      /* console.log("respuesta de la api ", res.data); */
      setTeams(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [urlApi, value]);

  useEffect(() => {
    getApi();
  }, [getApi]);

  return teams; 
}
