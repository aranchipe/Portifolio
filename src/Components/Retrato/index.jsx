import './style.css'

function Retrato({ escuro, imagem, texto }) {
    return (
        <div style={escuro ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }} className='retrato'>
            <img src={imagem} alt='retrato' />

        </div>
    )
}

export default Retrato 