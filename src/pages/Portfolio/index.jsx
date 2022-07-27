import './style.css'
import Navbar from '../../Components/Navbar'
import MyPortfolio from '../../Components/MyPortfolio'
import Footer from '../../Components/Footer'

function Portfolio({ escuro, setEscuro }) {
    return (
        <div className='portfolio-page' style={escuro === true ? {
            background: 'black',
            color: 'white'
        } : {
            background: '',
            color: ''
        }}>
            <Navbar page='portfolio' escuro={escuro} setEscuro={setEscuro} />

            <MyPortfolio escuro={escuro} setEscuro={setEscuro} />
            <div style={{ overflowY: 'hidden', marginTop: '10rem' }}>
                <Footer />
            </div>

        </div>
    )
}

export default Portfolio