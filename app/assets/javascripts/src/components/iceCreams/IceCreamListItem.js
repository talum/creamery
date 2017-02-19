import React from 'react'

class IceCreamListItem extends React.Component {
  render() {
    let iceCream = this.props.iceCream
    return(
      <div className="flex-grid__item">
        <div className="card card--mosaic">
          <div className="card__header">
            {iceCream.title}
          </div>
          <div className="card__body">
            <img className="image-frame" src={iceCream.image_url} />
          </div>
          <div className="card__footer">
            <button>Click me</button>
            Review Count
            Rating
          </div>
        </div>
      </div>
    )
  }
}   

export default IceCreamListItem
