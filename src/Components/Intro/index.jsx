import './style.css'
import bluelinkedin from '../../img/blue-linkedin.png'
import bluegithub from '../../img/blue-github.png'
import bluewpp from '../../img/blue-wpp.png'
import avatar from '../../img/avatar.png'
import glassesimoji from '../../img/glassesimoji.png'
import Floatingdiv from '../Floatingdiv'
import crown from '../../img/crown.png'
import devIcon from '../../img/devIcon.png'
import { useNavigate } from 'react-router-dom'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import GitHub from '@iconscout/react-unicons/icons/uil-github'


function Intro({ escuro }) {
    const navigate = useNavigate()
    return (
        <div className='intro-container'>
            <div className="intro-esquerda">
                <div className="intro-nome">
                    {escuro ? <span style={{ color: 'white' }}>Olá, eu sou</span> : <span>Olá, eu sou</span>}
                    <span>Lucas Aranchipe</span>
                    <span>Desenvolvedor Full Stack com
                        muita facilidade de aprendizado <br />
                        e estou em busca de oportunidades de
                        mostrar do que sou capaz</span>
                </div>
                <button onClick={() => navigate('/contato')} className=' button i-button'>Me contrate</button>
                <div className="intro-icons">
                    <a target='blank' href='https://github.com/aranchipe'>
                        <GitHub color='var(--orange)' size='4rem' />
                    </a>
                    <a target='blank' href='https://www.linkedin.com/in/lucas-aranchipe/'>
                        <Linkedin color='var(--orange)' size='4rem' />
                    </a>
                    <a target='blank' href='https://api.whatsapp.com/send?phone=5571999666438'>
                        <Whatsapp color='var(--orange)' size='4rem' />
                    </a>

                </div>
            </div>
            <div className="intro-direita">
                <img className='perfil' src={avatar} alt='me' />
                <img
                    className='glassesimoji'
                    src={glassesimoji}
                    alt='glassesimoji'
                />
                <div
                    className='developer'
                >
                    <Floatingdiv image={crown} txt1='Web' txt2='Developer' />
                </div>
                <div className='full-stack'>
                    <Floatingdiv nome='full-stack' image={devIcon} txt1='Full' txt2='Stack' />

                </div>


            </div>
            <div className="blur" style={{ background: 'var(--purple)', left: '30%', top: '55%' }}></div>
            <div className="blur" style={{ background: '#C1F5FF', left: '65%', top: '25%' }}></div>

        </div>
    )
}

export default Intro