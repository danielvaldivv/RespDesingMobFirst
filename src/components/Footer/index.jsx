import React from 'react'

import Logo from '../../assets/icons/batata-logo.svg'

import './Footer.styl'

const Footer = () => (
    <footer>
        <section className="left">
            <ul>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Crunchbase</a></li>
                <li><a href="#">Hacekrnews</a></li>
            </ul>
        </section>
        <section className="right"><img src={Logo} alt="Logo de Batatabit" /></section>
    </footer>
)

export default Footer
