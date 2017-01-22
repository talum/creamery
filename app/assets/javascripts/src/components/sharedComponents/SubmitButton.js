import React from 'react'

class SubmitButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <input type="submit" value="submit" onClick={this.props.handleSubmit} className="btn waves-effect waves-light" />
    )
  }

}

export default SubmitButton
