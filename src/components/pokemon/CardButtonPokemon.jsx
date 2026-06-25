import { useState } from "react";
import { useGetApi } from "../../hooks/useGetApi";

export default function Card() {
  const [idActual, setIdActual] = useState(0);
  const pokemons = useGetApi();

  //funcion para avanzar
  const handleNext = () => {
    if (idActual < pokemons.length - 1) {
      setIdActual(idActual + 1);
    } else {
      setIdActual(0); //reinicio
    }

    console.log(idActual);
  };

  //funcion para retroceder
  const handleBack = () => {
    if (idActual > 0) {
      setIdActual(idActual - 1);
      console.log(idActual);
    } else {
      setIdActual(pokemons.length - 1);
    }
  };

  //obtiene el pokemon con el id actual para mostrarlo en la tarjeta
  const pokemonActual = pokemons[idActual];

  return (
    <div className="flex flex-col items-center gap-4 p-4 max-w-sm mx-auto">
      {pokemons.length > 0 && pokemonActual ? (
        // Renderiza pokemonActual
        <div className="w-full rounded p-4 overflow-hidden shadow-lg bg-white border border-gray-200">
          <img
            className="w-full h-48 object-contain bg-slate-100"
            src={pokemonActual.sprites.front_default}
            alt={pokemonActual.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 capitalize">
              {pokemonActual.name}
            </div>
            <p className="text-gray-700 text-base">
              Tipo: {pokemonActual.types[0].type.name}
            </p>
          </div>
          <div className="flex gap-4 justify-center w-full mt-2">
            <button
              onClick={handleBack}
              className="px-6 py-2 min-w-30 text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 min-w-30 text-center text-blue-700 border border-blue-500 rounded hover:bg-blue-500 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer"
            >
              Siguiente
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">Cargando pokémons...</div>
      )}
    </div>
  );
}
