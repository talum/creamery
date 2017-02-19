import React from 'react'
import { showIceCreams } from '../../actions/iceCreams'
import IceCreamListItem from '../iceCreams/IceCreamListItem'
import Loader from '../sharedComponents/Loader'

class IceCreamList extends React.Component {
  componentDidMount() {
    this.props.dispatch(showIceCreams())
  }

  render() {
    let iceCreams = Object.values(this.props.iceCreams.byId)
    let iceCreamListItems = iceCreams.map((iceCream) => <IceCreamListItem key={iceCream.id} iceCream={iceCream}/>)

    if (this.props.iceCreams.isLoading) {
      return (<Loader />)
    } else {
      return (
        <div>
          { this.props.iceCreams.errors.join(", ") }
          <div className="flex-grid">
            {iceCreamListItems}
          </div>
        </div>
      )
    }
  }
}

export default IceCreamList
