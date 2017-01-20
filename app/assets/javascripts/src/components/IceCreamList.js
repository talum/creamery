import React from 'react'
import { showIceCreams } from '../actions.js'

class IceCreamList extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(showIceCreams())
  }

  render() {
    let iceCreams = this.props.iceCreams
    let iceCreamTitles = iceCreams.map((iceCream) => iceCream.title).join(' ')
    return (<div>{iceCreamTitles}</div>)
  }
}

export default IceCreamList
