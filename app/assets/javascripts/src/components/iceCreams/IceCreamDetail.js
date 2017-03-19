import React from 'react'
import { connect } from 'react-redux'
import Modal from '../sharedComponents/Modal'
import { showIceCream } from '../../actions/iceCreams'
import NewReviewForm from '../reviews/NewReviewForm'
import Review from '../reviews/Review'
import Loader from '../sharedComponents/Loader'

class IceCreamDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsVisible: false
    }
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(showIceCream(this.props.routeParams.id))
  }

  toggleModalVisibility() {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible
    })
  }

  render() {
    let iceCreams = this.props.iceCreams
    const addReviewButton = (
      <button 
        className="button button--color-black "
        onClick={this.toggleModalVisibility}>
        Add New Review
      </button>
    )

    if (iceCreams.isLoading) {
      return (<Loader />)
    } else {
      let reviews = this.props.reviews
      let iceCream = iceCreams.byId[this.props.routeParams.id]
      const iceCreamReviews = iceCream.review_ids.map((reviewId) => reviews.byId[reviewId] )

      return(
        <div>
          <div className="module">
            <h2 className="heading heading--level-1">{iceCream.title}</h2>
            <h3 className="heading heading--level-3">{iceCream.parlor}</h3>
          </div>
          <div className="flex-grid flex-grid--halves">
            <div className="flex-grid__item">
              <div className="module">
                <div className="image-frame">
                  <img src={iceCream.image_url} />
                </div>
              </div>
            </div>
            <div className="flex-grid__item">
              <div className="module">
                <div className="util--padding-ls">
                  <h3 className="heading heaading--level-3">Reviews</h3>
                  { this.props.loggedIn && addReviewButton }
                  <ul>
                    {iceCreamReviews.map((review) => <Review review={review}/>)}
                  </ul>
                </div>
              </div>
            </div>
            <Modal
              isVisible={this.state.modalIsVisible}
              toggleModal={this.toggleModalVisibility}
              modalBody={
                <NewReviewForm toggleModalVisibility={this.toggleModalVisibility} iceCreamId={iceCream.id}/>
              }
            />
          </div>
        </div>
      )
    }
  }
}   

const mapStateToProps = (state) => {
  return {
    iceCreams: state.iceCreams,
    reviews: state.reviews,
    loggedIn: state.sessions.loggedIn
  }
}

IceCreamDetail = connect(mapStateToProps)(IceCreamDetail)

export default IceCreamDetail
