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

  parlorItems = parlorItems.map((parlor) => (
    <div key={parlor.id} className="flex-grid__item">
      <ParlorItem parlor={parlor} />
    </div>))

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={true}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        <div className="flex-grid flex-grid--thirds">
          { parlorItems }
        </div>
    </ReactCSSTransitionGroup>
  ) 
}

export default FilteredParlors
