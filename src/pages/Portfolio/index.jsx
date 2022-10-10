import './style.css'
import Navbar from '../../Components/Navbar'
import MyPortfolio from '../../Components/MyPortfolio'
import Footer from '../../Components/Footer'
import Certificados from '../../Components/Certificados'

function Portfolio({ escuro, setEscuro, barra, setBarra }) {
    return (
        <div className='portfolio-page' style={escuro === true ? {
            background: 'black',
            color: 'white'
        } : {
            background: '',
            color: ''
        }}>
            <Navbar barra={barra} setBarra={setBarra} page='portfolio' escuro={escuro} setEscuro={setEscuro} />


            <MyPortfolio escuro={escuro} setEscuro={setEscuro}
            />



            <Certificados escuro={escuro} setEscuro={setEscuro} />
            <div style={{ overflowY: 'hidden', marginTop: '10rem' }}>
                <Footer />
            </div>

        </div>
    )
}

export default Portfolio