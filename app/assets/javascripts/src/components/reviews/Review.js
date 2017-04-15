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

  const formatDate = (date) => {
    return moment(date, 'YYYY-MM-DD HH:mm Z').from(Date.now())
  }

  return (
    <div key={review.id} className="module module--review-block module--padding-flat">
      <div className="module__head">
        <h3 className="heading heading--level-5">{review.title}</h3>
        <p>{review.content}</p>
      </div>
      <div className="module__footer">
        <Link className="link-color--blue util--font-bold" to={`users/${review.user.id}`}> {review.user.profile.first_name} {review.user.profile.last_name} </Link>
        <span> &#8901; { formatDate(review.created_at) }</span>
      { loggedIn && addCommentButton }
      </div>
      <div className="module module--padding-flat-right">
        { review.comments.map((comment) => <div key={comment.id} className="module module--margin-tall module--margin-wide-left module--background--gray-lightest">
          <div className="module__body">
            <div className="heading heading--inline heading--color-gray-dark"><Link className="util--font-bold" to={`users/${comment.author.user_id}`}>{comment.author.profile.first_name} {comment.author.profile.last_name}</Link></div>
            <div className="heading heading--inline heading--color-gray"> | { formatDate(comment.created_at) }
            </div>
          </div>
          <div className="module__body">
            <p>{comment.content}</p>
          </div>
        </div>) }
      </div>
    </div>
  )
}

export default Review
