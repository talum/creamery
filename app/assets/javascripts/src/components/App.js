import React from 'react'
import Nav from './Nav'
import moment from 'moment'

const App = (props) => (
  <div>
    <Nav />
    <div className="site-layout">
      <div className="level level--has-background-image level--padding-xl" style={{backgroundImage: "url('/ice-cream-splash_3000.jpg')"}}>
        <div className="flex-grid flex-grid--thirds">
          <div className="flex-grid__item"/>
          <div className="flex-grid__item">
            <h1 className="heading heading--splash">Creamery</h1>
          </div>
          <div className="flex-grid__item" />
        </div>
      </div>
      <div className="site-layout__inner">
        { props.children }
      </div>
      <div className="site-footer">
        <div className='site-footer__inner'>
          <div className="flex-grid flex-grid--thirds">
            <div className="flex-grid__item"/>
            <div className="flex-grid__item">
              <h3 className="heading heading--level-3 heading--color-blue util--text-align-c">Made and maintained by Tracy Lum &#8212; Copyright { moment().format('YYYY') }</h3>
            </div>
            <div className="flex-grid__item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
