export default function Card({ pokemon, action }) {

   const { sprites: { front_default }, name, id } = pokemon;

   return (
      <div
         className="bg-white border border-gray-400 rounded-xl overflow-hidden
              transition-all duration-150 hover:-translate-y-0.5 hover:border-gray-500 hover:cursor-pointer"
         onClick={action}
      >
         <div className="bg-gray-50 flex items-center justify-center p-5 mx-2 my-2">
            <img
               className="w-24 h-24 object-contain"
               src={front_default}
               alt={name}
            />
         </div>
         <div className="flex justify-center text-center gap-1.5 px-4 py-3 border-t border-gray-100">
            <span className="text-sm text-gray-400">{id}</span>
            <h2 className="text-sm font-medium capitalize">{name}</h2>
         </div>
      </div>
   );
}
