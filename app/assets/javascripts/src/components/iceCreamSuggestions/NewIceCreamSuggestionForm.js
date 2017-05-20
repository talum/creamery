import React from 'react'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField'
import SelectField from '../sharedComponents/SelectField.js'
import SubmitButton from '../sharedComponents/SubmitButton'
import { debounce } from 'lodash'

class NewIceCreamSuggestionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ice_cream_title: '',
      comment: '',
      name: '',
      email: '',
      parlor: {}
    }
    
    this.handleChange = Form.handleChange.bind(this)
    this.validateForm = debounce(Form.validateForm.bind(this), 200)
    this.registerField = Form.registerField.bind(this)
    this.clearForm = Form.clearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fields = []
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    // send some actions somewhere
  }

  render() {
    // fetch all the parlors and use them to display options
    // one option is Add New
    // Add New should trigger showing a new form
    return(
      <div>
        <h2 className="util--padding-ls">Suggest an Ice Cream</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="module">
            <InputField
              name={"ice_cream_title"}
              value={this.state.ice_cream_title}
              placeholder={"What kind of ice cream?"}
              handleChange={this.handleChange}
              isRequired={true}
              validateForm={this.validateForm}
              registerField={this.registerField}
            />
          </div>
          <div className="module">
            <InputField
              name={"comment"}
              value={this.state.comment}
              placeholder={"Add a message"}
              handleChange={this.handleChange}
            />
          </div>
          <div className="module">
            <SelectField />
          </div>
          <div className="module">
            <InputField
              name={"name"}
              value={this.state.name}
              placeholder={"Your name"}
              handleChange={this.handleChange}
            />
          </div>
          <div className="module">
            <InputField
              name={"email"}
              value={this.state.email}
              placeholder={"Your email address"}
              handleChange={this.handleChange}
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

export default NewIceCreamSuggestionForm
