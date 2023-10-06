import { Link } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';
import PropTypes from 'prop-types';
// import { StarRating } from '../../common/index';
import './ItemJogo.css';

const ItemJogo = ({ itemJogo }) => {
  return (
    <div className='card' id='itemJogo'>
      <div className='card-top img-fit-cover'>
        <img src = { itemJogo?.background_image } alt={itemJogo?.name} />
        {/* <StarRating rating = { itemJogo?.rating } /> */}
        <div className='ratings-count'>
          { itemJogo?.ratings_count } <BsStar className='ms-1' size = { 12 } />
        </div>
      </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
          { itemJogo?.name }
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Data Lançamento: &nbsp;</p>
              <p className='details-item-value'>{ itemJogo?.released } </p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Atualizado: &nbsp;</p>
              <p className='details-item-value'>{ itemJogo?.updated } </p>
            </div>
          </div>
          <Link to = { `/jogos/${itemJogo?.id }`} className='card-button text-uppercase'>ver mais</Link>
        </div>
      </div>
    </div>
  )
}

export default ItemJogo;

ItemJogo.propTypes = {
  itemJogo: PropTypes.object
}