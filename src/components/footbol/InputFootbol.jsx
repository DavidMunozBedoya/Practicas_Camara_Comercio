import { useFootbolLeagueStore } from "../../stores/useFootbolLeagueStore";

export default function InputFootbol() {
   const { league, changeLeague } = useFootbolLeagueStore();

   return (
      <div className="flex flex-col justify-center items-center md:justify-center md:items-start gap-1.5 m-3">
         <div className="relative">
            <select
               id="league-select-min"
               name="selectedLeague"
               defaultValue={league}
               onChange={(e) => changeLeague(e.target.value)}
               className="w-full appearance-none border rounded-lg hover:bg-gray-200 p-2 text-base font-semibold text-blue-950 outline-none transition-colors cursor-pointer pr-10 focus:ring-2 focus:ring-slate-300"
            >
               <option value="1">Liga 1</option>
               <option value="2">Liga 2</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-blue-950/70">
               <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M19 9l-7 7-7-7"
                  />
               </svg>
            </div>
         </div>
      </div>
   );
}
