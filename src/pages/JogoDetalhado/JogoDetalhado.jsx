import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selecionarJogo, selecionarDescricaoJogo } from '../../redux/loja/statusJogos';
import { useEffect } from 'react';
import { buscarDetalhesDoJogoAsync } from '../../redux/utils/jogosUtils';
import { Breadcrumb, Paginacao } from '../../components/common';
import { game_details_image } from '../../utils/imagens';
import { STATUS } from '../../utils/status';
import { ItemDetalhadoJogo } from '../../components/jogos/index';
import "./JogoDetalhado.css";

const PaginaJogoDetalhado = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const singleGameData = useSelector(selecionarJogo);
  const singleGameStatus = useSelector(selecionarDescricaoJogo);

  useEffect(() => {
    dispatch(buscarDetalhesDoJogoAsync(gameId));
  }, [gameId]);

  console.log('Jogo detalhado', gameId);

  const gameNameById = {
    [singleGameData.id] : singleGameData.name
  }

  return (
    <div className='sc-details' style = {{
        background: `linear-gradient(0deg, rgba(16, 14, 43, 0.8), rgba(16, 14, 43, 0.8)), url(${game_details_image}) center/cover no-repeat`
      }}>
        <div className='container'>
          <Breadcrumb dataNameById = { gameNameById } />
          {
            singleGameStatus === STATUS.LOADING ? <Paginacao /> : <ItemDetalhadoJogo itemJogo = { singleGameData } />
          }
        </div>
    </div>
  )
}

export default PaginaJogoDetalhado;

