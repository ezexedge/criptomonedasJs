import React from 'react';

const Resultado = ({resultado}) => {
    if(Object.entries(resultado).length === 0 ) return null
    return ( 

        <div className="resultado">
        <h3>RESULTADO</h3>
        <p className="precio">El precio es {resultado.PRICE} </p>
        <p>La ultima actualizacion fue {resultado.LASTUPDATE}</p>
        </div>
     );
}
 
export default Resultado;

