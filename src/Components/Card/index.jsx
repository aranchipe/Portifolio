import './style.css'

function Card({ image, title, html, modal, txt }) {
    return (
        <div className={html === 'html' || modal ? 'html card texto' : 'card'}>

            {!modal && <img src={image} alt='imagem3' />}
            {!modal && <span style={{ fontWeight: 'bold' }}>{title}</span>}
            {modal && title !== 'Github' ? <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{txt}</span> : ''}
            {modal && title === 'Github' ? <a style={{ color: 'var(--orange)', textDecoration: 'none' }} target='blank' href='https://github.com/aranchipe'>Meu Github</a> : ''}
        </div>
    )
}

export default Card