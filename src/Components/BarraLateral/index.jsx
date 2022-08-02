import './style.css'
import { useNavigate } from 'react-router-dom'
import casa from '../../img/casa2.png'
import react from '../../img/react.png'
import portfolio from '../../img/portfolio.png'
import sobre from '../../img/sobre.png'
import contato from '../../img/contato.png'
import close from '../../img/close.png'

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
        </div>
    )
}

export default BarraLateral