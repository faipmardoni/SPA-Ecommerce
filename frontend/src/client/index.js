import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import apiCall from './utils/api'
import promiseMiddleware from './utils/promise'
import shuttleMiddleware from './utils/shuttle'
import { configureStore } from '../shared/store'
import App from '../shared/App'

const preloadedState = window.__PRELOADED_STATE__
const promise = promiseMiddleware(
  apiCall(preloadedState.cookie || '')
)
const shuttle = shuttleMiddleware(preloadedState.host)
const store = window.store || configureStore({
  initialState: preloadedState,
  middleware: [shuttle, promise],
})
hydrate(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }

  if (!window.store) {
    window.store = store
  }
}
