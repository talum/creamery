import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { updateUser } from '../../actions/users'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    let { first_name, last_name, date_of_birth } = props.currentProfile.userData.profile
    this.state = {
      id: props.currentProfile.userData.id,
      first_name: first_name || "",
      last_name: last_name || "",
      date_of_birth: date_of_birth || ""
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
    this.props.dispatch(updateUser(this.state.id, {user: this.state}))
    this.props.toggleModalVisibility()
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
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
            value={moment(this.state.date_of_birth, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD')}
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
