import { useGetApiFootbol } from "../hooks/useGetApiFootbol"
import CardFootbol from "../components/footbol/CardFootbol";
import { useFootbolLeagueStore } from "../stores/useFootbolLeagueStore";
import InputFootbol from "../components/footbol/InputFootbol";

export default function FootbolPage() {
   const { league } = useFootbolLeagueStore();
   const teams = useGetApiFootbol(league);

   return (
      <div className="pt-24">
         <InputFootbol />
         <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-medium tracking-tight">Clubes de Fútbol España Liga {league}</h1>
         </div>
         <div className="min-h-screen">
            <div className="grid gap-3 p-20 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-auto">
               {teams.map((team) => <CardFootbol key={team.id} team={team} />)}
            </div>
         </div>
      </div>
   )
}
