import { useState } from "react";

export default function Count() {
   const [count, setCount] = useState(0);

   function handleClickAdd() {
      setCount(count + 1);
   }
   function handleClickLess() {
      /* if(count > 0){
          setCount(count - 1);
      } */
      {
         count > 0 && setCount(count - 1);
      }
   }
   return (
      <div className="flex">
         <div className="px-2.5 ">
            <h1 className="text-black font-black ">{count}</h1>
         </div>
         <div className="grid grid-cols-2 gap-2">
            <button className="bg-blue-500 text-4xl my-1 text-white rounded-3xl" onClick={handleClickAdd}>
               +
            </button>
         </div>
         <div>
            <button className="bg-red-500 text-4xl my-1 text-white rounded-3xl" onClick={handleClickLess}>
               -
            </button>
         </div>
      </div>
   );
}
