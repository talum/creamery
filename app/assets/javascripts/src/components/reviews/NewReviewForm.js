import React from 'react'
import { connect } from 'react-redux'
import { addReview } from '../../actions/reviews'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

//TODO: make this a modal that appaers on icecream show

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  initialState(props) {
    return {
      review: {
        title: '',
        content: '',
        ice_cream_id: props.iceCreamId
      }
    }
  }

  handleChange(event) {
    let reviewParams = Object.assign({}, this.state.review)
    reviewParams[event.target.name] = event.target.value
    this.setState({review: reviewParams})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addReview(this.state))
  }

  render() {
    return(
      <div>
        <h2>Add Review</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name={"title"} 
            value={this.state.review.title}
            placeholder={"add a title"}
            handleChange={this.handleChange}
          />
          <InputField
            name={"content"} 
            value={this.state.review.content}
            placeholder={"add your review"}
            handleChange={this.handleChange}
          />
          <SubmitButton handleSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }

}

//connect this form to the store
let NewReviewForm = connect()(ReviewForm)

export default NewReviewForm
