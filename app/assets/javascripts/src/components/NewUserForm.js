import React from 'react'
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
    debugger
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

export default NewUserForm
