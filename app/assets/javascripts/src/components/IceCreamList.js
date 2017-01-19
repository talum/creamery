import React from 'react'
import { showIceCreams } from '../actions.js'

class IceCreamList extends React.Component {
  componentWillMount() {
    this.props.dispatch(showIceCreams())
  }

  render() {
    return (<div>Hello ice cream</div>)
  }
}

export default IceCreamList
