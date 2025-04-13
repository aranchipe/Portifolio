import './style.css'
import Toggle from '../Toggle'
import { useNavigate } from 'react-router-dom'
import logoClaro from '../../img/logo4.png'
import logoEscuro from '../../img/logo5.png' 
import menuPreto from '../../img/menu-preto.png'
import menuBranco from '../../img/menu-branco.png'
import BarraLateral from '../BarraLateral'


function Navbar({ escuro, setEscuro, page, barra, setBarra }) {
    const navigate = useNavigate()
    return (
        <div className='navbar-container'>
            <div className="navbar-esquerda">
                <img onClick={() => setBarra(true)} src={escuro ? menuBranco : menuPreto} alt='menu-preto' className={barra ? 'menu-sumindo' : 'menu'} />

                < BarraLateral
                    barra={barra}
                    setBarra={setBarra}
                    page={page}
                    escuro={escuro}
                />

                <div className={barra ? 'logo logo-barra-aberta' : 'logo'}>
                    <img className='logo-img' src={escuro ? logoEscuro : logoClaro} alt='logo' />
                    <div className="navbar-nome">Lucas Aranchipe</div>
                </div>
                <Toggle
                    setEscuro={setEscuro}
                    escuro={escuro}
                />
            </div>
            <div className="navbar-direita">
                <div className="navbar-lista">
                    <ul>
                        <li style={page === 'home' ? { color: 'var(--orange)' } : {}} onClick={() => navigate('/home')}>Home </li>
                        <li style={page === 'tecnologias' ? { color: 'var(--orange)' } : {}} onClick={() => navigate('/tecnologias')}>Tecnologias</li>
                        <li style={page === 'portfolio' ? { color: 'var(--orange)' } : {}} onClick={() => navigate('/portfolio')}>Portfolio</li>
                        <li style={page === 'sobre' ? { color: 'var(--orange)' } : {}} onClick={() => navigate('/sobre')}>Sobre</li>
                    </ul>
                </div>

                <button onClick={() => navigate('/contato')} className='button'>
                    Contato
                </button>

            </div>
        </div>
    )
}

export default Navbar