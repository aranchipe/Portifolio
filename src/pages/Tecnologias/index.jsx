import './style.css'

import Navbar from '../../Components/Navbar'
import MyTechnologies from '../../Components/MyTechnologies'

function Tecnologias({ escuro, setEscuro }) {
    return (
        <div className='tecnologias-page' style={escuro === true ? {
            background: 'black',
            color: 'white'
        } : {
            background: '',
            color: ''
        }}>
            <Navbar escuro={escuro} setEscuro={setEscuro} />
            <MyTechnologies escuro={escuro} />
        </div>
    )
}

export default Tecnologias