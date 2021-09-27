import React from 'react'

import ExchangeContainer from '../../components/ExchangeContainer'
import PlanContainer from '../../components/PlansContainer'
import ProductDetail from '../../components/ProductDetail'

import bitcoinGirl from'../../assets/imgs/fondo-bitcoin.jpg'

import './Main.styl'

const Main = () =>  (
    <main>
        <ExchangeContainer />
        <ProductDetail />
        <section className="picture">
            <img
                className="bitcoin-img-container"
                src={bitcoinGirl}
                alt="Girl"
            />
            <h2>¡Conócelo hoy!</h2>
        </ section>
        <PlanContainer/>
    </main>
  )

export default Main
