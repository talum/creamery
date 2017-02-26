import React from 'react'
import { connect } from 'react-redux'
import Form from '../sharedComponents/Form'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'
import { addIceCream } from '../../actions/iceCreams'

class IceCreamForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState(props)
    this.handleChange = Form.handleChange.bind(this)
    this.validateForm = Form.validateForm.bind(this)
    this.registerField = Form.registerField.bind(this)
    this.clearForm = Form.clearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.fields = []
  }

  initialState(props) {
    return {
      title: '',
      flavors: '',
      imageName: '',
      imageFile: '',
      parlorId: props.parlorId,
      isValid: false
    }
  }

  handleImageChange(event) {
    let reader    = new FileReader()
    let image     = event.target.files[0]
    let imageName = event.target.value

    reader.readAsDataURL(image)
    reader.onloadend = () => {
      this.setState({
        imageName: imageName,
        imageFile: reader.result
      })
    }

  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addIceCream(this.state))
    this.props.toggleModalVisibility()
    this.clearForm(this.props)
  }

  render() {
    return(
      <div>
        <h2>New Ice Cream Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="module">
            <InputField
              name={"title"}
              value={this.state.title}
              placeholder={"title"}
              handleChange={this.handleChange}
              isRequired={true}
              validateForm={this.validateForm}
              registerField={this.registerField}
            />
          </div>
          <div className="module">
            <InputField
              name={"flavors"}
              value={this.state.flavors}
              placeholder={"flavors"}
              handleChange={this.handleChange}
            />
          </div>
          <div className="module">
            <InputField
              inputType={"file"}
              handleChange={this.handleImageChange}
            />
          </div>
          <div className="module">
            <img className="image-frame" src={this.state.imageFile}/>
          </div>
          <div className="module">
            <SubmitButton
              isDisabled={!this.state.isValid}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    )
  }
}

let NewIceCreamForm = connect()(IceCreamForm)

export default NewIceCreamForm
