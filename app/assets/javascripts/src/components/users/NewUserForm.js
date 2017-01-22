import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../actions/users'

// refactor to use shared input field component and submit button component
class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addUser(this.state.email))
  }

  render() {
    return(
      <div>
        <h1>Sign up for Creamery</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.handleChange} placeholder="email address" /> 
          <input type="submit" value="submit" onClick={this.handleSubmit} className="btn waves-effect waves-light" />
        </form>
      </div>
    )
  }

}

//connect this form to the store
let NewUserForm = connect()(UserForm)

export default NewUserForm
