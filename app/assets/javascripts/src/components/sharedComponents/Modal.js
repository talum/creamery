import React from 'react'

const Modal = (props) => {
  if (props.isVisible) {
    return (
      <div className="site-overlay">
        <div className="modal">
          Modal content
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Modal
