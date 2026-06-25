export default function PokemonDetails({ pokemon }) {
  return (
    <div>
      <div className="flex justify-center items-cener text-5xl font-black relative">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="https://loremflickr.com/320/320/girl"
          alt=""
        />
        <h2>Nombre: </h2>
        <h1 className="text-amber-600 space-y-5">{pokemon.name}</h1>
      </div>
    </div>
  );
}
