import React from 'react'

const Review = ({review}) => (
  <li key={review.id} className="list-item">
    <h3>{review.title}</h3>
    <p>{review.content}</p>
  </li>
)

export default Review
