import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

class App extends React.Component {
  render () {
    return (<div>Hello World</div>)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={browserHistory} >
      <Route path="/" component={App} />
      </Router>,
    document.getElementById('root')
  )
})
