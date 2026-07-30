import Component2 from "./Component2";

const tcp = {
   name: "Sarah",
   edad: 20,
   cargo: "Tripulante Cabina de Pasajeros",
   actividad: "pasando Props React",
};

export default function Component1() {
   return (
      //estoy pasando al componente hijo props...  (propdriling)
      <div>
         <Component2
            user={tcp}
         />
      </div>
   );
}
