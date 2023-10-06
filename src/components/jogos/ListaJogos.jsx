import styled from 'styled-components';
import PropTypes from "prop-types";
import ItemJogo from './ItemJogo/ItemJogo';

const ListaJogos = ({ jogos, valorDivisoria = jogos.length }) => {

  return (
    <GameListWrapper>
      <div className='card-list'>
        {
          jogos?.slice(0, valorDivisoria).map(item => (
            <ItemJogo key = { item.id } itemJogo = { item } />
          ))
        }
      </div>
    </GameListWrapper>
  )
}

export default ListaJogos;

ListaJogos.propTypes = {
  jogos: PropTypes.array,
  valorDivisoria: PropTypes.number
}

const GameListWrapper = styled.div``;
