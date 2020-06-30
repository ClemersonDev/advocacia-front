import React from 'react';
import logoImg from '../../assets/mmlogopronta.png';
import './HeaderStyles.css';
import '../../global.css';

export default function Header() {
    return(
        <header>
            <div id="headerBox">
                <div id="logoHeaderBox" >
                    <img src={logoImg} alt="MM Advocacia"/>
                </div>

                <div id="linksHeaderBox">
                    <ul id="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/Sobre">Sobre</a></li>
                        <li><a href="/Servicos">Serviços</a></li>
                        {/*<li><a href="http://">Blog</a></li>*/}
                        <li><a href="/Contato">Contato</a></li>
                    </ul>
                </div>
            </div>            
        </header>
    );
}