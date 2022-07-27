import './style.css'

function Card({ image, title, html, modal, txt1, txt2, txt3, txt4, txt5, semPonto }) {
    return (
        <div className={html && !modal ? 'html card' : modal ? ' card texto' : 'card'}>

            {!modal && <img src={image} alt='imagem3' />}
            {!modal && <span>{title}</span>}
            {modal && title !== 'Github' && semPonto ?
                <span>{txt1}</span>
                : ''}
            {modal && title !== 'Github' && !semPonto ?
                <ul
                >
                    <li>{txt1}</li>
                    {txt2 && <li >{txt2}</li>}
                    {txt3 && <li >{txt3}</li>}
                    {txt4 && <li >{txt4}</li>}
                </ul>
                :
                ''
            }
            {modal && title !== 'Github' ? <span>{txt5}</span> : ''}
            {modal && title === 'Github' ? <a style={{ color: 'var(--orange)', textDecoration: 'none' }} target='blank' href='https://github.com/aranchipe'>Meu Github</a> : ''}
        </div>
    )
}

export default Card