import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './Paginacao.css';

const Paginacao = ({ gerenciadorPaginas, proximaPagina, paginaAnterior, paginaAtual }) => {
  const pageNextHandler = () => {
    if (proximaPagina !== null) gerenciadorPaginas(++paginaAtual);
  };

  const pagePrevHandler = () => {
    if (paginaAnterior !== null) gerenciadorPaginas(--paginaAtual);
  };

  return (
    <div className="d-flex align-items-center justify-content-center" id="paginacao">
      <button
        type="button"
        className={`prev-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          paginaAnterior === null ? "disabled" : ""
        }`}
        disabled={paginaAnterior === null ? true : false}
        onClick={pagePrevHandler}
      >
        <AiOutlineArrowLeft className="me-3" /> Voltar
      </button>
      <button
        type="button"
        className={`next-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          proximaPagina === null ? "disabled" : ""
        }`}
        disabled={proximaPagina === null ? true : false}
        onClick={pageNextHandler}
      >
        Próximo <AiOutlineArrowRight className="me-3" />
      </button>
    </div>
  );
};

export default Paginacao;

Paginacao.propTypes = {
    gerenciadorPaginas: PropTypes.func,
    proximaPagina: PropTypes.string,
    paginaAnterior: PropTypes.string,
    paginaAtual: PropTypes.number,
};
