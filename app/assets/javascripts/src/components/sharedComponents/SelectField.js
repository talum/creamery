import React from 'react'
import InputErrorMessage from './InputErrorMessage' 

class SelectField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValid: null,
      errorIsVisible: false
    } 
    this.validateField = this.validateField.bind(this)
  }
  componentDidMount() {
    this.props.registerField(this)
  }

  fieldIsValid() {
    let fieldIsValid = this.props.validate(this.state.value)
    if (this.props.isRequired && !!this.props.value.length && fieldIsValid) {
      return true 
    } else {
      return false
    }
  }

  borderColor() {
    let isValid = this.state.isValid
    if (isValid === true) {
      return "input-field--border--green"
    } else if (isValid === false) {
      return "input-field--border--pink"
    } else {
      return 
    }
  }

  validateField(event) {
    this.props.validateForm()
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
        <select
          className={`input-field ${this.borderColor()}`}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onBlur={this.validateField}
          onChange={this.props.handleChange}
        >
          {this.props.children}
        </select>
        <InputErrorMessage 
          isVisible={this.state.errorIsVisible}
          message={this.state.message}
        />
      </div>
    )
  }
}

SelectField.defaultProps = {
  isRequired: false,
  validate: function() {
    return true
  },
  registerField: function() {
    //noop
  },
  inputType: "text",
  emptyMessage: "Field is required",
  validateForm: function() {
    //noop
  }
}

export default SelectField
