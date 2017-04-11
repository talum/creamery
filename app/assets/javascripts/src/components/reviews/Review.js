import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

const Review = ({review, toggleCommentModalVisibility, setActiveReviewId}) => {
  let handleCommentButtonClick = () => {
    toggleCommentModalVisibility()
    setActiveReviewId(review.id)
  }

  const addCommentButton = (
    <button 
      className="button button--color-black "
      onClick={handleCommentButtonClick}>
      Add New Comment 
    </button>
  )

  return (
    <li key={review.id} className="list-item">
      <h3>{review.title}</h3>
      <p>{review.content}</p>
      <p>
        <span>Posted by</span>
        <Link to={`users/${review.user.id}`}> {review.user.profile.first_name} {review.user.profile.last_name} </Link>
        <span>at { moment(review.created_at, 'YYYY-MM-DD HH:mm').format('MMM DD, YYYY') }</span>
        <ul>
          { review.comments.map((comment) => <li key={comment.id}>{comment.content}</li>) }
        </ul>
        { addCommentButton }
      </p>
    </li>
  )
}

export default Review
