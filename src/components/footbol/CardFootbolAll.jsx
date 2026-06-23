import { useGetApiFootbol } from "../../hooks/useGetApiFootbol";
import Spinner from "../Spinner";

export default function CardFootbolAll({ value }) {
  const { teams, isLoadingData } = useGetApiFootbol({ value });
  console.log("loading: ", isLoadingData);
  console.log("componente ", teams);

  // ? => Operador de encadenamiento opcional
  const teamList = teams?.team ?? []; //existe team? entonces conviertelo en un arreglo o dejalo como un arreglo vacío.

  console.log("TeamList: ", teamList);

  return (
    <div className="min-h-screen">
      {isLoadingData ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto">
          {teamList.map((e) => (
            <div
              key={e.id}
              className="rounded border-2 border-gray-600 overflow-hidden shadow-lg bg-white hover:bg-gray-300"
            >
              <img
                className="w-120 h-40 object-contain m-3"
                src={e.shield_png}
              />
              <div className="flex justify-between m-5">
                <div className="order-1 text-center my-auto mx-auto">
                  <p className="text-4xl font-bold">{e.nameShow}</p>
                </div>
                <div className="order-2">
                  <img
                    className="rounded-full w-10 h-10"
                    src={e.flag}
                    alt="bandera"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
