import React from 'react'
import { showIceCreams } from '../../actions/iceCreams'
import IceCreamListItem from '../iceCreams/IceCreamListItem'

class IceCreamList extends React.Component {
  constructor(props) {
    super(props)

    if (!props.length) {
      props.dispatch(showIceCreams())
    }
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
