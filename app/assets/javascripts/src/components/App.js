import React from 'react'
import Nav from './Nav'

const App = (props) => (
  <div>
    <Nav />
    <div className="level level--has-background-image level--padding-xl" style={{backgroundImage: "url('http://localhost:3000/assets/ice-cream-splash.jpg')"}}>
      <div className="flex-grid">
        <div className="flex-grid__item"/>
        <div className="flex-grid__item">
          <h1 className="heading heading--splash">Creamery</h1>
        </div>
        <div className="flex-grid__item" />
      </div>
    </div>
    <div className="site-layout">
      <div className="site-layout__inner">
        { props.children }
      </div>
    </div>
  </div>
)

export default App
