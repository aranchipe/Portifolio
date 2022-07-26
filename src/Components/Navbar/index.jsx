import './style.css'
import Toggle from '../Toggle'
import { useNavigate } from 'react-router-dom'

function Navbar({ escuro, setEscuro }) {
    const navigate = useNavigate()
    return (
        <div className='navbar-container'>
            <div className="navbar-esquerda">
                <div className="navbar-nome">Lucas</div>
                <Toggle
                    setEscuro={setEscuro}
                    escuro={escuro}
                />
            </div>
            <div className="navbar-direita">
                <div className="navbar-lista">
                    <ul>
                        <li onClick={() => navigate('/home')}>Home </li>
                        <li onClick={() => navigate('/tecnologias')}>Tecnologias</li>
                        <li>Portfolio</li>
                        <li>Sobre</li>
                    </ul>
                </div>
                <a href='#contato'><button className='button'>
                    Contato
                </button></a>

            </div>
        </div>
    )
}

export default Navbar