import React from 'react'

import batataLogo from '../../assets/icons/batata-logo.svg'

import clock from '../../assets/icons/clock 1.svg'
import eye from '../../assets/icons/eye1.svg'
import dolar from '../../assets/icons/dollar-sign 1.svg'
import circle from '../../assets/icons/check-circle 1.svg'

import './ProductDetail.styl'

const ProductDetail = () => (
    <section className="main-product-detail">
            <img className="product-detail--batata-logo" src={batataLogo} alt="Batata Logo" />
            <div className="product-detail--title">
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>
            <section className="product-cards--container">
                <article className="product-detail--card">
                    <img className="icon" src={clock} alt="Clock Icon" />
                    <p className="product--card-title">Tiempo real</p>
                    <p className="product--card-body">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
                </article>
                <article className="product-detail--card">
                    <img className="icon" src={eye} alt="Eye Icon" />
                    <p className="product--card-title">No hay tasas escondidas</p>
                    <p className="product--card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
                </article>
                <article className="product-detail--card">
                    <img className="icon" src={dolar} alt="Dolar Icon" />
                    <p className="product--card-title">Compara monedas</p>
                    <p className="product--card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
                </article>
                <article className="product-detail--card">
                    <img className="icon" src={circle} alt="Circle Icon" />
                    <p className="product--card-title">Información confiable</p>
                    <p className="product--card-body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
                </article>
            </section>
        </section>
  )

export default ProductDetail
