import React from 'react'
import { showIceCreams } from '../actions.js'
import IceCreamListItem from '../components/IceCreamListItem'

class IceCreamList extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(showIceCreams())
  }

  render() {
    let iceCreams = this.props.iceCreams
    let iceCreamListItems = iceCreams.map((iceCream) => <IceCreamListItem key={iceCream.id} iceCream={iceCream}/>)

    return (
      <div>
        {this.props.loading && "loading"}
        {iceCreamListItems}
      </div>
    )
  }
}

export default IceCreamList
