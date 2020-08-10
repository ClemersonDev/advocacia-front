import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Img from '../../assets/MMtransp.png';
import Whats from '../../components/WpButton/WpButton';
import BtnTop from '../../components/TopoButton/TopoButton';

import './styles.css';

export default function Sobre() {
    return (
        <div id="sobreContainer">
            <Header />
            <Whats />
            <BtnTop />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div id="sobreBox">
                <div id="divisor">
                    <h1 id="servicoTitle">Sobre</h1>   
                    <hr/>
                </div>
                <br/><br/>
                <div id="equipe">                    
                    <h1 id="equipeTitle">O escritório</h1>
                    <div id="about">
                        <img src={Img} alt="M&M" />
                        <div id="div1">
                            <p>Constituído com muita seriedade, ética, organização, profissionalismo e compromisso com a justiça, o escritório Mendes e Magalhães Advocacia e Consultoria Jurídica presta serviços voltados para pessoas físicas e pessoas jurídicas, públicas ou privadas, notadamente sindicatos, prefeituras, dentre outros órgãos e entidades de extrema relevância.</p>
                            <br/>
                            <p>Com vasta experiência no estudo e aplicação do direito em vários dos seus ramos, nosso escritório conta com estrutura tecnológica de grande operacionalidade, estando devidamente aparelhado e estruturado de acordo com as melhores orientações normativas, buscando oferecer seus serviços com a máxima excelência.</p>
                        </div>
                                                                   
                    </div>
                    <div id="div2">
                        <br/>
                        <p id="p1">O escritório tem como norte a dedicação e a qualidade não só na prestação dos serviços, mas, também, no tratamento dispensado aos nossos clientes, buscando trazer informações de forma clara, coerente e verdadeira. O escritório Mendes e Magalhães Advocacia e Consultoria Jurídica também busca estar sempre atualizado às dinâmicas jurisprudenciais brasileiras, buscando, com planejamento e organização, as melhores soluções jurídicas para os mais variados casos a que são submetidos. </p> 
                    </div>                    
                    <div id="propriedades">
                        <div>
                            <h1>Missão</h1>
                            <p style={{marginBottom: 30}}>Prestar serviços jurídicos com excelência, buscando as melhores e mais justas soluções para os casos jurídicos dos nossos clientes. </p>
                        </div>
                        <div>
                            <h1>Visão</h1>
                            <p style={{marginBottom: 30}}>Ser referência nas áreas em que atua, sendo sempre reconhecido pelos seus clientes como uma empresa moderna, inovadora e eficiente.</p>
                        </div>
                        <div>
                            <h1>Valores</h1>
                            <p style={{marginBottom: 70}}>Ética, comprometimento, transparência, dedicação e qualidade.</p>
                        </div>

                    </div>                    
                    
                    <h1 id="equipeTitle">A equipe</h1>
                    <br/><br/><br/>
                    <div id="colab">
                        <div>
                            <h3>MATHEUS CAIRO PEREIRA MAGALHÃES</h3>
                            <a href="mailto:mendesemagalhaes.adv@outlook.com" target="_blanc">mendesemagalhaes.adv@outlook.com</a>
                            
                            <br/>
                            <p>Pós-graduado em Direito Previdênciário</p>
                            <p>Pós-graduado em Direito Constitucional</p>
                            <p>Formado em Direito pela Universidade AGES (UNIAGES).<br/>Advogado inscrito na OAB-BA sob o nº 62.524</p>
                            <hr/>
                        </div>

                        <div>
                            <h3>BRENDA MENDES RIBEIRO</h3>
                            <a href="mailto:mendesemagalhaes.adv@outlook.com" target="_blanc">mendesemagalhaes.adv@outlook.com</a>
                            
                            <br/>
                            <p>Pós-graduado em Direito Previdênciário</p>
                            <p>Formada em Direito pela Universidade AGES (UNIAGES).<br/>Advogado inscrito na OAB-BA sob o nº 60.645</p>
                            <hr/>
                        </div>

                        <div>
                            <h3>LARA LORRANE ARAÚJO SOUZA</h3>
                            <a href="mailto:mendesemagalhaes.adv@outlook.com" target="_blanc">mendesemagalhaes.adv@outlook.com</a>
                            
                            <br/>
                            <p>Secretária do escritório Mendes e Magalhães Advocacia.<br/>Especializada em informática e secretariado.</p>
                            <hr/>
                        </div>                     
                    </div>
                    <br/><br/><br/><br/><br/>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}