import PropTypes from "prop-types";
import './Titulo.css';

const Titulo = ({ tituloPrincipal }) => {
  return (
    <div id='titulo'>
      <h3>{tituloPrincipal.primeiroTexto } <span>{ tituloPrincipal.segundoTexto }</span></h3>
      <div className='line'></div>
    </div>
  )
}

export default Titulo;

Titulo.propTypes = {
  tituloPrincipal : PropTypes.object
}