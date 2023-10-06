// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { BsRssFill, BsSteam, BsTwitch, BsYoutube} from "react-icons/bs";
import { MdClose } from 'react-icons/md';

import './Navbar.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarStatus, setSidebarOff, setSidebarOn } from '../../redux/loja/sideBarSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectSidebarStatus);

  return (
    <div className='d-flex align-items-center header-navbar'>
      <div className='container w-100'>
        <div className='navbar-content'>
          <div className='brand-and-toggler d-flex align-items-center justify-content-between'>
            <Link to = "/" className="navbar-brand text-white text-uppercase no-wrap">Arcadia <span>X</span></Link>
            <button type='button' className='navbar-show-btn text-white' onClick={() => dispatch(setSidebarOn())}>
              <HiOutlineMenuAlt3 size = { 25 } />
            </button>
          </div>

          <div className={`navbar-collapse ${sidebarStatus ? "show" : " "}`}>
            <button type="button" className='navbar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
              <MdClose size = { 25 } />
            </button>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to = "/" className='nav-link'>página principal</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/creators" className='nav-link'>criadores</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/stores" className='nav-link'>loja</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/jogos" className='nav-link'>jogos</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/sobre" className='nav-link'>sobre</Link>
              </li>
            </ul>

            <ul className='connect-list d-flex justify-content-center align-items-center mt-5 flex-wrap'>
              <li className='text-uppercase fw-7 w-100 connect-text mb-2'>conectar</li>
              <li className='connect-item'>
                <Link to = "/" className='connect-link'>
                  <BsRssFill />
                </Link>
              </li>
              <li className='connect-item'>
                <Link to = "/" className='connect-link'>
                  <BsSteam size = { 18 } />
                </Link>
              </li>
              <li className='connect-item'>
                <Link to = "/" className='connect-link'>
                  <BsTwitch size = { 18 } />
                </Link>
              </li>
              <li className='connect-item'>
                <Link to = "/" className='connect-link'>
                  <BsYoutube size = { 19 } />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
