import { Outlet } from 'react-router-dom';
import Navbar from "../components/Header/Navbar";
import Footer from '../components/Footer';

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout
