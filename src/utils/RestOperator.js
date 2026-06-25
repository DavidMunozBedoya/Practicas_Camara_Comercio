const user = {id: 1, name: "Carlos", edad: 18, ciudad: "Cartago", barrio: "Santa Ana"};

//operador Rest
const {id, ciudad, edad, ...restUser} = user;

//operador de propagacion o spread operator
const copyUser = {...user}

console.log(restUser);