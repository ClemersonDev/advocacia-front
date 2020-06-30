import 'dotenv';
import React from 'react';
import './FooterStyles.css';
import logo from '../../assets/mmlogoprontatransp.png';
import { FaFacebookSquare, FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Map from '../Map/Map';

export default function Footer() {
    
    return (
        <footer>
            <div id="footerBox">
                <div id="box1">
                    <img src={logo} alt="MM Advocacia"/>
                    <div id="iconBox">
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
                        <a href="http://">
                            <FaMapMarkerAlt size={30}/>
                        </a>                  
                    </div>
                    <br/> 
                    <br/>                 
                    <p>© Mendes e Magalhães - Advocacia e<br/> consultoria jurídica | Todos os direitos<br/> reservados</p>
                </div>

                <div id="box2">
                    <h3>Fale Conosco</h3>
                    <br/>
                    <p>Rua João Fernandes da Gama<br />Rua da Ribeira, ao lado da Consul<br />Centro, CEP 48400-000<br />Ribeira do Pombal, Bahia, Brasil</p><br/>
                    <FiMail />    
                    mendesemagalhaes.adv@outlook.com<br/>
                    <br/>   
                    <FaWhatsapp />
                    74 99803.0524<br/>
                    <br/>
                    <FaWhatsapp />
                    75 99165.6908 
                </div>

                <div id="box3" style={{width: '500px', height: '250px'}}>
                    <Map
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}`}
                        loadingElement={ <div style={{ height: "100%" }} /> }
                        containerElement={ <div style={{ height: "100%" }} /> }
                        mapElement={ <div style={{ height: "100%" }} /> }
                    />
                </div>

            </div>

        </footer>
    );
}