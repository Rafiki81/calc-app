// imports
import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import './App.css' // Importamos el archivo de estilo.


// generacion de la funcion del componente
// generamos una arrow function. Será una constante y tendra el nombre del componente. (nombre del componente igual al nombre del archivo)
// en los parentesis estarian los paramentros que se reciben.
// entre llaves estara el cuerpo de la funcion.
const App = () => {
    // Lo que ejecuta la funcion. Con el className aplicamos el css por clase
    return (
            <main className="react-calculator">
                <Result value={"10"}></Result>
                <div>
                    <Button text="1" clickHandler={(text) => {console.log(text)}}></Button>
                </div>
            </main>
    );
};

// exportacion
export default App;