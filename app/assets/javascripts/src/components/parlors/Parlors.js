import React from 'react'
import { Link } from 'react-router'
import { showParlors } from '../../actions/parlors'
import Modal from '../sharedComponents/Modal'
import IceCreamIcon from '../sharedComponents/IceCreamIcon'
import IceCreamCone1 from '../sharedComponents/IceCreamCone5'
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
                  <div className="module">
                    <div className="card card--mosaic">
                      <div className="card__body">
                        <IceCreamCone1 />
                      </div>
                      <div className="card__footer">
                        <Link to={`/parlors/${parlor.id}`}>
                          <h2 className="heading heading--level-1">{parlor.name}</h2>
                        </Link>
                        <div className="module module--padding--s">
                          <div className="media-block media-block--spread media-block--alt-side">
                            <div className="media-block__media">
                              <IceCreamIcon />
                            </div>
                            <div className="media-block__content">
                            # of Ice Creams
                            </div>
                          </div>
                        </div>
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
