import React from "react";
import PropTypes from "prop-types";

const Result = ({ value }) => {
    return (
        <div className="result">
            {value}
        </div>
    );
};

// Usamos propTypes para validar que value es de tipo string.
// Si metiesemos un tipo de dato erroneo nos daria un warning por la consola
// Podemos añadir el isRequired para que sea obligatoria
Result.propTypes = {
    // value: PropTypes.string.isRequired
    value: PropTypes.string.isRequired
};

// Añadimos valores por defecto. Cuando no venga valor se metera el 0 por defecto.
Result.defaultProps = {
    value: "0"
}

export default Result;