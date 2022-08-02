import './style.css'
import Navbar from '../../Components/Navbar'
import Intro from '../../Components/Intro'
import Footer from '../../Components/Footer';

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
            <div className='div-footer' style={{ marginTop: '20rem' }}>

                <Footer escuro={escuro} />
            </div>
        </div>
    );
}

export default Home