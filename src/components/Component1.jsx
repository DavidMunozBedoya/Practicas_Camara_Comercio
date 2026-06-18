import Component2 from "./Component2";

const tcp = {
  name: "Sarah",
  edad: 20,
  cargo: "Tripulante de vuelo",
  actividad: "pasando Props React",
};

export default function Component1() {
  return (
    //estoy pasando al componente hijo props...
    <div>
      <Component2
        user={tcp}
      />
    </div>
  );
}
