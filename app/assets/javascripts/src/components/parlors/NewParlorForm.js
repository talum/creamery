import React from 'react'
import { connect } from 'react-redux'
import { addParlor } from '../../actions/parlors'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField'
import SelectField from '../sharedComponents/SelectField'
import SubmitButton from '../sharedComponents/SubmitButton'
import CancelButton from '../sharedComponents/CancelButton'
import { debounce } from 'lodash'

class ParlorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = Form.handleChange.bind(this)
    this.validateForm = debounce(Form.validateForm.bind(this), 200)
    this.registerField = Form.registerField.bind(this)
    this.clearForm = Form.clearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fields = []
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
    this.autocomplete = null
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
  }

  componentDidUpdate() {
    this.validateForm()
  }

  initialState() {
    return {
      name: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      chain: false,
      isValid: false,
      googleMapLink: ''
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

  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace()
    let address = addressObject.address_components
    this.setState({
      name: addressObject.name,
      street_address: `${address[0].long_name} ${address[1].long_name}`,
      city: address[4].long_name,
      state: address[6].short_name,
      zip_code: address[8].short_name,
      googleMapLink: addressObject.url,
      latitude: addressObject.geometry.location.lat(),
      longitude: addressObject.geometry.location.lng()
    })
  }

  render() {
    return(
      <div>
        <h1 className="util--padding-ls">Add New Parlor</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="module">
            <input id="autocomplete"
              className="input-field"
              ref="input"
              type="text"/>
          </div>
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
              registerField={this.registerField}
              validateForm={this.validateForm}
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
          <div className="module">
            <CancelButton
              isDisabled={!this.state.isValid}
              handleCancel={this.props.toggleModalVisibility}
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
