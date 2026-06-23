import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function useGetApiFootbol({ value }) {
  const [teams, setTeams] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const urlApi = `/api/scripts/api/api.php?key=cfd19bc1c64934abdb0ca0a1570e953f&tz=Europe/Madrid&format=json&req=teams&league=${value}`;

  const getApi = useCallback(async () => {
    try {
      const res = await axios.get(urlApi);
      setTeams(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingData(false);
    }
  }, [urlApi, value, isLoadingData]);

  useEffect(() => {
    getApi();
  }, [getApi]);

  return { teams, isLoadingData };
}
