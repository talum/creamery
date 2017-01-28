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
  
  clearForm() {
    this.setState({title: ''})
  }

  render() {
    return(
      <div>
        New Ice Cream Form
        <form onSubmit={this.handleSubmit}>
          <InputField
            name={"title"}
            value={this.state.name}
            placeholder={"title"}
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
