export default function CardFootbolAll({teams}) {
  return (
    <div className="min-h-screen">
        <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto">
          {teams.map((e) => (
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
    </div>
  );
}
