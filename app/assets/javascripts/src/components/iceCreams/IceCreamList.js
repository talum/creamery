import React from 'react'
import { showIceCreams } from '../../actions/iceCreams'
import Loader from '../sharedComponents/Loader'
import SearchBar from '../sharedComponents/SearchBar'
import FilteredIceCreams from './FilteredIceCreams'

class IceCreamList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchTerm: ""}
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(showIceCreams())
  }

  handleSearchInputChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    let iceCreams = Object.values(this.props.iceCreams.byId)

    if (this.props.iceCreams.isLoading) {
      return (<Loader />)
    } else {
      return (
        <div>
          { this.props.iceCreams.errors.join(", ") }
          <SearchBar searchTerm={this.state.searchTerm} handleSearchInputChange={this.handleSearchInputChange} placeholderText={"Search ice cream"}/>
          <FilteredIceCreams iceCreams={iceCreams} searchTerm={this.state.searchTerm}/>
        </div>
      )
    }
  }
}

export default IceCreamList
