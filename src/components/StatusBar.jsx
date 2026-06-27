import { useOnlineStatus } from "../hooks/useOnlineStatus.js";

export default function StatusBar() {
   //toda la logica se paso al service
   const isOnline = useOnlineStatus();

   return (
      <div>
         <h1 className="flex ">
            Conexión: {isOnline ? "🟢 Online!" : "❌ Offline"}
         </h1>
      </div>
   );
}
