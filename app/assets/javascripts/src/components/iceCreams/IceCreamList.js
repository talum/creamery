import React from 'react'
import { showIceCreams } from '../../actions/iceCreams'
import { showParlors } from '../../actions/parlors'
import { addFavorite } from '../../actions/favorites'
import Loader from '../sharedComponents/Loader'
import SearchBar from '../sharedComponents/SearchBar'
import FilteredIceCreams from './FilteredIceCreams'

class IceCreamList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchTerm: ""}
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.handleAddFavorite = this.handleAddFavorite.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(showIceCreams())
    this.props.dispatch(showParlors())
  }

  handleAddFavorite(iceCreamId) {
    this.props.dispatch(addFavorite(iceCreamId))
  }

  handleSearchInputChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    let iceCreams = this.props.iceCreams.allIds.map((id) => this.props.iceCreams.byId[id])
    let parlors   = this.props.parlors.byId

    if (this.props.iceCreams.isLoading || this.props.parlors.isLoading) {
      return (<Loader />)
    } else {
      return (
        <div>
          { this.props.iceCreams.errors.join(", ") }
          <SearchBar searchTerm={this.state.searchTerm} handleSearchInputChange={this.handleSearchInputChange} placeholderText={"Search ice cream"}/>
          <FilteredIceCreams
            parlors={parlors}
            iceCreams={iceCreams}
            searchTerm={this.state.searchTerm}
            loggedIn={this.props.loggedIn}
            handleAddFavorite={this.handleAddFavorite}
          />
        </div>
      )
    }
  }
}

export default IceCreamList
