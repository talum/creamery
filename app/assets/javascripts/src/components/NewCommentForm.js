import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/comments'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  initialState(props) {
    return {
      comment: {
        review_id: props.routeParams.id,
        content: ''
      }
    }
  }

  handleChange(event) {
    let commentParams = Object.assign({}, this.state.comment)
    commentParams[event.target.name] = event.target.value
    this.setState({comment: commentParams})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addComment(this.state))
  }

  render() {
    return(
      <div>
        <h2>Add Comment</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name={"content"} 
            value={this.state.comment.content}
            placeholder={"add your comment"}
            handleChange={this.handleChange}
          />
          <SubmitButton handleSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }

}

//connect this form to the store
let NewCommentForm = connect()(CommentForm)

export default NewCommentForm
