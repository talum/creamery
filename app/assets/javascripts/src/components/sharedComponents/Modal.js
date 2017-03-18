import React from 'react'

const Modal = (props) => {
  if (props.isVisible) {
    return (
      <div className="modal-overlay">
        <div className="modal-overlay__inner">
          <div className="modal">
            <div className="modal__head">
              <div className="modal__title">
                {props.modalHead}
              </div>
              <div className="modal__close" onClick={props.toggleModal}>
                &times;
              </div>
            </div>
            <div className="modal__body">
              <div className="module">
                {props.modalBody}
              </div>
            </div>
          </div>
          <div className="modal-outer" onClick={() => console.log('clicked')}/>
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
