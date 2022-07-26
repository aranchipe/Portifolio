import './style.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'


function Toggle({ escuro, setEscuro }) {
    return (
        <div className='toggle'>
            <Moon />
            <Sun />
            <div className={escuro === true ? 't-button lua' : escuro === false ? 't-button sol' : 't-button'} onClick={() => setEscuro(!escuro)}>

            </div>
        </div>
    )
}

export default Toggle