import { Link } from 'react-router-dom';
import './home.css';
import { background } from '../../utils/imagens';

function Home(){
  // <getGames/>
  return(
      <div className='d-flex align-items-center justify-content-start tamanho-banner' style = {{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${background}) center/cover no-repeat`
      }}>
        <div className='banner-content w-100 container text-white box-home'>
          <div className='banner-badge text-uppercase texto-banner'>Junte-se a nós</div>
          <h1 className='banner-title text-uppercase'>Melhor site de jogos</h1>
          <p className='lead-text'>Encontre entre 500.000 jogos à sua disposição e promoções exclusiva para aproveitar, conecte-se com seus amigos e aproveite!</p>
          <button type="button" className='banner-btn d-flex align-items-center'>
            <span className='btn-icon'>
              {/* <FaGamepad className='text-white' size = { 25 } /> */}
            </span>
            <Link to="/login" className='btn-text text-green botao-login'>login</Link>
          </button>
        </div>
      </div>
  );
}

export default Home;