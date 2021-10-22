import React from "react";
import ReactDOM from "react-dom";

// importamos el nuevo componente
import App from './App' //se pone el path relativo para importarlo


// Hace que se renderice la aplicacion. 
// El primer parametro sera contenido de la aplicacion y el segundo el punto de montaje en el index.html.
// Utilizamos el componente importado.
// ReactDOM.render(<h1>Hola Mundo</h1>, document.getElementById("root")); 
ReactDOM.render(<App></App>, document.getElementById("root")); 