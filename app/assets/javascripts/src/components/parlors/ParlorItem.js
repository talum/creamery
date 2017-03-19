import React from 'react'
import { Link } from 'react-router'
import IceCreamIcon from '../sharedComponents/IceCreamIcon'
import IceCreamCone1 from '../sharedComponents/IceCreamCone1'
import IceCreamCone2 from '../sharedComponents/IceCreamCone2'
import IceCreamCone3 from '../sharedComponents/IceCreamCone3'
import IceCreamCone4 from '../sharedComponents/IceCreamCone4'
import IceCreamCone5 from '../sharedComponents/IceCreamCone5'

function iceCreamConeIcon() {
  let iceCreamConeIconArray = [<IceCreamCone1 />, <IceCreamCone2 />, <IceCreamCone3 />, <IceCreamCone4 />, <IceCreamCone5 />]
  let randomNum = Math.floor((Math.random() * 5))
  return (
    iceCreamConeIconArray[randomNum]
  )
}

const ParlorItem = (props) => (
  <div className="module">
    <div className="card card--horizon">
      <div className="card__body">
        <div className="module">
          <div className="media-block">
            <div className="media-block__media">
              { iceCreamConeIcon() }
            </div>
            <div className="media-block__content">
              <div className="module">
                <Link to={`/parlors/${props.parlor.id}`}>
                  <h2 className="heading heading--level-1">{props.parlor.name}</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="module module--padding--s">
          <div className="media-block">
            <div className="media-block__media">
              <IceCreamIcon />
            </div>
            <div className="media-block__content">
              { props.parlor.ice_creams.length }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
) 

export default ParlorItem
