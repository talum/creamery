import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions.js'

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
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.email} onChange={this.handleChange} /> 
        <input type="submit" value="submit" onClick={this.handleSubmit} />
      </form>
    )
  }

}

//connect this form to the store
let NewUserForm = connect()(UserForm)

export default NewUserForm
