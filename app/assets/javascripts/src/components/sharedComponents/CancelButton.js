import React from 'react'

class CancelButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <button
        onClick={this.props.handleCancel}
        className="button button--color-gray button--width-full">
        Cancel
      </button>
    )
  }

}

export default CancelButton
