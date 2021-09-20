import React from 'react'

import ExchangeContainer from '../../components/ExchangeContainer'
import PlanContainer from '../../components/PlansContainer'
import ProductDetail from '../../components/ProductDetail'

const Main = () =>  (
    <main>
        <ExchangeContainer />
        <ProductDetail />
        <section className="bitcoin-img-container">
            <h2>¡Conócelo hoy!</h2>
        </section>
        <PlanContainer/>
    </main>
  )

export default Main
