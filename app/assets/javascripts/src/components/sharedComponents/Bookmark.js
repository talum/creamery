import React from 'react'

const Bookmark = ({favorites, loggedIn}) => {
  let isLiked = favorites.includes((favorite) => {
    favorite.user_id === parseInt(sessionStorage.currentUserId)
  })

  if (loggedIn) {
    // if not liked, on click create like
    // if liked, on click destroy like
    return (
    <div className="svg-container svg-container--small">
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
