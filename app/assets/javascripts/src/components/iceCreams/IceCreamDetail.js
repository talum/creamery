import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from '../sharedComponents/Modal'
import { showIceCreams } from '../../actions/iceCreams'
import NewReviewForm from '../reviews/NewReviewForm'
import NewCommentForm from '../reviews/NewCommentForm'
import Review from '../reviews/Review'
import Loader from '../sharedComponents/Loader'
import Plus from '../sharedComponents/Plus'

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
    this.props.dispatch(showIceCreams())
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
        className="button button--circle button--has-icon button--color-black"
        onClick={this.toggleReviewModalVisibility}>
        <div className="button__icon button__icon--xs">
          <Plus />
        </div>
      </button>
    )

    if (iceCreams.isLoading) {
      return (<Loader />)
    } else {
      let iceCream = iceCreams.byId[this.props.routeParams.id]
      const iceCreamReviews = iceCream.reviews

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
                    <div className="image-frame image-frame--round">
                      <img src={iceCream.ig_image || iceCream.image_url} />
                    </div>
                  </div>
                </div>
                <div className="flex-grid__item">
                  <div className="module">
                    <div>
                      <div className="media-block media-block--alt-side">
                        <div className="media-block__content">
                          <h3 className="heading heaading--level-3">Reviews</h3>
                        </div>
                        <div className="media-block__media">
                          { this.props.loggedIn && addReviewButton }
                        </div>
                      </div>
                      <div>
                        {iceCreamReviews.map((review) => (
                          <Review
                            key={review.id}
                            review={review}
                            toggleCommentModalVisibility={this.toggleCommentModalVisibility}
                            setActiveReviewId={this.setActiveReviewId}
                            loggedIn={this.props.loggedIn}
                          />
                        ))} 
                      </div>
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
                    <NewCommentForm 
                      toggleModalVisibility={this.toggleCommentModalVisibility}
                      reviewId={this.state.activeReviewId}
                    />
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
