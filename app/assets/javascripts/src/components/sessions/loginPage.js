import React from 'react'
import { connect } from 'react-redux'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField' 
import SubmitButton from '../sharedComponents/SubmitButton'

import { logInUser } from '../../actions/sessions'

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
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.value
    this.setState({credentials: credentials})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(logInUser(this.state.credentials)) // submit action
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        { this.props.sessions.errors }
        <form onSubmit={this.handleSubmit}>
            <div className="module">
              <InputField
                name={"email"}
                value={this.state.credentials.email}
                placeholder={"email"}
                handleChange={this.handleChange}
                />
            </div>
            <div className="module">
              <InputField
                name={"password"}
                inputType={"password"}
                value={this.state.credentials.password}
                placeholder={"password"}
                handleChange={this.handleChange}
                />
            </div>
            <div className="module">
             <SubmitButton handleSubmit={this.handleSubmit}/>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions
  }
}

export default connect(mapStateToProps, null)(LoginPage)
