import './style.css'

function Floatingdiv({ image, txt1, txt2, nome }) {
    return (
        <div className='floatingdiv'>
            <img src={image} alt='imagem' />
            <span style={{ color: 'black' }}>
                {txt1}
                <br />
                {txt2}
            </span>
        </div>
    )
}

export default Floatingdiv