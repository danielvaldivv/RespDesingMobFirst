import React from "react"

import logo1 from '../../assets/imgs/logo1.svg'
import arrowDown from '../../assets/icons/arrow_down.svg'

import './Header.styl'

const Header = () =>  (
  <header>
    <img src={logo1} alt="Logo" />
    <div className="header--title-container">
        <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
        <p>Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
        <a href="#plans" className="header--button">Conoce Nuestros Planes <img className="arrowDown" src={arrowDown} alt="ArrowDown" /></a>
    </div>
  </header>
)

export default Header
