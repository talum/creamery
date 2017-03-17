import React from 'react'
import IceCreamListItem from '../iceCreams/IceCreamListItem'

const FilteredIceCreams = ({iceCreams, searchTerm}) => {
  let iceCreamItems

  if (searchTerm === "") {
    iceCreamItems = iceCreams
  } else {
    iceCreamItems = iceCreams.filter((iceCream) => iceCream.title.toLowerCase().includes(searchTerm.toLowerCase()))  
  }

  iceCreamItems = iceCreamItems.map((iceCream) => (
      <IceCreamListItem key={iceCream.id} iceCream={iceCream} />))

  return (
    <div className="flex-grid">
      { iceCreamItems }
    </div>
  ) 
}

export default FilteredIceCreams
