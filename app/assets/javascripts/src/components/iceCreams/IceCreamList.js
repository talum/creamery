import React from 'react'
import { showIceCreams } from '../../actions/iceCreams'
import IceCreamListItem from '../iceCreams/IceCreamListItem'
import Loader from '../sharedComponents/Loader'

class IceCreamList extends React.Component {
  componentDidMount() {
    if (!this.props.iceCreams.allIds.length) {
      this.props.dispatch(showIceCreams())
    }
  }

  render() {
    let iceCreams = Object.values(this.props.iceCreams.byId)
    let iceCreamListItems = iceCreams.map((iceCream) => <IceCreamListItem key={iceCream.id} iceCream={iceCream}/>)

    if (this.props.iceCreams.isLoading) {
      return (<Loader />)
    } else {
      return (
        <div>
          {iceCreamListItems}
        </div>
      )
    }
  }
}

export default IceCreamList
