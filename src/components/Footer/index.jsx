import './footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <div id="footer">
                <div>
                    <h1><Link to="/" className='routes-titulo'>ArcadiaX</Link></h1>
                </div>
                <div>
                    <nav>
                        <ul className='links_footer'>
                            <Link to="*" className='links_footer2'>Política de Privacidade</Link>
                            <Link to="*" className='links_footer2'>Termos Legais</Link>
                            <Link to="*" className='links_footer2'>Acordos de Assinatura</Link>
                            <Link to="*" className='links_footer2'>Reembolsos</Link>
                            <Link to="*" className='links_footer2'>Cookies</Link>
                        </ul>
                        <ul>
                            <li className='texto_footer'>© 2023 Atlantic Games Corporation.
                             Todos os direitos reservados.
                             Todas as marcas são propriedade dos seus respectivos donos no Brasil
                             e em outros países.
                             IVA incluso em todos os preços onde aplicável.
                             </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;