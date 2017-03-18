import React from 'react'

const SearchBar = ({searchTerm, handleSearchInputChange, placeholderText}) => (
  <div className="module">
    <input className="input-field" type="text" onChange={handleSearchInputChange} value={searchTerm} placeholder={placeholderText}/>
  </div>
) 

export default SearchBar
