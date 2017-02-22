import React from 'react'

class InputField extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <input
        className="input-field"
        type={this.props.inputType || "text"}
        name={this.props.name} value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      />
    )
  }
}

export default InputField
