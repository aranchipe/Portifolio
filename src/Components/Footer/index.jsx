import './style.css'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'

function Footer({ escuro }) {
    return (
        <div className="footer">
            <div className='made'>
                <span style={{ color: 'white', fontWeight: 'bold' }}>Made by</span>
                <span>Lucas Leite Aranchipe</span>
            </div>
            <div className="f-icons">
                <a target='blank' href='https://www.linkedin.com/in/lucas-aranchipe/'>
                    <Linkedin color='white' size='3rem' />

                </a>
                <a target='blank' href='https://github.com/aranchipe'>
                    <GitHub color='white' size='3rem' />
                </a>

                <a target='blank' href='https://api.whatsapp.com/send?phone=5571999666438'>
                    <Whatsapp color='white' size='3rem' />
                </a>
            </div>
        </div>
    )
}

export default Footer