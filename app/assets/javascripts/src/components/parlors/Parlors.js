import React from 'react'
import { Link } from 'react-router'
import { showParlors } from '../../actions/parlors'
import Modal from '../sharedComponents/Modal'
import NewParlorForm from '../parlors/NewParlorForm'
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

    return(
      <div>
        { this.props.parlors.isLoading && <Loader /> }
        <div>
          { this.props.parlors.errors.join(", ") }
        </div>
        <button onClick={this.toggleModalVisibility}>
          Add New Parlor
        </button>
        <div className="flex-grid">
          { parlors.map((parlor) => {
              return (
                <div key={parlor.id} className="flex-grid__item">
                  <div className="module">
                    <div className="card card--mosaic">
                      <div className="card__body">
                        Default Image
                      </div>
                      <div className="card__footer">
                        <Link to={`/parlors/${parlor.id}`}>
                          <h2 className="heading heading--level-1">{parlor.name}</h2>
                        </Link>
                        Footer goes here
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Modal
          isVisible={this.state.modalIsVisible}
          toggleModal={this.toggleModalVisibility}
          modalBody={
            <NewParlorForm />
          }
        />
      </div>
    )
  }
}

export default Parlors
