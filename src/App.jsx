// imports
import React from "react";
import './App.css' // Importamos el archivo de estilo.
import Result from "./components/Result";

// generacion de la funcion del componente
// generamos una arrow function. Será una constante y tendra el nombre del componente. (nombre del componente igual al nombre del archivo)
// en los parentesis estarian los paramentros que se reciben.
// entre llaves estara el cuerpo de la funcion.
const App = () => {
    // Lo que ejecuta la funcion. Con el className aplicamos el css por clase
    return (
            <main className="react-calculator">
                <Result value={"10"}></Result>
            </main>
    );
};

// exportacion
export default App;