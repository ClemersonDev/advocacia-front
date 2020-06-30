import React from 'react';
import './WpButton.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function WpButton() {
    return(
        <div>
            <a href="https://api.whatsapp.com/send?phone=5575991656908" target="_blank" id="whats">
                <FaWhatsapp id="icon" />
            </a>
        </div>
    );
}