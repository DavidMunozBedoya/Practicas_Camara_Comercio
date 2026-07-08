import { useGetApiFootbol } from "../../hooks/useGetApiFootbol"
import CardFootbol from "./CardFootbol";
import { useFootbolLeagueStore } from "../../stores/useFootbolLeagueStore";

export default function ContainerFootbol() {
   const { league } = useFootbolLeagueStore();
   const teams = useGetApiFootbol(league);

   return (
      <div>
         <div className="text-center my-8">
            <h1 className="text-5xl font-medium tracking-tight">Clubes de Fútbol</h1>
         </div>
         <div className="min-h-screen">
            <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto">
               {teams.map((team) => <CardFootbol team={team} />)}
            </div>
         </div>
      </div>
   )
}
