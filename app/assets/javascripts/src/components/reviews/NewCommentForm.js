import React from 'react'
import { connect } from 'react-redux'
import Form from '../sharedComponents/Form'
import { addComment } from '../../actions/comments'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

class CommentForm extends React.Component {
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
      content: '',
      review_id: props.reviewId
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addComment({comment: this.state}))
    this.props.toggleModalVisibility()
  }

  render() {
    return(
      <div>
        <h2>Add Comment</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="module">
            <InputField
              name={"content"} 
              value={this.state.content}
              placeholder={"add your comment"}
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
let NewCommentForm = connect()(CommentForm)

export default NewCommentForm
