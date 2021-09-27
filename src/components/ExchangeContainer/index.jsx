import React from 'react'
import bitcoinIcon from '../../assets/icons/bitcoin.svg'

import './ExchangeContainer.styl'
import up from '../../assets/icons/trending-up 1.svg'
import down from '../../assets/icons/trending-down 1.svg'

const ExchangeContainer = () => (
    <section className="main-exchange-container">
        <img
            src={bitcoinIcon}
            alt="Bitcoin Icon"
            width='200px'
            height='200px'
        />
        <div className="main-exchange-container--title">
            <h2>Visibilizamos todas las tasas de cambio.</h2>
            <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
        </div>
        <section className="main-tables-container">
            <div className="main-currency-table">
                <p className="currency-table--title">Monedas</p>
                <div className="currency-table--container">
                    <table>
                        <tr>
                            <td className="table__top-left">Bitcoin</td>
                            <td className="table__top-right table__right">$ 1.96<img className="upDown" src={down} alt="downIcon" /></td>
                        </tr>
                        <tr>
                            <td>Ethereum</td>
                            <td className="table__right">$ 0.07 <img className="upDown" src={up} alt="upIcon" /></td>
                        </tr>
                        <tr>
                            <td>Ripple</td>
                            <td className="table__right">$ 2.15 <img className="upDown" src={down} alt="downIcon" /></td>
                        </tr>
                        <tr>
                            <td className="table__bottom-left">Stellar</td>
                            <td className="table__bottom-right table__right">$4.96 <img className="upDown" src={down} alt="downIcon" /></td>
                        </tr>
                    </table>
                </div>
                <div className="currency-table__date">
                    <p><b>Actualizado:</b> 19 Julio 23:45</p>
                </div>
            </div>
            <div className="main-currency-table">
                <p className="currency-table2--title">Comisiones</p>
                <div className="currency-table--container">
                    <table>
                        <tr>
                            <td className="table__top-left">Bitrade</td>
                            <td className="table__top-right table__right">$ 12.96</td>
                        </tr>
                        <tr>
                            <td>Bitpreco</td>
                            <td className="table__right">$ 13.07</td>
                        </tr>
                        <tr>
                            <td>Novadax</td>
                            <td className="table__right">$ 13.15</td>
                        </tr>
                        <tr>
                            <td className="table__bottom-left">Coinext</td>
                            <td className="table__bottom-right table__right">$14.96 </td>
                        </tr>
                    </table>
                </div>
                <div className="currency-table2__date">
                    <p><b>Actualizado:</b> 19 Julio 23:45</p>
                </div>
            </div>
        </section>
    </section>
)

export default ExchangeContainer
