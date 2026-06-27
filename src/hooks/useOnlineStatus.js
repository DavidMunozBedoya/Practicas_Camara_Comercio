import { useState, useEffect } from "react";

export function useOnlineStatus() {

   const [isOnLine, setIsOnline] = useState(navigator.onLine);

   const handleToggleStatus = (value) => setIsOnline(value);

   useEffect(() => {
      window.addEventListener("online", () => handleToggleStatus(true));
      window.addEventListener("offline", () => handleToggleStatus(false));

      return () => {
         window.removeEventListener("online", handleToggleStatus);
         window.removeEventListener("offline", handleToggleStatus);
      }
   }, []);

   return isOnLine;
}
