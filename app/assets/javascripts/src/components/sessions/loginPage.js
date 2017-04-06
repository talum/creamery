import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField' 
import SubmitButton from '../sharedComponents/SubmitButton'

import { logInUser } from '../../actions/sessions'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.validateForm = Form.validateForm.bind(this)
    this.registerField = Form.registerField.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fields = []
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
      <ReactCSSTransitionGroup
        transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <div>
            <h1 className="util--padding-ls">Login</h1>
            <div className="module">{ this.props.sessions.errors }</div>
            <form onSubmit={this.handleSubmit}>
                <div className="module">
                  <InputField
                    name={"email"}
                    value={this.state.credentials.email}
                    placeholder={"email"}
                    handleChange={this.handleChange}
                    isRequired={true}
                    validateForm={this.validateForm}
                    registerField={this.registerField}
                    />
                </div>
                <div className="module">
                  <InputField
                    name={"password"}
                    inputType={"password"}
                    value={this.state.credentials.password}
                    placeholder={"password"}
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
      </ReactCSSTransitionGroup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions
  }
}

export default connect(mapStateToProps, null)(LoginPage)
