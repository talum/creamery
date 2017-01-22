import React from 'react'

class IceCreamListItem extends React.Component {
  render() {
    let iceCream = this.props.iceCream
    return(
      <div>
        {iceCream.title}
        {iceCream.parlor}
      </div>
    )
  }
}   

export default IceCreamListItem
