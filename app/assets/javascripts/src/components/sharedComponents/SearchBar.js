import React from 'react'

const SearchBar = ({searchTerm, handleSearchInputChange}) => (
  <input className="input-field" type="text" onChange={handleSearchInputChange} value={searchTerm}/>
) 

export default SearchBar
