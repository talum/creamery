import React from 'react'
import InputErrorMessage from './InputErrorMessage' 

class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValid: false,
      errorIsVisible: false
    } 
    this.validateField = this.validateField.bind(this)
  }

  validateField(event) {
    let errorIsVisible
    let message
    let isValid = this.props.validate(event)

    if (this.props.isRequired && !this.props.value.length) {
      isValid = false
      errorIsVisible = true
      message = this.props.emptyMessage
    } else if (isValid) {
      errorIsVisible = false
    } else {
      errorIsVisible = true
      message = this.props.errorMessage
    }

    this.setState({
      isValid: isValid,
      errorIsVisible: errorIsVisible,
      message: message
    })
  }


  render() {
    return(
      <div>
        <input
          className="input-field"
          type={this.props.inputType}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onBlur={this.validateField}
          onChange={this.props.handleChange}
        />
        <InputErrorMessage 
          isVisible={this.state.errorIsVisible}
          message={this.state.message}
        />
      </div>
    )
  }
}

InputField.defaultProps = {
  validate: function() {
    return true
  },
  inputType: "text",
  emptyMessage: "Field is required"
}

export default InputField
