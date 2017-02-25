import React from 'react'

const InputErrorMessage = (props) => {
  if (props.isVisible) {
    return (
      <div>
        { props.message}
      </div>
    ) 
  } else {
    return (<div></div>)
  }
}

export default InputErrorMessage

