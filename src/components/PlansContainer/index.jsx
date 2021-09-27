import React from 'react'

import arrowRight from '../../assets/icons/arrow-right 1.svg'

import './PlansContainer.styl'

const PlanContainer = () => (
    <section id="plans" className="main-plans-container">
            <div className="plans--title">
                <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
            </div>
            <section className="plans-container--slider">
                <article className="plans-container--card">
                    <p className="recommended">Recomendado</p>
                    <div className="plan-info-container">
                        <h3 className="plan-card--title">Pago Anual</h3>
                        <p className="plan-card--prince"><span>$</span>99</p>
                        <p className="plan-card-saving">Ahorras $129 comprando al plan mensual</p>
                        <button type="button" className="plan-card--ca">Escoge este  <img src={arrowRight} alt="Arrow Right" /> </button>
                    </div>
                </article>
                <article className="plans-container--card">
                    <div className="plan-info-container">
                        <h3 className="plan-card--title">Pago Mensual</h3>
                        <p className="plan-card--prince"><span>$</span>120</p>
                        <p className="plan-card-saving">Cuotas mensuales de $12</p>
                        <button type="button" className="plan-card--ca">Escoge este  <img src={arrowRight} alt="Arrow Right" /></button>
                    </div>
                </article>
                <article className="plans-container--card">
                    <div className="plan-info-container">
                        <h3 className="plan-card--title">Pago Mensual</h3>
                        <p className="plan-card--prince"><span>$</span>120</p>
                        <p className="plan-card-saving">Cuotas mensuales de $12</p>
                        <button type="button" className="plan-card--ca">Escoge este  <img src={arrowRight} alt="Arrow Right" /></button>
                    </div>
                </article>
            </section>
        </section>
  )

export default PlanContainer
