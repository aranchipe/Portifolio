import './style.css'
import { useNavigate } from 'react-router-dom'
import casa from '../../img/casa.png'
import react from '../../img/react.png' 
import portfolio from '../../img/portfolio.png'
import sobre from '../../img/sobre.png'
import contato from '../../img/contato.png'
import close from '../../img/close.png'
import programacao from '../../img/programacao.png'
import css from '../../img/css.png'
import celular from '../../img/celular.png'
import whiteReact from '../../img/white-react.png'
import computador from '../../img/computador.png'
import ideia from '../../img/ideia.png'
import mouse from '../../img/mouse.png'
import html from '../../img/html.png'

function BarraLateral({ page, barra, setBarra, escuro }) {
    const navigate = useNavigate()

    
    return (
        <div onMouseLeave={() => setBarra(false)} className={barra === true ? 'barra barra-aberta' : barra === false ? ' barra barra-fechada' : 'barra-sumida'}>
            <ul>
                <li
                    style={page === 'home' ? { color: 'black' } : { color: 'white' }}
                    onClick={() => { setBarra(false); navigate('/home') }}>
                    <div className='icones'>
                        <img
                            src={casa}
                            alt='casa' />

                    </div>
                    Home
                </li>
                <li
                    style={page === 'tecnologias' ? { color: 'black' } : { color: 'white' }}
                    onClick={() => { setBarra(false); navigate('/tecnologias') }}>
                    <div className='icones'>
                        <img
                            src={react}
                            alt='react' />

                    </div>
                    Tecnologias
                </li>
                <li
                    style={page === 'portfolio' ? { color: 'black' } : { color: 'white' }}
                    onClick={() => { setBarra(false); navigate('/portfolio') }}>
                    <div className='icones'>
                        <img
                            src={portfolio}
                            alt='portfolio' />

                    </div>
                    Portfolio
                </li>
                <li
                    style={page === 'sobre' ? { color: 'black' } : { color: 'white' }}
                    onClick={() => { setBarra(false); navigate('/sobre') }}>
                    <div className='icones'>
                        <img
                            src={sobre}
                            alt='sobre' />
                    </div>

                    Sobre
                </li>
                <li
                    style={page === 'contato' ? { color: 'black' } : { color: 'white' }}
                    onClick={() => { setBarra(false); navigate('/contato') }}>
                    <div className='icones'>
                        <img
                            src={contato}
                            alt='contato' />

                    </div>
                    <div>
                        Contato

                    </div>
                </li>
            </ul>
            {<img onClick={() => setBarra(false)} src={close} alt='close-preto' className='close' />}
            <img src={programacao} alt='programacao' className='menu-icon' style={{ left: '65%', top: '80%', width: '5.5rem', transform: 'rotate(20deg)' }} />
            <img src={css} alt='programacao' className='menu-icon' style={{ left: '40%', top: '80%', width: '3.5rem', transform: 'rotate(7deg)' }} />
            <img src={celular} alt='programacao' className='menu-icon' style={{ left: '10%', top: '80%', width: '3.5rem', transform: 'rotate(-15deg)' }} />
            <img src={whiteReact} alt='programacao' className='menu-icon' style={{ left: '40%', top: '67%', width: '4.5rem', transform: 'rotate(-15deg)' }} />
            <img src={computador} alt='programacao' className='menu-icon' style={{ left: '10%', top: '62%', width: '4.5rem', transform: 'rotate(15deg)' }} />
            <img src={ideia} alt='programacao' className='menu-icon' style={{ left: '65%', top: '50%', width: '5.5rem', transform: 'rotate(15deg)' }} />
            <img src={mouse} alt='programacao' className='menu-icon' style={{ left: '45%', top: '53%', width: '3.5rem', transform: 'rotate(-8deg)' }} />
            <img src={html} alt='programacao' className='menu-icon' style={{ left: '66%', top: '67%', width: '4.5rem', transform: 'rotate(-10deg)' }} />

        </div>
    )
}

export default BarraLateral