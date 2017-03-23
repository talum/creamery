import React from 'react'
import { connect } from 'react-redux'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    debugger
    this.state = {
      email: props.currentProfile.userData.email,
      first_name: props.currentProfile.userData.first_name,
      last_name: props.currentProfile.userData.last_name,
      date_of_birth: props.currentProfile.userData.date_of_birth
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = Form.validateForm.bind(this)
    this.registerField = Form.registerField.bind(this)
    this.fields = []
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    //this.props.dispatch(updateUser({user: this.state}))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="module">
          <InputField
            name={"email"} 
            value={this.state.email}
            placeholder={"Email"}
            handleChange={this.handleChange}
            isRequired={true}
            validateForm={this.validateForm}
            registerField={this.registerField}
          />
        </div>
        <div className="module">
          <InputField
            name={"first_name"} 
            value={this.state.first_name}
            placeholder={"First name"}
            handleChange={this.handleChange}
            isRequired={true}
            validateForm={this.validateForm}
            registerField={this.registerField}
          />
        </div>
        <div className="module">
          <InputField
            name={"last_name"} 
            value={this.state.last_name}
            placeholder={"Last name"}
            handleChange={this.handleChange}
            isRequired={true}
            validateForm={this.validateForm}
            registerField={this.registerField}
          />
        </div>
        <div className="module">
          <InputField
            name={"date_of_birth"} 
            inputType={"date"}
            value={this.state.date_of_birth}
            placeholder={"Date of birth"}
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
    )
  }
}

let ConnectedProfileForm = connect()(ProfileForm)

export default ConnectedProfileForm
