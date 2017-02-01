import React from 'react'
import { connect } from 'react-redux'
import { showIceCream } from '../../actions/iceCreams'

class IceCreamDetail extends React.Component {
  componentWillMount() {
    this.props.dispatch(showIceCream(this.props.routeParams.id))
    // fetch the data for that specific ice cream
    // have associated resource reducers respond   
    // should probably move this to the route handler
  }

  render() {
    let iceCreams = this.props.iceCreams

    if (iceCreams.isLoading) {
      return (<div>Loading</div>)
    } else {
      let reviews = this.props.reviews
      let iceCream = iceCreams.byId[this.props.routeParams.id]
      let iceCreamReviews = iceCream.reviews.map((reviewId) => reviews.byId[reviewId])

      return(
        <div>
          {iceCream.title}
          {iceCream.parlor}
          {iceCreamReviews.map((review) => review.title)}
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
