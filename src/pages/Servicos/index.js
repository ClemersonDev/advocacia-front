import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Whats from '../../components/WpButton/WpButton';
import BtnTop from '../../components/TopoButton/TopoButton';
import './styles.css';
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Icon4 from '../../assets/icon4.png';
import Icon5 from '../../assets/icon5.png';
import Icon6 from '../../assets/icon6.png';

export default function Servicos(){
    return(
        <div id="servicoContainer">
            <Header />
            <BtnTop />
            <Whats />
            <div id="servicosBox">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div id="divisor">
                    <h1 id="servicoTitle">Serviços</h1>   
                    <hr/>
                </div>
                <br/><br/><br/>
                <h1 id="atuacao">Áreas de atuação</h1>
                <br/><br/>

                <div class="grid-container">
                    <div class="grid-item">
                        <img src={Icon1} alt="icon"/>
                        <h4>Direito Previdênciário</h4>
                        <p>Acompanhamento em pedidos administrativos e judiciais de aposentadoria por idade, aposentadoria por invalidez, auxílio doença, aposentadoria por tempo de contribuição, aposentadoria especial, auxílio-acidente, auxílio reclusão, pensão por morte, salário maternidade, benefício assistencial de prestação continuada (BPC). Nosso escritório tem atuação nacional.</p>
                    </div>

                    <div class="grid-item">
                        <img src={Icon2} alt="icon"/>
                        <h4>Direito do Trabalho</h4>
                        <p>Acompanhamento de causas, individuais e coletivas e defesa e em reclamações trabalhistas, no âmbito das diversas instâncias da Justiça do Trabalho. Bem como a defesa e acompanhamento em processos administrativos relacionados com a aplicação da legislação trabalhista, em tramitação perante o Ministério Público do Trabalho ou Ministério do Trabalho. Nosso escritório tem atuação nacional.</p>
                    </div>

                    <div class="grid-item">
                        <img src={Icon3} alt="icon"/>
                        <h4>Direito Civil</h4>
                        <p>Assessoria jurídica em todos os ramos do Direito Civil, como direito de família, sucessões, contratual, direito das coisas, Imobiliário, com acompanhamento integral de processos judiciais em todas as instâncias, desenvolvendo advocacia preventiva e contenciosa, com consultoria e pareceres em matéria de natureza cível. Nosso escritório tem atuação nacional.</p>
                    </div>  

                    <div class="grid-item">
                        <img src={Icon4} alt="icon"/>
                        <h4>Criminal</h4>
                        <p>Pedido de Liberdade, Habeas Corpus, Delegacias, Audiência de Custódia. Tráfico de drogas, furto, roubo, violência doméstica, receptação, estelionato e processos criminais em geral.</p>
                    </div>

                    <div class="grid-item">
                        <img src={Icon5} alt="icon"/>
                        <h4>Direito Administrativo</h4>
                        <p>Assessoria jurídica no ramo do Direito Administrativo com atuação na esfera judicial e administrativa, desenvolvendo advocacia preventiva e/ou contenciosa, abrangendo matérias relativas a Licitações, Contratos Administrativos, concursos públicos. Nosso escritório tem atuação nacional.</p>
                    </div>

                    <div class="grid-item">
                        <img src={Icon6} alt="icon"/>
                        <h4>Direito do Consumidor</h4>
                        <p>Acompanhamento de ações judiciais envolvendo conflitos de interesse em decorrência de relação de consumo, como problemas em relação a planos de saúde, bancos, e empresas de telefonia. Nosso escritório tem atuação nacional.</p>
                    </div>  
                </div>
                <div id="contatoBox1">
                    <div id="box1">
                        <p><b>Precisa de um advogado? Nós podemos te ajudar!</b></p>
                        <p>Entre em contato agora mesmo</p>
                    </div>
                    <div id="btnBox">
                        <a href="/">Entre em contato</a>
                    </div>           

                </div>
            </div>
            <Footer />
        </div>
    );
}