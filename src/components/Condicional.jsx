/* import React from 'react' */

export default function Condicional() {

    /* let isLoggedin = true; */
    let isLoggedin = false;
    let content;

    /* if (isLoggedin) {
        content = <h1 className="welcome">Bienvenido, usuario!</h1>;
    } else {
        content = <h1 className="error">Por favor, inicia sesión.</h1>;
    }; */

    content = isLoggedin ? (<h1 className="welcome">Bienvenido, usuario!</h1>) : 
    (<h1 className="error">Por favor, inicia sesión.</h1>);

  return (
    <div>
      {content}
    </div>
  )
}
