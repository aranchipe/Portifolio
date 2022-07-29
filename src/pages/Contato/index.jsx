import './style.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../pages/Home/style.css'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer'

function Contato({ escuro, setEscuro, barra, setBarra }) {
    const form = useRef();
    const [form1, setForm1] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })
    const [feito, setFeito] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_37mce5c', 'template_czv4bcn', form.current, '1KxeC8nYtXoyp1JOK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setForm1({
            user_name: '',
            user_email: '',
            message: ''
        })
        setFeito(true)
        setTimeout(() => {
            setFeito(false)
        }, 4000)

    };

    function handleChangeInput(e) {
        setForm1({ ...form1, [e.target.name]: e.target.value })
    }


    return (
        <div className='contato-form' style={escuro === true ? {
            background: 'black',
            color: 'white'
        } : {
            background: '',
            color: ''
        }}>
            <Navbar page='contato' barra={barra} setBarra={setBarra} escuro={escuro} setEscuro={setEscuro} />

            <div className="contato-content">
                <div className="c-left">
                    {escuro ? <span style={{ color: 'white' }}>Fale</span> : <span>Fale</span>}
                    <span>Comigo</span>
                    {<div
                        className='blur s-blur1'
                        style={{ background: '#ABF1FF94' }}
                    ></div>}
                </div>

                <div className='c-right'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            onChange={handleChangeInput}
                            type='text'
                            name='user_name'
                            className='user'
                            placeholder='Nome'
                            value={form1.user_name}
                        />
                        <input
                            onChange={handleChangeInput}
                            type='email'
                            name='user_email'
                            className='user'
                            placeholder='Email'
                            value={form1.user_email}
                        />
                        <textarea
                            onChange={handleChangeInput}
                            name='message'
                            className='user'
                            placeholder='Mensagem'
                            value={form1.message}
                        />
                        {feito && <span>Obrigado pelo contato</span>}
                        <button type='submit' className='button c-button'>Enviar</button>
                        <div
                            className='blur c-blur1'
                            style={{ background: 'var(--purple)' }}
                        ></div>

                    </form>
                </div>
            </div>


            <div style={{ overflowY: 'hidden', marginTop: '4rem' }}>
                <Footer />

            </div>
        </div>
    )
}

export default Contato