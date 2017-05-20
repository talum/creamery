import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { addUser } from '../../actions/users'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'
import { debounce } from 'lodash'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = debounce(Form.validateForm.bind(this), 200)
    this.registerField = Form.registerField.bind(this)
    this.fields = []
  }

  initialState() {
    return {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  componentDidUpdate() {
    this.validateForm()
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addUser({user: this.state}))
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
          <h1 className="util--padding-ls">Sign up for Creamery</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="module">
              <InputField
                name={"email"} 
                value={this.state.email}
                placeholder={"email address"}
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
                value={this.state.password}
                placeholder={"password"}
                handleChange={this.handleChange}
                isRequired={true}
                validateForm={this.validateForm}
                registerField={this.registerField}
              />
            </div>
            <div className="module">
              <InputField
                name={"password_confirmation"} 
                inputType={"password"}
                value={this.state.password_confirmation}
                placeholder={"password confirmation"}
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

//connect this form to the store
let NewUserForm = connect()(UserForm)

export default NewUserForm
