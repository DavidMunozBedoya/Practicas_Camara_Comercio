export default function UserInfo(props) {
   return (
      <div className="font-serif text-2xl text-amber-50 ">
         <div>
            <h1 className="border m-1.5 text-center ">Nombre: {props.user.name}</h1>
         </div>
         <div>
            <p className="py-2">{props.user.description}</p>
         </div>
      </div>
   );
}
