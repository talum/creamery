import React from 'react'
import InputField from '../sharedComponents/InputField' 
import SubmitButton from '../sharedComponents/SubmitButton'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.initialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  initialState() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  }

  handleChange(event) {
    this.setState({
      ...state,
      credentials: {
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch({}) // submit action
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
            <InputField
              name={"email"}
              value={this.state.credentials.email}
              placeholder={"email"}
              handleChange={this.handleChange}
              />
            <InputField
              name={"password"}
              value={this.state.credentials.password}
              placeholder={"password"}
              handleChange={this.handleChange}
              />
             <SubmitButton handleSubmit={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default LoginPage
