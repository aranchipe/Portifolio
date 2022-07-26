import './style.css'
import { useState, useRef } from 'react'
import closePreto from '../../img/close-preto-redondo.png'
import closeBranco from '../../img/close-branco-redondo.png'
import setaDireitaPreta from '../../img/seta-direita-preta.png'
import setaDireitaBranca from '../../img/seta-direita-branca.png'
import setaEsquerdaPreta from '../../img/seta-esquerda-preta.png'
import setaEsquerdaBranca from '../../img/seta-esquerda-branca.png'
import { projetos } from '../../projects/projetos'

function MyPortfolio({ escuro }) {
    const [mostrarVideo, setMostrarVideo] = useState(false)
    const [video, setVideo] = useState()
    const carrossel = useRef(null)

    function handleAntes(e) {
        e.preventDefault()
        carrossel.current.scrollLeft -= 513
    }
    function handleProximo(e) {
        e.preventDefault()
        carrossel.current.scrollLeft += 513

    }

    return (
        <div className={escuro ? 'portfolio portfolio-escuro' : 'portfolio'} >
            {escuro ? <span style={{ color: 'white' }}>Projetos Recentes</span> : <span>Projetos Recentes</span>}
            <span>Portfólio</span>

            {mostrarVideo &&
                <div className='video'>
                    <video
                        id='my-player'
                        controls
                        preload='auto'
                        width='857.14'
                        height='500'
                    >
                        <source src={video} type='video/mp4'></source>
                    </video>
                    <img onClick={() => setMostrarVideo(false)} src={!escuro ? closePreto : closeBranco} alt='close' />
                </div>
            }

            <div className='carrossel-body'>
                <img style={{ width: '30px', cursor: 'pointer', marginBottom: '2rem' }} onClick={handleAntes} src={escuro ? setaEsquerdaBranca : setaEsquerdaPreta} alt='antes' />
                <div className='carrossel' ref={carrossel}>
                    {projetos.map((item) => (
                        <div style={{ textAlign: ' center' }} key={item.id}>
                            <img onClick={() => { setMostrarVideo(true); setVideo(item.video) }} style={{ height: '300px', width: '513px' }} src={item.src} alt='sidebar' />

                            <div style={{ marginBottom: '1rem' }} className='link'>
                                <a target='blank' href={item.github}>
                                    <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>{item.back ? 'Frontend' : 'Github'}</div>
                                </a>
                                {item.back &&
                                    <a target='blank' href={item.back}>
                                        <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Backend</div>
                                    </a>
                                }

                                {item.site &&
                                    <a target='blank' href={item.site}>
                                        <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Site</div>
                                    </a>
                                }
                                <div className='video-btn' onClick={() => { setMostrarVideo(true); setVideo(item.video) }} style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Vídeo</div>
                            </div>
                        </div>
                    ))}

                </div>
                <img style={{ width: '30px', cursor: 'pointer', marginBottom: '2rem' }} onClick={handleProximo} src={escuro ? setaDireitaBranca : setaDireitaPreta} alt='proximo' />
            </div>

            <div className='portfolio-mobile'>
                {projetos.map((item) => (
                    <div key={item.id} className='video-mobile'>
                        <video
                            id='my-player'
                            controls
                            preload='auto'
                            poster={item.src}
                        >
                            <source src={item.video} type='video/mp4'></source>
                        </video>
                        <div style={{ marginBottom: '1rem' }} className='link'>
                            <a target='blank' href={item.github}>
                                <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>{item.back ? 'Frontend' : 'Github'}</div>
                            </a>
                            {item.back &&
                                <a target='blank' href={item.back}>
                                    <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Backend</div>
                                </a>
                            }

                            {item.site &&
                                <a target='blank' href={item.site}>
                                    <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Site</div>
                                </a>
                            }
                        </div>
                    </div>

                ))}

            </div>
            <div className='blur' style={{ background: 'var(--purple)', left: '50rem', top: '30rem' }}>

            </div>
            <div className='blur' style={{ background: '#ABF1FF94', top: '5rem', left: '26rem' }}>

            </div>
        </div >
    )
}

export default MyPortfolio