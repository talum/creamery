import React from 'react'

const InputErrorMessage = (props) => {
  if (props.isVisible) {
    return (
      <div className="module">
        <div className="heading heading--color-pink">
          { props.message}
        </div>
      </div>
    ) 
  } else {
    return (<div></div>)
  }
}

export default InputErrorMessage

