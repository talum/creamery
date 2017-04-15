import React from 'react'
import { Link } from 'react-router'
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
                <Link to={`/ice-creams/${iceCream.id}`} >
                  <div className="image-frame image-frame--medium image-frame--top-round">
                    <img src={iceCream.image_url} />
                  </div>
                </Link>
            </div>
            <div className="card__footer">
              <div className="module module--padding--s">
                <Link to={`/ice-creams/${iceCream.id}`} >
                  <div className="heading heading--level-2">
                    {iceCream.title}
                  </div>
                </Link>
              </div>
              <div className="module module--padding--s">
                <div className="media-block media-block--spread media-block--alt-side">
                  <div className="media-block__media">
                      <Bookmark
                        iceCreamId={iceCream.id}
                        favorites={iceCream.favorites}
                        loggedIn={this.props.loggedIn}
                        handleAddFavorite={this.props.handleAddFavorite}
                        handleRemoveFavorite={this.props.handleRemoveFavorite}
                      />
                  </div>
                  <div className="media-block__content">
                    <Link to={`/parlors/${parlor.id}`} >
                      {parlor.name}
                    </Link>
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
