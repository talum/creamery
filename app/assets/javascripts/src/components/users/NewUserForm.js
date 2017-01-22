import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../actions/users'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

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
          <InputField
            name={"email"} 
            value={this.state.email}
            placeholder={"email address"}
            handleChange={this.handleChange}
          />
          <SubmitButton handleSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }

}

//connect this form to the store
let NewUserForm = connect()(UserForm)

export default NewUserForm
