import React from 'react'
import { Link } from 'react-router'
import { showParlors } from '../../actions/parlors'
import NewParlorForm from '../parlors/NewParlorForm'

class Parlors extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.parlors.length) {
      this.props.dispatch(showParlors())
    }
  }

  render() {
    let parlors = this.props.parlors
    return(
      <div>
        <h1>All the Parlors</h1>
        {this.props.loading && "loading"}
        <ul>
          {parlors.map((parlor) => <li key={parlor.id}><Link to={`/parlors/${parlor.id}`}>{parlor.name}</Link></li>)}
        </ul>
        
        <NewParlorForm />
      </div>
    )
  }
}

export default Parlors
