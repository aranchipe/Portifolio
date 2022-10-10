import './style.css'
import { useState, useRef } from 'react'
import closePreto from '../../img/close-preto-redondo.png'
import closeBranco from '../../img/close-branco-redondo.png'
import setaDireitaPreta from '../../img/seta-direita-preta.png'
import setaDireitaBranca from '../../img/seta-direita-branca.png'
import setaEsquerdaPreta from '../../img/seta-esquerda-preta.png'
import setaEsquerdaBranca from '../../img/seta-esquerda-branca.png'
import { certificados } from '../../certificados/certificados'

function Certificados({ escuro, setEscuro }) {

    const carrossel = useRef(null)
    const [showCertificado, setShowCertificado] = useState(false)
    const [certificado, setCertificado] = useState()

    function handleAntes(e) {
        e.preventDefault()
        carrossel.current.scrollLeft -= 513
    }

    function handleProximo(e) {
        e.preventDefault()
        carrossel.current.scrollLeft += 513

    }
    return (
        <div className='certificados'>

            <span>Certificados</span>

            {showCertificado &&
                <div className='certificado'>
                    <img src={certificado} />
                    <img onClick={() => setShowCertificado(false)} src={!escuro ? closePreto : closeBranco} alt='close' />

                </div>
            }

            <div className='carrossel-body'>
                <img className='seta' style={{ width: '30px', cursor: 'pointer', marginBottom: '2rem' }} onClick={handleAntes} src={escuro ? setaEsquerdaBranca : setaEsquerdaPreta} alt='antes' />
                <div className='carrossel' ref={carrossel}>
                    {certificados.map((item) => (
                        <div style={{ textAlign: ' center' }} key={item.id}>
                            <img style={{ height: '300px', width: '513px' }} src={item.src} alt='sidebar' onClick={() => { setShowCertificado(true); setCertificado(item.src) }} />


                        </div>
                    ))}

                </div>
                <img className='seta' style={{ width: '30px', cursor: 'pointer', marginBottom: '2rem' }} onClick={handleProximo} src={escuro ? setaDireitaBranca : setaDireitaPreta} alt='proximo' />
            </div>
        </div>
    )
}

export default Certificados