import React from 'react'

class IceCreamListItem extends React.Component {
  render() {
    let iceCream = this.props.iceCream
    return(
      <div className="flex-grid__item">
        <div className="module">
          <div className="card card--mosaic">
            <div className="card__body">
              <div className="image-frame image-frame--top-round">
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
                    <div className="svg-container svg-container--small">
                      <svg viewBox='0 0 32 32'>
                        <path d='M6 0v32l10-10 10 10v-32z'></path>
                      </svg>
                    </div>
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
