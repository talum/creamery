import React from 'react'
import Nav from './Nav'

const App = (props) => (
  <div>
    <Nav />
    <div className="site-layout">
      <div className="site-layout__inner">
        { props.children }
      </div>
    </div>
  </div>
)

export default App
