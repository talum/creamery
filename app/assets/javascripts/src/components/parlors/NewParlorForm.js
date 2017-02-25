import React from 'react'
import { connect } from 'react-redux'
import { addParlor } from '../../actions/parlors'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'

class ParlorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  initialState() {
    return {
      name: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      chain: false
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
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

  clearForm() {
    this.setState(this.initialState())
  }

  validateForm() {
    //go through all the input fields and call the validation
    // toggle the submit button
    return true
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
            />
          </div>
          <div className="module">
            <InputField 
              name={"street_address"}
              value={this.state.street_address}
              placeholder={"Street Address"}
              handleChange={this.handleChange}
              isRequired={true}
            />
          </div>
          <div className="module">
            <InputField 
              name={"city"}
              value={this.state.city}
              placeholder={"City"}
              handleChange={this.handleChange}
              isRequired={true}
            />
          </div>
          <div className="module">
            <InputField 
              name={"state"}
              value={this.state.state}
              placeholder={"State"}
              handleChange={this.handleChange}
              isRequired={true}
            />
          </div>
          <div className="module">
            <InputField 
              name={"zip_code"}
              value={this.state.zip_code}
              placeholder={"Zipcode"}
              handleChange={this.handleChange}
              isRequired={true}
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

//connect this form to the store
let NewParlorForm = connect()(ParlorForm)

export default NewParlorForm
