import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

const Review = ({review, toggleCommentModalVisibility, setActiveReviewId, loggedIn}) => {
  let handleCommentButtonClick = () => {
    toggleCommentModalVisibility()
    setActiveReviewId(review.id)
  }

  const addCommentButton = (
    <a 
      className="link-color--blue" 
      onClick={handleCommentButtonClick}>
      &#8901; Reply 
    </a>
  )

  return (
    <div key={review.id} className="module module--review-block">
      <h3 className="heading heading--level-5">{review.title}</h3>
      <p>{review.content}</p>
      <div>
        <Link className="link-color--blue util--font-bold" to={`users/${review.user.id}`}> {review.user.profile.first_name} {review.user.profile.last_name} </Link>
        <span> &#8901; { moment(review.created_at, 'YYYY-MM-DD HH:mm Z').from(Date.now()) }</span>
      { loggedIn && addCommentButton }
        <div className="module">
          { review.comments.map((comment) => <div key={comment.id} className="module"><Link className="util--font-bold" to={`users/${comment.author.user_id}`}>{comment.author.profile.first_name} {comment.author.profile.last_name}</Link> | {moment(comment.created_at, 'YYYY-MM-DD HH:mm Z').from(Date.now())}
          <p>{comment.content}</p></div>) }
        </div>
      </div>
    </div>
  )
}

export default Review
