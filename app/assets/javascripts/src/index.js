import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import App from './components/App'
import NewUserForm from './components/users/NewUserForm'
import IceCreamListContainer from './components/iceCreams/IceCreamListContainer'
import IceCreamDetail from './components/iceCreams/IceCreamDetail'
import ParlorsContainer from './components/parlors/ParlorsContainer'
import ParlorContainer from './components/parlors/Parlor'
import LoginPage from './components/sessions/loginPage'
import store from './store'

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={App}>
          <IndexRoute component={IceCreamListContainer} />
          <Route path="/ice-creams/:id" component={IceCreamDetail} />
          <Route path="/users" component={NewUserForm} />
          <Route path="/login" component={LoginPage} />
          <Route path="/parlors" component={ParlorsContainer} />
          <Route path="/parlors/:id" component={ParlorContainer} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})
