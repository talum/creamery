import React from 'react'
import { connect } from 'react-redux'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField'
import SelectField from '../sharedComponents/SelectField'
import SubmitButton from '../sharedComponents/SubmitButton'
import CancelButton from '../sharedComponents/CancelButton'
import NewParlorForm from '../parlors/NewParlorForm' 
import { addIceCreamSuggestion } from '../../actions/iceCreamSuggestions'
import { showParlors } from '../../actions/parlors'
import { debounce } from 'lodash'

class NewIceCreamSuggestionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.initialState()
    this.handleChange = Form.handleChange.bind(this)
    this.validateForm = debounce(Form.validateForm.bind(this), 200)
    this.registerField = Form.registerField.bind(this)
    this.clearForm = Form.clearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleParlorForm = this.toggleParlorForm.bind(this)
    this.handleParlorSelect = this.handleParlorSelect.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.fields = []
  }

  initialState() {
    return {
      ice_cream_title: '',
      comment: '',
      name: '',
      email: '',
      parlor_id: '',
      shouldShowParlorForm: false,
      shouldShowNewSuggestionForm: false,
      shouldShowSuccessMessage: false
    }
  }

  componentDidMount() {
    this.props.dispatch(showParlors())
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addIceCreamSuggestion(this.state))  
    this.setState({shouldShowSuccessMessage: true})
  }

  handleCancel() {
    this.setState({
      shouldShowParlorForm: false,
      shouldShowNewSuggestionForm: false,
      parlorId: ''
    })
  }

  toggleParlorForm() {
    this.setState({shouldShowParlorForm: !this.state.shouldShowParlorForm})
  }

  renderNewIceCreamSuggestionForm() {
    return (
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
        <div className="module">
          <CancelButton
            handleCancel={this.handleCancel}
          />
        </div>
      </form>
    )
  }

  handleParlorSelect(event) {
    let parlorId = event.target.value
    if (parlorId !== '') {
      this.setState({
        parlor_id: event.target.value,
        shouldShowNewSuggestionForm: true
      })
    }
  }

  renderSuccessMessage() {
    return (
      <div>
        Your suggestion has been submitted!
      </div>
    )
  }

  renderSuggestView() {
    let parlors = this.props.parlors.allIds.map((parlorId) => this.props.parlors.byId[parlorId])
    let options = parlors.map((parlor) => <option key={parlor.id} value={parlor.id}>{parlor.name}</option>)
    options.unshift(<option key='select' value=''>Select a parlor</option>)
    
    return(
      <div>
        <h2 className="util--padding-ls">Suggest an Ice Cream</h2>
        {!this.state.shouldShowParlorForm && 
          <div className="module">
            <SelectField name={"parlor_id"} value={this.state.parlor_id} handleChange={this.handleParlorSelect}>
              {options}
            </SelectField>
          {!this.state.shouldShowNewSuggestionForm &&<div onClick={this.toggleParlorForm}>Add New</div>}
          </div>
        }
        {this.state.shouldShowParlorForm && <NewParlorForm toggleModalVisibility={this.toggleParlorForm}/>}
        {this.state.shouldShowNewSuggestionForm && this.renderNewIceCreamSuggestionForm()}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.shouldShowSuccessMessage ? this.renderSuccessMessage() : this.renderSuggestView()}
      </div>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    parlors: state.parlors
  }
}

NewIceCreamSuggestionForm = connect(mapStateToProps)(NewIceCreamSuggestionForm)

export default NewIceCreamSuggestionForm
