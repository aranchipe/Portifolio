import './style.css'
import Navbar from '../../Components/Navbar'
import Intro from '../../Components/Intro'

function Home({ escuro, setEscuro, barra, setBarra }) {
    return (
        <div className={escuro ? 'Home fundo-escuro' : 'Home fundo-claro'} style={escuro === true ? {

            background: 'black',
            color: 'white'
        } : {
            background: '',
            color: ''
        }}>
            <Navbar
                escuro={escuro}
                setEscuro={setEscuro}
                page='home'
                barra={barra}
                setBarra={setBarra}
            />
            <Intro escuro={escuro} />
            <div style={{ marginTop: '20rem' }}>

            </div>
        </div>
    );
}

export default Home