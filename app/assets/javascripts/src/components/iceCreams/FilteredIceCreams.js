import React from 'react'
import IceCreamListItem from '../iceCreams/IceCreamListItem'

const FilteredIceCreams = ({parlors, iceCreams, searchTerm}) => {
  let iceCreamItems

  if (searchTerm === "") {
    iceCreamItems = iceCreams
  } else {
    iceCreamItems = iceCreams.filter((iceCream) => iceCream.title.toLowerCase().includes(searchTerm.toLowerCase()))  
  }
  iceCreamItems = iceCreamItems.map((iceCream) => {
    let parlor = parlors[iceCream.parlor_id]
    return (
      <IceCreamListItem key={iceCream.id} iceCream={iceCream} parlor={parlor} />
    )
  })

  return (
    <div className="flex-grid">
      { iceCreamItems }
    </div>
  ) 
}

export default FilteredIceCreams
