import React from 'react'

const Bookmark = ({iceCreamId, favorites, loggedIn, handleAddFavorite, handleRemoveFavorite}) => {
  let favorite = favorites.find((favorite) => {
    return favorite.user_id === parseInt(sessionStorage.currentUserId)
  })

  let handleClick, bookmarkClass
  if (loggedIn) {
    if (!!favorite) {
      handleClick = function() {
        handleRemoveFavorite(favorite.id, favorite.favoritable_id)
      }
      bookmarkClass = 'svg-container--fill-green'
    } else {
      handleClick = function()  {
        handleAddFavorite(iceCreamId)
      }
      bookmarkClass = 'svg-container--fill-gray-light'
    }
    return (
      <div className={`svg-container svg-container--small svg-container--hoverable ${bookmarkClass}`} onClick={handleClick}>
        <svg viewBox='0 0 32 32'>
          <path d='M6 0v32l10-10 10 10v-32z'></path>
        </svg>
      </div>
    )
  } else {
    return (<span />)
  } 
}

export default Bookmark
