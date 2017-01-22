import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import App from './components/App'
import NewUserForm from './components/users/NewUserForm'
import store from './store'

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={App} />
        <Route path="/users" component={NewUserForm} />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})
