import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BtnTop from '../../components/TopoButton/TopoButton';
import './styles.css';
import '../../global.css';
import Image from '../../assets/MMtransp.png';
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Icon4 from '../../assets/icon4.png';
import Icon5 from '../../assets/icon5.png';
import Icon6 from '../../assets/icon6.png';
import Whats from '../../components/WpButton/WpButton';
import api from '../../services/api';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    
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
            toast.success("Erro ao enviar a mensagem, tente novamente!", {
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
        <div id="homeContainer">
            <Header />
            <BtnTop/>
            <Whats />
            <div id="homeBox">
                
                <div id="sectionBox">
                    <img src={Image} alt="LogoMM"/>
                    <div id="divP">
                        <p id='a'>Insira os seus dados</p>
                        <p id='b'>Digite a mensagem desejada</p>
                        <p id='c'>Retornaremos o mais breve possível.</p>
                    </div>
                    
                </div>
                <div id="formContainer">
                    <form onSubmit={handleEmail} method="post">
                        <input type="text" placeholder="Nome completo" value={name} onChange={e => setName(e.target.value)}/><br/>
                        <input placeholder="(99) 99988 8888" maxLength={11} value={phone} onKeyPress={onlynumber} onChange={e => setPhone(e.target.value)} /><br/>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/><br/>
                        <textarea value={msgm} onChange={e => setMsgm(e.target.value)} type="text" placeholder="Sua mensagem"/><br/>
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
            </div>

            <hr/>
            <h1 id="labelAreas">Áreas de atuação</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <img src={Icon1} alt="icon"/>
                    <h4>Direito Previdenciário</h4>
                    <p>Acompanhamento em pedidos administrativos e judiciais de aposentadoria por idade, aposentadoria por invalidez, auxílio doença, aposentadoria por tempo de contribuição, aposentadoria especial, auxílio-acidente, auxílio reclusão, pensão por morte, salário maternidade, benefício assistencial de prestação continuada (BPC). Nosso escritório tem atuação nacional.</p>
                </div>

                <div className="grid-item">
                    <img src={Icon2} alt="icon"/>
                    <h4>Direito do Trabalho</h4>
                    <p>Acompanhamento de causas, individuais e coletivas e defesa e em reclamações trabalhistas, no âmbito das diversas instâncias da Justiça do Trabalho. Bem como a defesa e acompanhamento em processos administrativos relacionados com a aplicação da legislação trabalhista, em tramitação perante o Ministério Público do Trabalho ou Ministério do Trabalho. Nosso escritório tem atuação nacional.</p>
                </div>

                <div className="grid-item">
                    <img src={Icon3} alt="icon"/>
                    <h4>Direito Civil</h4>
                    <p>Assessoria jurídica em todos os ramos do Direito Civil, como direito de família, sucessões, contratual, direito das coisas, Imobiliário, com acompanhamento integral de processos judiciais em todas as instâncias, desenvolvendo advocacia preventiva e contenciosa, com consultoria e pareceres em matéria de natureza cível. Nosso escritório tem atuação nacional.</p>
                </div>  

                <div className="grid-item">
                    <img src={Icon4} alt="icon"/>
                    <h4>Criminal</h4>
                    <p>Pedido de Liberdade, Habeas Corpus, Delegacias, Audiência de Custódia. Tráfico de drogas, furto, roubo, violência doméstica, receptação, estelionato e processos criminais em geral.</p>
                </div>

                <div className="grid-item">
                    <img src={Icon5} alt="icon"/>
                    <h4>Direito Administrativo</h4>
                    <p>Assessoria jurídica no ramo do Direito Administrativo com atuação na esfera judicial e administrativa, desenvolvendo advocacia preventiva e/ou contenciosa, abrangendo matérias relativas a Licitações, Contratos Administrativos, concursos públicos. Nosso escritório tem atuação nacional.</p>
                </div>

                <div className="grid-item">
                    <img src={Icon6} alt="icon"/>
                    <h4>Direito do Consumidor</h4>
                    <p>Acompanhamento de ações judiciais envolvendo conflitos de interesse em decorrência de relação de consumo, como problemas em relação a planos de saúde, bancos, e empresas de telefonia. Nosso escritório tem atuação nacional.</p>
                </div>  
            </div>
            <Footer />
        </div>
    );
}