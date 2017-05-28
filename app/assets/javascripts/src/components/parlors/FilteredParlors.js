import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ParlorItem from '../parlors/ParlorItem'

const FilteredParlors = ({parlors, searchTerm}) => {
  let parlorItems

  if (searchTerm === "") {
    parlorItems = parlors
  } else {
    parlorItems = parlors.filter((parlor) => parlor.name.toLowerCase().includes(searchTerm.toLowerCase()))  
  }

  parlorItems = parlorItems.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  }).map((parlor) => (
    <div key={parlor.id} className="flex-grid__item">
      <ParlorItem parlor={parlor} />
    </div>))

  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        <div className="flex-grid flex-grid--thirds">
          { parlorItems }
        </div>
    </ReactCSSTransitionGroup>
  ) 
}

export default FilteredParlors
