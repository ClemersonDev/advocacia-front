import React, { useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Whats from '../../components/WpButton/WpButton';
import BtnTop from '../../components/TopoButton/TopoButton';
import ImgDireito from '../../assets/direito.png'
import { FaFacebookSquare, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './styles.css';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msgm, setMsgm] = useState('');

    function clearInput() {
        setName('');
        setEmail('');
        setPhone('');
        setMsgm('');
    }

    async function handleEmail(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            msgm,
        };

        try {
            const response = await api.post('emails', data);
            toast.success("Mensagem enviada! Retornaremos o mais breve possível.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
            clearInput();
        } catch (err) {
            toast.success("Mensagem enviada! Retornaremos o mais breve possível.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }

        try {
            const response =  await api.post('clients', data);
        } catch(err) {
            console.log(err);
        }
    }

    function onlynumber(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        //var regex = /^[0-9.,]+$/;
        var regex = /^[0-9.]+$/;
        if( !regex.test(key) ) {
           theEvent.returnValue = false;
           if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    return(
        <div id="contatoContainer">
            <Header />
            <BtnTop />
            <Whats />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            <div id="divisor1">
                <h1 id="labelContato">Contato</h1>
                <hr/>
            </div>
            
            <div id="contatoBox">
                <div id="contatoform">
                    <h1 id="label">Formulário de Contato</h1>
                    <br/><br/>
                    <p>Sempre preocupados em prestar o melhor serviço e atendimento,<br/> criamos esta área para ouvir suas sugestões, elogios e dúvidas.</p>
                    <br/><br/>
                    <p>Entre em contato através do formulário abaixo e deixe sua mensagem.</p>

                    <form onSubmit={handleEmail} method="post">
                        <div id="f1">
                            <div id="f2">
                                <input type="text" value={name} placeholder="Nome Completo" onChange={e => setName(e.target.value)}/><br/>
                                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/><br/>
                                <input placeholder="(99) 98888 8888" maxLength={11} value={phone} onKeyPress={onlynumber} onChange={e => setPhone(e.target.value)}/><br/> 
                            </div>
                            
                        </div>
                        <textarea type="text" placeholder="Sua mensagem" value={msgm} onChange={e => setMsgm(e.target.value)}/><br/>
                        <button type="submit">Enviar</button>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            closeButton={false}
                        />
                    </form>

                </div>

                <div id="sociaisBox">
                    <p>Acompanhe nossas redes sociais:</p>
                    <br/>
                    <div id="iconsBox">
                        <a id="link1" href="https://www.facebook.com/brenda.ribeiro.37604" target="_blank">
                            <FaFacebookSquare size={30}/>
                        </a>
                        <a href="https://instagram.com/mendes_brenda?igshid=wmpzbd23uhji" target="_blank">
                            <FaInstagram size={30}/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCdKz-DhsTU70EsmJq8Errhg/?guided_help_flow=5" target="_blank">
                            <FaYoutube size={30}/>
                        </a>
                        <a href="https://www.linkedin.com/in/mendes-e-magalhães-advocacia-85339b1b1/" target="_blank">
                            <FaLinkedin size={30}/>
                        </a>                  
                    </div>
                    <div id="imageBox">
                        <img src={ImgDireito} alt="Direito" />
                    </div>
                </div>

            </div>
            <Footer />

        </div>
        
    );
}