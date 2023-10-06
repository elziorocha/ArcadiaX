import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LojaItem = ({ lojaItem }) => {
  return (
    <div id="lojaItem" className="card d-grid">
      <div className="card-img img-fit-cover">
        <img src={lojaItem?.image_background} alt={lojaItem?.id} />
      </div>
      <div className="card-text d-flex flex-column justify-content-center">
        <h5 className="card-title text-uppercase fw-7 text-uppercase">
          <Link className="text-white" to={`stores/${lojaItem.id}`}>
            {lojaItem?.name}
          </Link>
        </h5>
        <ul className="card-info">
          <li>
            <span className="fw-7">Domain: </span>
            <a href={"https://www." + lojaItem?.domain}>{lojaItem?.domain}</a>
          </li>
          <li>
            <span className="fw-7">Games Count: </span>
            {lojaItem?.games_count}
          </li>
        </ul>
        {lojaItem?.games && <p className="fw-7 text-white">Games:</p>}
        <ul className="card-games d-flex flex-wrap">
          {lojaItem?.games?.map((item) => {
            return (
              <li className="card-game" key={item.id}>
                <Link to={`jogos/${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LojaItem;

LojaItem.propTypes = {
    lojaItem: PropTypes.object,
};