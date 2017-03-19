import React from 'react'
import Bookmark from '../sharedComponents/Bookmark'

class IceCreamListItem extends React.Component {
  render() {
    let iceCream = this.props.iceCream
    let parlor = this.props.parlor
    return(
      <div className="flex-grid__item">
        <div className="module">
          <div className="card card--mosaic">
            <div className="card__body">
              <div className="image-frame image-frame--medium image-frame--top-round">
                <img src={iceCream.image_url} />
              </div>
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
                      <Bookmark />
                  </div>
                  <div className="media-block__content">
                    {parlor.name}
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
