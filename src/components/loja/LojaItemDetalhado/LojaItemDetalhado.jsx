import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./LojaItemDetalhado.css";

const LojaItemDetalhado = ({ storeData }) => {
  return (
    <div id="lojaItemDetalhado">
      <div className='details-grid d-grid'>
        <div className='details-left img-fit-cover'>
          <img src = { storeData?.image_background } alt = { storeData?.name } />
        </div>

        <div className='details-right mt-4'>
          <h5 className='card-title text-uppercase fw-7'>
            <Link to = { `stores/${ storeData.id }`} className='text-white'>
              { storeData?.name }
            </Link>
          </h5>
          <ul className='card-info'>
              <li>
                <span className='fw-7 text-white'>Domain: </span>
                <a className='text-white' href={"https://www." + storeData?.domain }>
                  { storeData?.domain }
                </a>
              </li>
              <li>
                <span className='fw-7 text-white'>Games Count: </span>
                <span className='text-white'>{ storeData?.games_count }</span>
              </li>
            </ul>
            <div className='para-text' dangerouslySetInnerHTML={{ __html:storeData?.description }}></div>
        </div>
      </div>
    </div>
  )
}

export default LojaItemDetalhado;

LojaItemDetalhado.propTypes = {
  storeData: PropTypes.object
}
