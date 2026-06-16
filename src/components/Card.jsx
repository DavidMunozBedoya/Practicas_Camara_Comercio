import { useGetApi } from "../hooks/useGetApi";

export default function Card() {
  
  const pokemons = useGetApi();

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="rounded overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full h-40 object-contain bg-slate-100"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 capitalize">
                {pokemon.name}
              </div>
              <p className="text-gray-700 text-base">
                Tipo: {pokemon.types[0].type.name}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-600">
          Cargando pokémons...
        </div>
      )}
    </div>
  );
}
