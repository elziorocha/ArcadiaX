import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Páginas

// import Home from '../pages/Home';
import Error from '../pages/Erro';
import Login from '../pages/Login/login';
import Registrar from '../pages/Registrar/registrar';
import Sobre from '../pages/Sobre';
import Home from '../pages/Home';
import Jogos from '../pages/Jogos/jogos';
import PaginaJogoDetalhado from '../pages/JogoDetalhado/JogoDetalhado';

// Componentes

import BaseLayout from '../layout/BaseLayout';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BaseLayout/>} >
                    <Route path='/' element={<Home/>} />
                    <Route path='*' element={<Error/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/sobre' element={<Sobre/>} />
                    <Route path='/registrar' element={<Registrar/>} />
                    <Route path='/jogos' element={<Jogos/>} />
                    <Route path='/jogos/:gameId' element={<PaginaJogoDetalhado/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;