import { useGetApiFootbol } from "../../hooks/useGetApiFootbol";

export default function CardFootbolAll({value}) {
  
  const teams = useGetApiFootbol({value});
  console.log("componente ", teams);

  //pregunta primero si existe el objeto team dentro del objeto y si existe lo almacena dentro de teamList como un arreglo
  // es necesario hacerlo de esta forma para que cuando renderice el componente espere a que los datos se carguen
  const teamList = teams?.team ?? []; //existe team? entonces conviertelo en un arreglo o dejalo como un arreglo vacío.

  console.log("TeamList: ", teamList);

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 bg-gray-100 ">
      {teamList.length > 0 ? (
        teamList.map((e) => (
          <div
            key={e.id}
            className="rounded border-2 border-gray-600 overflow-hidden shadow-lg bg-white hover:bg-gray-300"
          >
            <img className="w-120 h-40 object-contain m-3" src={e.shield_png} />
            <div className="flex justify-between m-5">
              <div className="order-1 text-center my-auto mx-auto">
                <p className="text-4xl font-bold">{e.nameShow}</p>
              </div>
              <div className="order-2 w-15">
                <img src={e.flag} alt="bandera" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-600">
          Cargando...
        </div>
      )}
    </div>
  );
}
