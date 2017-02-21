import React from 'react'
import { Link } from 'react-router'
import { showParlors } from '../../actions/parlors'
import NewParlorForm from '../parlors/NewParlorForm'
import Loader from '../sharedComponents/Loader'

class Parlors extends React.Component {
  componentDidMount() {
    if (!this.props.parlors.allIds.length) {
      this.props.dispatch(showParlors())
    }
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
        <NewParlorForm />
      </div>
    )
  }
}

export default Parlors
