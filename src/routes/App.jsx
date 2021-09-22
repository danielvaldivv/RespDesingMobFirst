import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home/index'

import '../assets/css/styles.styl'


const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route component={Error404} /> */}
      </Switch>
    </BrowserRouter>
)

export default App
