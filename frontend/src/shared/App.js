import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Switch } from 'react-router'
import { renderRoutes } from 'react-router-config'

import routes from './routes'

function App() {
  return (
    <>
      <Helmet defaultTitle="Salestock" titleTemplate="%s – Ecommerce" />
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </>
  )
}

export default connect()(App)
