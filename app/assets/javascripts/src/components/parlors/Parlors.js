import React from 'react'
import { showParlors } from '../../actions/parlors'
import Modal from '../sharedComponents/Modal'
import NewParlorForm from '../parlors/NewParlorForm'
import FilteredParlors from '../parlors/FilteredParlors'
import Loader from '../sharedComponents/Loader'
import SearchBar from '../sharedComponents/SearchBar'
import GoogleMap from '../sharedComponents/GoogleMap'

class Parlors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsVisible: false,
      searchTerm: ""
    }
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(showParlors())
  }

  toggleModalVisibility() {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible
    })
  }

  handleSearchInputChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    let parlorsById = this.props.parlors.byId
    let parlors = this.props.parlors.allIds.map((id) => parlorsById[id])
    const addParlorButton = (
      <button 
        className="button button--color-black "
        onClick={this.toggleModalVisibility}>
        Add New Parlor
      </button>
    )
    if (this.props.parlors.isLoading) {
      return (<Loader />)
    } else {
      return(
        <div>
          <div className="module">
            { this.props.parlors.errors.join(", ") }
            { this.props.isAdmin && addParlorButton }
          </div>
          <SearchBar searchTerm={this.state.searchTerm} handleSearchInputChange={this.handleSearchInputChange} placeholderText={"Search parlors"}/>
          <FilteredParlors parlors={parlors} searchTerm={this.state.searchTerm} />
          <Modal
            isVisible={this.state.modalIsVisible}
            toggleModal={this.toggleModalVisibility}
            modalBody={
              <NewParlorForm 
                toggleModalVisibility={this.toggleModalVisibility}
              />
            }
          />
          <GoogleMap parlors={parlors} />
        </div>
      )
    }
  }
}

export default Parlors
