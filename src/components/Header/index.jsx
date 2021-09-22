import React from "react"

import logo1 from '../../assets/imgs/logo1.svg'

import './Header.styl'

const Header = () =>  (
  <header>
    <img src={logo1} alt="Logo" />
    <div className="header--title-container">
        <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
        <p>Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
        <a href="#plans" className="header--button">Conoce Nuestros Planes <span /></a>
    </div>
  </header>
)

export default Header
