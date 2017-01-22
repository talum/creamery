import React from 'react'
import { showParlors } from '../../actions/parlors'

class Parlors extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(showParlors())
  }

  render() {
    return(
      <div>
        <h1>Hooked up some parlors!</h1>
        Parlors
      </div>
    )
  }
}

export default Parlors
