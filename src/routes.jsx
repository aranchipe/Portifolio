import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tecnologias from './pages/Tecnologias';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';


function MainRoutes() {
    const [escuro, setEscuro] = useState(true)
    const [barra, setBarra] = useState(false)


    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home barra={barra} setBarra={setBarra} escuro={escuro} setEscuro={setEscuro} />} />
                <Route path="/home" element={<Home barra={barra} setBarra={setBarra} escuro={escuro} setEscuro={setEscuro} />} />
            </Route>
            <Route path='tecnologias' element={<Tecnologias barra={barra} setBarra={setBarra} escuro={escuro} setEscuro={setEscuro} />} />
            <Route path='portfolio' element={<Portfolio barra={barra} setBarra={setBarra} escuro={escuro} setEscuro={setEscuro} />} />
            <Route path='sobre' element={<Sobre barra={barra} setBarra={setBarra} escuro={escuro} setEscuro={setEscuro} />} />
            <Route path='contato' element={<Contato barra={barra} setBarra={setBarra} escuro={escuro} setEscuro={setEscuro} />} />
        </Routes>
    )
}

export default MainRoutes