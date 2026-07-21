import { AiOutlineDingtalk } from "react-icons/ai";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TbHandMove } from "react-icons/tb";

export default function PokemonDetails({ pokemon }) {

   return (
      <div className="flex flex-col items-center gap-4 p-12 relative">
         <div className="w-30 h-30 flex items-center justify-center overflow-hidden animate-bounce">
            <img
               className="w-35 h-35"
               src={pokemon.sprites.front_default}
               alt={pokemon.name}
            />
         </div>
         <h2 className="text-gray-800 text-2xl font-medium capitalize">
            {pokemon.name}
         </h2>
         <div className="flex flex-wrap gap-3 grid-cols-1 md:grid-cols-3 justify-center">
            <div className="flex items-center gap-1.5 text-blue-700 text-sm font-medium bg-blue-200 rounded-2xl border px-3 py-1.5 hover:-translate-y-0.5">
               <AiOutlineDingtalk />
               <span>{pokemon.abilities[0]?.ability?.name || 'N/A'} </span>
            </div>
            <div className="flex items-center gap-1.5 text-green-700 text-sm font-medium bg-green-200 rounded-2xl border px-3 py-1.5 hover:-translate-y-0.5">
               <TbHandMove />
               <span>{pokemon.moves[0]?.move?.name || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-orange-700 text-sm font-medium bg-orange-200 rounded-2xl border px-3 py-1.5 hover:-translate-y-0.5">
               <TbAlertTriangleFilled />
               <span>{pokemon.types[0]?.type?.name || 'N/A'}</span>
            </div>
         </div>
      </div>
   );
}
