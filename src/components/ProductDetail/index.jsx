import React from 'react'

const ProductDetail = () => (
    <section className="main-product-detail">
            <span className="product-detail--batata-logo" />
            <div className="product-detail--title">
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>
            <section className="product-cards--container">
                <article className="product-detail--card">
                    <span className="clock" />
                    <p className="product--card-title">Tiempo real</p>
                    <p className="product--card-body">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
                </article>
                <article className="product-detail--card">
                    <span className="eye" />
                    <p className="product--card-title">No hay tasas escondidas</p>
                    <p className="product--card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
                </article>
                <article className="product-detail--card">
                    <span className="dolar" />
                    <p className="product--card-title">Compara monedas</p>
                    <p className="product--card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
                </article>
                <article className="product-detail--card">
                    <span className="circle" />
                    <p className="product--card-title">Información confiable</p>
                    <p className="product--card-body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
                </article>
            </section>
        </section>
  )

export default ProductDetail
