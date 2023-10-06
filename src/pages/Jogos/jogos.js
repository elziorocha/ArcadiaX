import Titulo from "../../components/common/Titulo/Titulo";
import './jogos.css';

import { useDispatch, useSelector } from 'react-redux';
import { selecionarTodosJogos, selecionarTodosStatusJogos, selecionarJogosProximaPagina, selecionarJogosPaginaAntiga } from '../../redux/loja/statusJogos';
import { useEffect, useState } from 'react';
import { buscarJogosAsync } from '../../redux/utils/jogosUtils';
import Loading from "../../components/common/Loading/Loading";
import ListaJogos from "../../components/jogos/ListaJogos";
import Paginacao from "../../components/common/Paginacao/Paginacao";
import { STATUS } from "../../utils/status";

function Jogos() {
    const dispatch = useDispatch();
    const jogos = useSelector(selecionarTodosJogos);
    const statusJogos = useSelector(selecionarTodosStatusJogos);
    const proximaPagina = useSelector(selecionarJogosProximaPagina);
    const paginaAnterior = useSelector(selecionarJogosPaginaAntiga);
    const [pagina, setPagina] = useState(1);
  
    useEffect(() => {
      dispatch(buscarJogosAsync(pagina));
    }, [pagina]);
  
    const gerenciadorPaginas = (valorPagina) => setPagina(valorPagina);

    return (
        <div className="sc-jogos section" id="jogos">
            <div className="container">
                <Titulo tituloPrincipal={{
                    primeiroTexto: "todos os",
                    segundoTexto: "jogos"
                }} />           

                {
                    statusJogos === STATUS.LOADING ? <Loading /> : jogos?.length > 0 ? <>
                    <ListaJogos jogos = { jogos } /><br/>
                    <Paginacao gerenciadorPaginas={ gerenciadorPaginas } proximaPagina={ proximaPagina } paginaAnterior={ paginaAnterior } paginaAtual={ pagina } />
                    </> : "Sem resultados"
                }

            </div>
        </div>
    )
}

export default Jogos;