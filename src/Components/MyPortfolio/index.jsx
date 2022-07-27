import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import weAreCreatives from '../../img/we-are-creatives.png'
import projetoFinal from '../../img/projeto-final.png'
import cubosFlix from '../../img/cubos-flix.png'
import cubosPlayer from '../../img/cubos-player.png'
import desafio1 from '../../img/desafio1.jpg'
import mario from '../../img/mario.png'

function MyPortfolio({ escuro, setEscuro }) {
    return (
        <div className='portfolio' >
            {escuro ? <span style={{ color: 'white' }}>Projetos Recentes</span> : <span>Projetos Recentes</span>}
            <span>Portfólio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img style={{ height: '213px' }} src={projetoFinal} alt='sidebar' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Projeto-Final-Front-end'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a target='blank' href='https://sgf-customers.vercel.app/'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ height: '213px' }} src={cubosFlix} alt='ecommerce' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Cubos-Flix'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <img style={{ height: '213px' }} src={cubosPlayer} alt='musicapp' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Cubos-Player'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ height: '213px' }} src={weAreCreatives} alt='hoc' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Projetos-HTML-CSS/tree/master/WE%20ARE%20CREATIVES'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ height: '213px' }} src={desafio1} alt='hoc' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Projeto-Final-Modulo-1'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ height: '213px' }} src={mario} alt='hoc' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/mini-game-mario-react'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </SwiperSlide>

            </Swiper>

            <div
                className='portfolio-slider-mobile'
            >
                <div>
                    <img style={{ height: '213px' }} src={projetoFinal} alt='sidebar' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Projeto-Final-Front-end'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a target='blank' href='https://sgf-customers.vercel.app/'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </div>
                <div>
                    <img style={{ height: '213px' }} src={cubosFlix} alt='ecommerce' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Cubos-Flix'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </div>{" "}
                <div>
                    <img style={{ height: '213px' }} src={cubosPlayer} alt='musicapp' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Cubos-Player'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </div>
                <div>
                    <img style={{ height: '213px' }} src={weAreCreatives} alt='hoc' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Projetos-HTML-CSS/tree/master/WE%20ARE%20CREATIVES'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </div>
                <div>
                    <img style={{ height: '213px' }} src={desafio1} alt='hoc' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/Projeto-Final-Modulo-1'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </div>
                <div>
                    <img style={{ height: '213px' }} src={mario} alt='hoc' />
                    <div className='link'>
                        <a target='blank' href='https://github.com/aranchipe/mini-game-mario-react'>
                            <div style={!escuro ? { borderColor: 'black', color: 'black' } : { borderColor: 'white' }}>Github</div>
                        </a>
                        <a href='#portfolio'>
                            <div style={!escuro ? { color: 'black', borderColor: 'black' } : { color: 'white' }}>Demo</div>
                        </a>

                    </div>
                </div>

            </div>
            <div className='blur' style={{ background: 'var(--purple)', left: '50rem', top: '30rem' }}>

            </div>
            <div className='blur' style={{ background: '#ABF1FF94', top: '5rem', left: '26rem' }}>

            </div>
        </div>
    )
}

export default MyPortfolio