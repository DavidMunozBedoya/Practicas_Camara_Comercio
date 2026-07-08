export default function CardFootbol({ team }) {
   return (
      <div
         key={team.id}
         className=" border border-gray-400 rounded-xl overflow-hidden shadow-lg bg-white hover:bg-gray-200"
      >
         <div className="flex justify-center items-center p-5 mx-2 my-2">
            <img
               className="w-24 h-24 object-contain m-3"
               src={team.shield_png}
            />
         </div>
         <div className="flex justify-between m-5">
            <div className="text-center my-auto mx-auto">
               <p className="text-sm font-medium capitalize">{team.nameShow}</p>
            </div>
         </div>
      </div>
   );
}
