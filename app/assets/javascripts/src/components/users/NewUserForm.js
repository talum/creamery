import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../actions/users'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  initialState() {
    return {
      user: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }

  handleChange(event) {
    let userParams = Object.assign({}, this.state.user)
    userParams[event.target.name] = event.target.value
    this.setState({user: userParams})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addUser(this.state))
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
          <InputField
            name={"password"} 
            inputType={"password"}
            value={this.state.password}
            placeholder={"password"}
            handleChange={this.handleChange}
          />
          <InputField
            name={"password_confirmation"} 
            inputType={"password"}
            value={this.state.password_confirmation}
            placeholder={"password confirmation"}
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
