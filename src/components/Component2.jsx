
export default function Component2(props) { //el componente recibe props del componente padre
   return (
      <div>
         <h1 className="text-9xl justify-center">Hello, {props.user.name}</h1>
         <h2>Edad: {props.user.edad}</h2>
         <p>Cargo: {props.user.cargo}</p>
         <p>Actividad: {props.user.actividad}</p>
      </div>
   )
}
