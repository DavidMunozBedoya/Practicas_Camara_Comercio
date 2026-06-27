import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

export function Comment() {
   const data = {
      avatarUrl:
         "https://static.wikia.nocookie.net/james-camerons-avatar/images/1/1b/Jake_Sully_ATWOW.PNG/revision/latest?cb=20241222045741&path-prefix=es",
      name: "Jake",
      description:
         "Jacob 'Jake' Sully es el protagonista principal de la primera película de Avatar y un personaje principal en Avatar: El Camino del Agua y Avatar: Fuego y Cenizas. También es un personaje importante en los cómics.",
      fecha: "08/06/2026"
   };
   return (
      <div className="Comment px-2  bg bg-blue-700 hover:bg-blue-900 border-3 h-screen justify-center items-center w-100 mx-auto">
         <div>
            <div className="my-5 mx-1 font-serif text-center text-2xl text-amber-50"> AVATAR </div>
            <Avatar user={data} />
            <UserInfo user={data} />
         </div>
      </div>
   );
}
