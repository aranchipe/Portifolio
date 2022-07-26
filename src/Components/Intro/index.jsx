import './style.css'
import bluelinkedin from '../../img/blue-linkedin.png'
import bluegithub from '../../img/blue-github.png'
import avatar from '../../img/avatar.png'
import glassesimoji from '../../img/glassesimoji.png'
import Floatingdiv from '../Floatingdiv'
import crown from '../../img/crown.png'
import devIcon from '../../img/devIcon.png'


function Intro({ escuro }) {

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
                <a href='#contato'><button className=' button i-button'>Me contrate</button></a>
                <div className="intro-icons">
                    <a target='blank' href='https://github.com/aranchipe'>
                        <img src={bluegithub} alt='github' />
                    </a>
                    <a target='blank' href='https://www.linkedin.com/in/lucas-aranchipe/'>
                        <img src={bluelinkedin} alt='linkedin' />
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