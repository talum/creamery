import React from 'react'
import { showParlors } from '../../actions/parlors'
import NewParlorForm from '../parlors/NewParlorForm'

class Parlors extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(showParlors())
  }

  render() {
    let parlors = this.props.parlors
    return(
      <div>
        <h1>All the Parlors</h1>

        <ul>
          {parlors.map((parlor) => <li>{parlor.name}</li>)}
        </ul>
        
        <NewParlorForm />
      </div>
    )
  }
}

export default Parlors
