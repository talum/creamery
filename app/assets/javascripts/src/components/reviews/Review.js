import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

const Review = ({review}) => (
  <li key={review.id} className="list-item">
    <h3>{review.title}</h3>
    <p>{review.content}</p>
    <p>
      <span>Posted by</span>
      <Link to={`users/${review.user.id}`}> {review.user.profile.first_name} {review.user.profile.last_name} </Link>
      <span>at { moment(review.created_at, 'YYYY-MM-DD HH:mm').format('MMM DD, YYYY') }</span>
    </p>
  </li>
)

export default Review
