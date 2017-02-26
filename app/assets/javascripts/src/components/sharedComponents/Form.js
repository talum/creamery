const handleChange = function handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

const registerField = function(field) {
  this.fields.push(field)
}

const validateForm = function() {
  let isValid = this.fields.every((field) => field.fieldIsValid())
  this.setState({isValid: isValid})
  return isValid
}

const clearForm = function(props) {
  this.setState(this.initialState(props))
}

export default {
  handleChange,
  registerField,
  validateForm,
  clearForm
}
