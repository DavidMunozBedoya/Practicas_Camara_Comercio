import { useMemo, useRef, useState } from "react";

const LIMIT = 20;

export default function useControlPagination(allPokemons) {

   const [page, setPage] = useState(1);
   const currentIndex = useRef(0);

   const clickNextPage = (totalPages) => {
      if (page >= totalPages) return;
      setPage(page + 1);
      currentIndex.current += LIMIT;
   }

   const clickPrevPage = () => {
      if (page <= 1) return;
      setPage(page - 1);
      currentIndex.current -= LIMIT;
   }

   const pokemonXSection = useMemo(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return allPokemons.slice(currentIndex.current, (currentIndex.current + LIMIT));
   }, [allPokemons, currentIndex.current]);

   return { clickNextPage, clickPrevPage, page, pokemonXSection }
}
