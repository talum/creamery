import React from 'react'

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: props.email,
      first_name: props.first_name,
      last_name: props.last_name,
      date_of_birth: props.date_of_birth
    }
  }

  render() {
    return(
      <form>
        <input type="text" placeHolder="first name" value={this.state.first_name} />
        <input type="text" placeHolder="last name" value={this.state.last_name} />
        <input type="date" placeHolder= "date of birth" value={this.state.date_of_birth} />
      </form>
    )
  }
}

ProfileForm.defaultProps = {
  first_name: "",
  last_name: "",
  date_of_birth: ""
}

export default ProfileForm
