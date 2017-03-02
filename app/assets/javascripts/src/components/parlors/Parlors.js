import React from 'react'
import { showParlors } from '../../actions/parlors'
import Modal from '../sharedComponents/Modal'
import NewParlorForm from '../parlors/NewParlorForm'
import ParlorItem from '../parlors/ParlorItem'
import Loader from '../sharedComponents/Loader'

class Parlors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsVisible: false
    }
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this)
  }

  componentDidMount() {
    if (!this.props.parlors.allIds.length) {
      this.props.dispatch(showParlors())
    }
  }

  toggleModalVisibility() {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible
    })
  }

  render() {
    let parlorsById = this.props.parlors.byId
    let parlors = Object.values(parlorsById)
    const addParlorButton = (
      <button 
        className="button button--color-black"
        onClick={this.toggleModalVisibility}>
        Add New Parlor
      </button>
    )

    return(
      <div>
        { this.props.parlors.isLoading && <Loader /> }
        <div>
          { this.props.parlors.errors.join(", ") }
        </div>
        { this.props.loggedIn && addParlorButton }
        <div className="flex-grid">
          { parlors.map((parlor) => {
              return (
                <div key={parlor.id} className="flex-grid__item">
                  <ParlorItem parlor={parlor} />
                </div>
              )
            })
          }
        </div>
        <Modal
          isVisible={this.state.modalIsVisible}
          toggleModal={this.toggleModalVisibility}
          modalBody={
            <NewParlorForm 
              toggleModalVisibility={this.toggleModalVisibility}
            />
          }
        />
      </div>
    )
  }
}

export default Parlors
