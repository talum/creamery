import React from 'react'
import ParlorItem from '../parlors/ParlorItem'

const FilteredParlors = ({parlors, searchTerm}) => {
  let parlorItems

  if (searchTerm === "") {
    parlorItems = parlors
  } else {
    parlorItems = parlors.filter((parlor) => parlor.name.toLowerCase().includes(searchTerm.toLowerCase()))  
  }

  parlorItems = parlorItems.map((parlor) => (
    <div key={parlor.id} className="flex-grid__item">
      <ParlorItem parlor={parlor} />
    </div>))

  return (
    <div className="flex-grid flex-grid--thirds">
      { parlorItems }
    </div>
  ) 
}

export default FilteredParlors
