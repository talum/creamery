import React from 'react'
import { connect } from 'react-redux'
import { showIceCream } from '../../actions/iceCreams'
import NewReviewForm from '../reviews/NewReviewForm'
import Loader from '../sharedComponents/Loader'

class IceCreamDetail extends React.Component {
  componentWillMount() {
    this.props.dispatch(showIceCream(this.props.routeParams.id))
    // should probably move this to the route handler
  }

  render() {
    let iceCreams = this.props.iceCreams

    if (iceCreams.isLoading) {
      return (<Loader />)
    } else {
      let reviews = this.props.reviews
      let iceCream = iceCreams.byId[this.props.routeParams.id]
      const iceCreamReviews = iceCream.review_ids.map((reviewId) => reviews.byId[reviewId] )

      return(
        <div>
          {iceCream.title}
          {iceCream.parlor}
          <h2>Reviews</h2>
          {iceCreamReviews.map((review) => review.title)}
          <NewReviewForm iceCreamId={iceCream.id}/>
        </div>
      )
    }
  }
}   

const mapStateToProps = (state) => {
  return {
    iceCreams: state.iceCreams,
    reviews: state.reviews
  }
}

IceCreamDetail = connect(mapStateToProps)(IceCreamDetail)

export default IceCreamDetail
