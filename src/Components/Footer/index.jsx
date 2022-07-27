import './style.css'
import bluewave from '../../img/blue-wave.png'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
    return (
        <div className='footer'>
            <img src={bluewave} alt='wave' style={{ width: '100%' }} />
            <div className="f-content">
                <span>aranchipe98@gmail.com</span>
                <div className="f-icons">
                    <a target='blank' href='https://www.linkedin.com/in/lucas-aranchipe/'>
                        <Linkedin color='white' size='3rem' />

                    </a>
                    <a target='blank' href='https://github.com/aranchipe'>

                        <GitHub color='white' size='3rem' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer