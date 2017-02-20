import React from 'react'

const Modal = (props) => {
  if (props.isVisible) {
    return (
      <div>
        <div className="modal">
          <div className="modal__head">
            <div className="modal__title">
            </div>
            <div className="modal__close">
              &times;  
            </div>
          </div>
          <div className="modal__body">
            <div className="module">
              Whoo all the modals
            </div>
          </div>
        </div>
        <div className="modal-overlay">
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
