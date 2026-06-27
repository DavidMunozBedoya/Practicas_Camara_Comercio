import { AiOutlineDingtalk } from "react-icons/ai";
import { TbAlertTriangleFilled } from "react-icons/tb";

export default function PokemonDetails({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="flex flex-col items-center gap-4 p-6 relative">
      <div className="w-30 h-30 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden hover:">
        <img
          className="w-25 h-25 hover:-translate-y-1"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
      <h2 className="text-gray-800 text-2xl font-medium capitalize">
        {pokemon.name}
      </h2>
      <div className="flex gap-3 flex-wrap justify-center">
        <div className="flex items-center gap-1.5 text-white text-sm font-medium bg-blue-400  hover:bg-blue-700 rounded-2xl border px-3 py-1.5">
          <AiOutlineDingtalk />
          <span>{pokemon.abilities[0].ability.name}</span>
        </div>
        <div className="flex items-center gap-1.5 text-white text-sm font-medium bg-orange-400 hover:bg-orange-700 rounded-2xl border px-3 py-1.5">
          <TbAlertTriangleFilled />
          <span>{pokemon.types[0].type.name}</span>
        </div>
      </div>
    </div>
  );
}
