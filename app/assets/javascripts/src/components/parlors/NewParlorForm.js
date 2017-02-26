import React from 'react'
import { connect } from 'react-redux'
import { addParlor } from '../../actions/parlors'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

class ParlorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = Form.handleChange.bind(this)
    this.validateForm = Form.validateForm.bind(this)
    this.registerField = Form.registerField.bind(this)
    this.clearForm = Form.clearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fields = []
  }

  initialState() {
    return {
      name: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      chain: false,
      isValid: false
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let submissionIsValid = this.validateForm()
    if (submissionIsValid) {
      this.props.dispatch(addParlor(this.state))
      this.props.toggleModalVisibility()
      this.clearForm()
    }
  }

  render() {
    return(
      <div>
        <h1>Add New Parlor</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="module">
            <InputField 
              name={"name"}
              value={this.state.name}
              placeholder={"Name"}
              handleChange={this.handleChange}
              isRequired={true}
              errorMessage="Name is invalid"
              validateForm={this.validateForm}
              registerField={this.registerField}
            />
          </div>
          <div className="module">
            <InputField 
              name={"street_address"}
              value={this.state.street_address}
              placeholder={"Street Address"}
              handleChange={this.handleChange}
              isRequired={true}
              validateForm={this.validateForm}
              registerField={this.registerField}
            />
          </div>
          <div className="module">
            <InputField 
              name={"city"}
              value={this.state.city}
              placeholder={"City"}
              handleChange={this.handleChange}
              isRequired={true}
              validateForm={this.validateForm}
              registerField={this.registerField}
            />
          </div>
          <div className="module">
            <InputField 
              name={"state"}
              value={this.state.state}
              placeholder={"State"}
              handleChange={this.handleChange}
              isRequired={true}
              validateForm={this.validateForm}
              registerField={this.registerField}
            />
          </div>
          <div className="module">
            <InputField 
              name={"zip_code"}
              value={this.state.zip_code}
              placeholder={"Zipcode"}
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
    )
  }

}

//connect this form to the store
let NewParlorForm = connect()(ParlorForm)

export default NewParlorForm
