import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import {MdHighlightOff} from 'react-icons/md';
import logoImg from '../../assets/mmlogopronta.png';
import './HeaderStyles.css';
import '../../global.css';

export default function Header() {
    const [menu, setMenu] = useState(false)

    return(
        <header>        
            <button id="btn-menu"><FaAlignJustify id="btn-menu-icon" onClick={() => setMenu(!menu)}/></button>
            {menu && <div className="menu-alt">
                        <a className="btn-close" onClick={() => setMenu(!menu)}><MdHighlightOff/></a>
                        <div className="links">
                            <a href="/">Home</a><br/><br/>
                            <a href="/Sobre">Sobre</a><br/><br/>
                            <a href="/Servicos">Serviços</a><br/><br/>
                            {/*<a href="http://">Blog</a>*/}
                            <a href="/Contato">Contato</a><br/><br/>
                        </div>
                
                    </div>}
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