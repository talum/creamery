import React from 'react'
import { Link } from 'react-router'
import IceCreamListContainer from '../components/iceCreams/IceCreamListContainer'

const App = () => (
  <div className="container">
    <div>
      <Link to='/users'>Sign Up</Link>
    </div>
    <IceCreamListContainer />
  </div>
)

export default App
