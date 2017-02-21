import React from 'react'

class IceCreamListItem extends React.Component {
  render() {
    let iceCream = this.props.iceCream
    return(
      <div className="flex-grid__item">
        <div className="module">
          <div className="card card--mosaic">
            <div className="card__body">
              <img className="image-frame" src={iceCream.image_url} />
            </div>
            <div className="card__footer">
              <div className="module module--padding--s">
                <div className="heading heading--level-2">
                  {iceCream.title}
                </div>
              </div>
              <div className="module module--padding--s">
                <div className="media-block media-block--spread media-block--alt-side">
                  <div className="media-block__media">
                    <button>Click me</button>
                  </div>
                  <div className="media-block__content">
                    Parlor Name
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}   

export default IceCreamListItem
