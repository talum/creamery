import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import IceCreamListContainer from './components/IceCreamListContainer'
import store from './store'


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
