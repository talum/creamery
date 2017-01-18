import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import creameryApp from './reducers.js'
import IceCreamListContainer from './components/IceCreamListContainer'

let store = createStore(creameryApp)

const App = () => (
  <IceCreamListContainer />
)

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})
