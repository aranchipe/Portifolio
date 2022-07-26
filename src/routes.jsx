import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tecnologias from './pages/Tecnologias';


function MainRoutes() {
    const [escuro, setEscuro] = useState(true)

    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home escuro={escuro} setEscuro={setEscuro} />} />
                <Route path="/home" element={<Home escuro={escuro} setEscuro={setEscuro} />} />
            </Route>
            <Route path='tecnologias' element={<Tecnologias escuro={escuro} setEscuro={setEscuro} />} />
        </Routes>
    )
}

export default MainRoutes