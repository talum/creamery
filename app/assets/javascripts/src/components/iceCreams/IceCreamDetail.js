import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from '../sharedComponents/Modal'
import { showIceCream } from '../../actions/iceCreams'
import NewReviewForm from '../reviews/NewReviewForm'
import NewCommentForm from '../reviews/NewCommentForm'
import Review from '../reviews/Review'
import Loader from '../sharedComponents/Loader'

class IceCreamDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewModalIsVisible: false,
      commentModalIsVisible: false,
      activeReviewId: null
    }
    this.toggleReviewModalVisibility = this.toggleReviewModalVisibility.bind(this)
    this.toggleCommentModalVisibility = this.toggleCommentModalVisibility.bind(this)
    this.setActiveReviewId = this.setActiveReviewId.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(showIceCream(this.props.routeParams.id))
  }

  toggleReviewModalVisibility() {
    this.setState({
      reviewModalIsVisible: !this.state.reviewModalIsVisible
    })
  }

  toggleCommentModalVisibility() {
    this.setState({
      commentModalIsVisible: !this.state.commentModalIsVisible
    })
  }

  setActiveReviewId(reviewId) {
    this.setState({activeReviewId: reviewId})
  }

  render() {
    let iceCreams = this.props.iceCreams
    const addReviewButton = (
      <button 
        className="button button--color-black "
        onClick={this.toggleReviewModalVisibility}>
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
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
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
                      {iceCreamReviews.map((review) => (
                        <Review
                          key={review.id}
                          review={review}
                          toggleCommentModalVisibility={this.toggleCommentModalVisibility}
                          setActiveReviewId={this.setActiveReviewId}
                        />
                      ))} 
                      </ul>
                    </div>
                  </div>
                </div>
                <Modal
                  isVisible={this.state.reviewModalIsVisible}
                  toggleModal={this.toggleReviewModalVisibility}
                  modalBody={
                    <NewReviewForm toggleModalVisibility={this.toggleReviewModalVisibility} iceCreamId={iceCream.id}/>
                  }
                />
                <Modal
                  isVisible={this.state.commentModalIsVisible}
                  toggleModal={this.toggleCommentModalVisibility}
                  modalBody={
                    <NewCommentForm toggleModalVisibility={this.toggleCommentModalVisibility} />
                  }
                />
              </div>
            </div>
          </ReactCSSTransitionGroup>
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
