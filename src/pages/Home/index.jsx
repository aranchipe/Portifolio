import './style.css'
import Navbar from '../../Components/Navbar'
import Intro from '../../Components/Intro'

function Home({ escuro, setEscuro }) {
    return (
        <div className="Home" style={escuro === true ? {
            background: 'black',
            color: 'white'
        } : {
            background: '',
            color: ''
        }}>
            <Navbar
                escuro={escuro}
                setEscuro={setEscuro}
            />
            <Intro escuro={escuro} />
        </div>
    );
}

export default Home