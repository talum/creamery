import React from 'react'
import { connect } from 'react-redux'
import Form from '../sharedComponents/Form'
import { addReview } from '../../actions/reviews'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState(props)
    this.validateForm = Form.validateForm.bind(this)
    this.registerField = Form.registerField.bind(this)
    this.clearForm = Form.clearForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fields = []
  }

  initialState(props) {
    return {
      title: '',
      content: '',
      ice_cream_id: props.iceCreamId
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addReview({review: this.state}))
    this.props.toggleModalVisibility()
  }

  render() {
    return(
      <div>
        <h2 className="util--padding-ls">Add Review</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="module">
            <InputField
              name={"title"} 
              value={this.state.title}
              placeholder={"Add a title"}
              handleChange={this.handleChange}
              isRequired={true}
              validateForm={this.validateForm}
              registerField={this.registerField}
            />
          </div>
          <div className="module">
            <InputField
              name={"content"} 
              value={this.state.content}
              placeholder={"Add your review"}
              handleChange={this.handleChange}
              isRequired={true}
              validateForm={this.validateForm}
              registerField={this.registerField}
            />
          </div>
          <div className="module">
            <SubmitButton
              isDisabled={!this.state.isValid}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    )
  }

}

//connect this form to the store
let NewReviewForm = connect()(ReviewForm)

export default NewReviewForm
