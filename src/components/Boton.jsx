import React from 'react'
import '../Hojas de estilos/Boton.css'
function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor)&&(valor !=='.')&& (valor!=='=')
  }
  return (
    <div>
      <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </button>
    </div>
  )
}

export default Boton