import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import IceCreamListItem from '../iceCreams/IceCreamListItem'

const FilteredIceCreams = ({parlors, iceCreams, searchTerm, loggedIn, handleAddFavorite, handleRemoveFavorite}) => {
  let iceCreamItems

  if (searchTerm === "") {
    iceCreamItems = iceCreams
  } else {
    iceCreamItems = iceCreams.filter((iceCream) => iceCream.title.toLowerCase().includes(searchTerm.toLowerCase()))  
  }
  iceCreamItems = iceCreamItems.map((iceCream) => {
    let parlor = parlors[iceCream.parlor_id]
    return (
      <IceCreamListItem
        key={iceCream.id}
        iceCream={iceCream}
        parlor={parlor}
        loggedIn={loggedIn}
        handleAddFavorite={handleAddFavorite}
        handleRemoveFavorite={handleRemoveFavorite}
      />
    )
  })

  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        <div className="flex-grid flex-grid--thirds">
          { iceCreamItems }
        </div>
    </ReactCSSTransitionGroup>
  ) 
}

export default FilteredIceCreams
