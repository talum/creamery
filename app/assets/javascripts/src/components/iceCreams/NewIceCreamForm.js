import React from 'react'
import { connect } from 'react-redux'
import InputField from '../sharedComponents/InputField'
import SubmitButton from '../sharedComponents/SubmitButton'
import { addIceCream } from '../../actions/iceCreams'

class IceCreamForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  initialState(props) {
    return {
      title: '',
      flavors: '',
      parlorId: props.parlorId
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addIceCream(this.state))
    this.clearForm()
  }

  clearForm () {
    this.setState(this.initialState(this.props))
  }
  
  render() {
    return(
      <div>
        <h2>New Ice Cream Form</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name={"title"}
            value={this.state.title}
            placeholder={"title"}
            handleChange={this.handleChange}
            />
          <InputField
            name={"flavors"}
            value={this.state.flavors}
            placeholder={"flavors"}
            handleChange={this.handleChange}
            />
           <SubmitButton handleSubmit={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

let NewIceCreamForm = connect()(IceCreamForm)

export default NewIceCreamForm
