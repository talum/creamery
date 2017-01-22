import React from 'react'
import { connect } from 'react-redux'
import { addParlor } from '../../actions/parlors'
//todo: move into shared components
class InputField extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <input type="text" name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.handleChange}/>
    )
  }
}

class SubmitButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <input type="submit" value="submit" onClick={this.props.handleSubmit} className="btn waves-effect waves-light" />
    )
  }

}

class ParlorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      chain: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addParlor(this.state))
  }

  render() {
    return(
      <div>
        <h1>Add New Parlor</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField 
            name={"name"}
            value={this.state.name}
            placeholder={"name"}
            handleChange={this.handleChange}
          />
          <InputField 
            name={"streetAddress"}
            value={this.state.streetAddress}
            placeholder={"Street Address"}
            handleChange={this.handleChange}
          />
          <InputField 
            name={"city"}
            value={this.state.city}
            placeholder={"City"}
            handleChange={this.handleChange}
          />
          <InputField 
            name={"state"}
            value={this.state.state}
            placeholder={"State"}
            handleChange={this.handleChange}
          />
          <InputField 
            name={"zipCode"}
            value={this.state.zipCode}
            placeholder={"Zipcode"}
            handleChange={this.handleChange}
          />
          <SubmitButton handleSubmit={this.handleSubmit}/>
        </form>
      </div>
    )
  }

}

//connect this form to the store
let NewParlorForm = connect()(ParlorForm)

export default NewParlorForm
