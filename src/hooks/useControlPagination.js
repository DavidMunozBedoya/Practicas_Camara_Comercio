import { useState } from "react";

export default function useControlPagination(totalPages) {

   const [page, setPage] = useState(1);
   const [startIndex, setStartIndex] = useState(0);
   const [endIndex, setEndIndex] = useState(21);

   const clickNextPage = () => {

      if (page >= totalPages) return;
      setPage(page + 1);
      setStartIndex(startIndex + 21)
      setEndIndex(endIndex + 21)

      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });

   }

   const clickPrevPage = () => {

      if (page <= 1) return;
      setPage(page - 1);
      setStartIndex(startIndex - 21);
      setEndIndex(endIndex - 21);
      
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });

   }
   return { clickNextPage, clickPrevPage, page, startIndex, endIndex }
}
