import React from 'react'
import Nav from './Nav'

const App = (props) => (
  <div>
    <Nav />
    <div className="container">
      { props.children }
    </div>
  </div>
)

export default App
