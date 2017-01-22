import React from 'react'
import { Link } from 'react-router'

const App = (props) => (
  <div>
    <nav>
      <div className="nav-wrapper deep-purple darken-4">
        <div className="brand-logo">Creamery</div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/users'>Sign Up</Link></li>
          <li><Link to='/parlors'>Parlors</Link></li>
        </ul>
      </div>
    </nav>
    <div className="container">
      { props.children || "hello"}
    </div>
  </div>
)

export default App
