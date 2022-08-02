import './style.css'
import perfil from '../../img/perfil.jpeg'
import judo from '../../img/judo.png'
import lpo from '../../img/lpo.jpeg'
import me2 from '../../img/me2.jpeg'
import Retrato from '../../Components/Retrato'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
function Sobre({ escuro, setEscuro, barra, setBarra }) {
    return (
        <div className='s-container' style={escuro === true ? {
            background: 'black',
            color: 'white'
        } : {
            background: '',
            color: ''
        }}>
            {<Navbar
                escuro={escuro}
                setEscuro={setEscuro}
                page='sobre'
                barra={barra}
                setBarra={setBarra}
            />}

            <div className="s-content">

                <div className="s-heading">
                    <span>Um pouco de </span>
                    <span>mim...</span>
                    <div className="blur s-blur2" style={{ background: 'skyblue' }}></div>
                    <div className="blur s-blur3" style={{ background: 'var(--purple)' }}></div>
                </div>

                <div className="card-sobre">
                    <img className='foto-sobre' src={perfil} alt='perfil' />
                    <span style={escuro ? { color: 'white' } : { color: 'var(--gray)' }}>Olá, meu nome é Lucas Leite Aranchipe. Curso o 9° semestre de Engenharia Mecânica
                        na Universidade Federal da Bahia. Sou faixa preta de judô, penta campeão baiano
                        e meu maior título foi o 2° lugar no campeonato brasileiro. Aos 17 anos parei de competir judô e migrei
                        para o Levantamento de Peso Olímpico. Amo praticar esportes e tenho vários hoobies (gosto dos que me desafiam), como
                        tocar violão e guitarra, cubo mágico, jogar jogos eletrônicos, entre outros.
                        Com o objetivo de agregar habilidades e usá-las
                        na área de engenharia, comecei a cursar na Cubos Academy para me tornar um engenheiro que sabe programar.
                        Apesar de gostar bastante da área de engenharia, acabei me
                        apaixonando pela área de tecnologia e quero atuar na mesma com anseio por gerar impacto
                        na vida das pessoas através da tecnologia.</span>
                    <div className='camp-bras'>
                        <Retrato
                            escuro={escuro}
                            imagem={judo}
                            texto='2° lugar Campeonato Brasileiro de Judô'
                        />
                    </div>
                    <div className='camp-lpo'>
                        <Retrato
                            escuro={escuro}
                            imagem={lpo}
                            texto='Campeonato Baiano de LPO'
                        />
                    </div>
                    <div className='cubos'>
                        <Retrato
                            escuro={escuro}
                            imagem={me2}
                            texto='Cubos Academy'
                        />
                    </div>
                </div>
            </div>


            <div style={{ overflowY: 'hidden' }}>
                <Footer />
            </div>
        </div >
    )
}

export default Sobre