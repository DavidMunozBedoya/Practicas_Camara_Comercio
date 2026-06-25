import { useGetApi } from "../hooks/useGetApi";

export default function Card() {
  const pokemons = useGetApi();
  console.log("componente pokemon: ", pokemons);

  return (
    <div className="mx-6 my-8">
      <div className="text-center my-8">
        <h1 className="text-5xl font-medium tracking-tight">Pokédex</h1>
        <p className="text-sm text-gray-400 mt-1">
          Selecciona un Pokémon para ver sus detalles
        </p>
      </div>

      <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden
                   transition-all duration-150 hover:-translate-y-0.5 hover:border-gray-300"
          >
            <div className="bg-gray-50 flex items-center justify-center p-5 mx-2 my-2">
              <img
                className="w-24 h-24 object-contain"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </div>

            <div className="flex justify-center text-center gap-1.5 px-4 py-3 border-t border-gray-100">
              <span className="text-sm text-gray-400">{pokemon.id}.</span>
              <h2 className="text-sm font-medium capitalize">{pokemon.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
