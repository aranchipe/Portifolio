import './style.css'
import Navbar from '../../Components/Navbar'
import Intro from '../../Components/Intro'
import Footer from '../../Components/Footer';

function Home({ escuro, setEscuro }) {
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
            />
            <Intro escuro={escuro} />
            <div style={{ marginTop: '20rem' }}>

                <Footer />
            </div>
        </div>
    );
}

export default Home