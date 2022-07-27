import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tecnologias from './pages/Tecnologias';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';


function MainRoutes() {
    const [escuro, setEscuro] = useState(true)

    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home escuro={escuro} setEscuro={setEscuro} />} />
                <Route path="/home" element={<Home escuro={escuro} setEscuro={setEscuro} />} />
            </Route>
            <Route path='tecnologias' element={<Tecnologias escuro={escuro} setEscuro={setEscuro} />} />
            <Route path='portfolio' element={<Portfolio escuro={escuro} setEscuro={setEscuro} />} />
            <Route path='sobre' element={<Sobre escuro={escuro} setEscuro={setEscuro} />} />
            <Route path='contato' element={<Contato escuro={escuro} setEscuro={setEscuro} />} />
        </Routes>
    )
}

export default MainRoutes