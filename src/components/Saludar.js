import React from "react";

export default function Saludar(props) {
  /*   const variable_edad = 30;
  const variable_nombre = "Abelardo"; 
  console.log(variable_edad);
  console.log(props.name);*/

  console.log(props.user);
  return (
    <div>
      <h2>Hola {props.user.nombre} </h2>
      <h2>Tiene {props.user.edad} años</h2>
      <h2>Estudia en {props.user.universidad}</h2>
    </div>
  );
}
