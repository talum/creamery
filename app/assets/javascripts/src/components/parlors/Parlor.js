import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { showParlors } from '../../actions/parlors'
import { showIceCreams } from '../../actions/iceCreams'

import Modal from '../sharedComponents/Modal'
import Loader from '../sharedComponents/Loader'
import NewIceCreamForm from '../../components/iceCreams/NewIceCreamForm'
import IceCreamListItem from '../../components/iceCreams/IceCreamListItem'

class Parlor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsVisible: false
    }
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(showParlors())
    this.props.dispatch(showIceCreams())
  }

  toggleModalVisibility() {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible
    })
  }

  render() {
    const parlorId = this.props.routeParams.id
    const parlor = this.props.parlors.byId[parlorId]
    const addIceCreamButton = (
      <button className="button button--color-black" onClick={this.toggleModalVisibility}>
        Add New Ice Cream
      </button>
    )

    if (this.props.iceCreams.isLoading || this.props.parlors.isLoading) {
      return(<Loader />)
    } else if (!parlor) {
      return (<div><h1>Sorry, this parlor does not exist</h1></div>)
    } else {
      let iceCreams = parlor.ice_creams.map((iceCreamId) => { return this.props.iceCreams.byId[iceCreamId] })
      return(
        <div>
          <h1>
            {parlor.name}
          </h1>
          {this.props.isAdmin && addIceCreamButton }
          <div className="flex-grid">
            { iceCreams.map(iceCream => (<IceCreamListItem key={iceCream.id} iceCream={iceCream}/>)) }
          </div>
          <div>
            { this.props.iceCreams.errors.join(", ") }
          </div>
        <Modal
          isVisible={this.state.modalIsVisible}
          toggleModal={this.toggleModalVisibility}
          modalBody={
          <NewIceCreamForm
            parlorId={parlorId}
            toggleModalVisibility={this.toggleModalVisibility}
          />
          }
        />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    parlors: state.parlors,
    iceCreams: state.iceCreams,
    loggedIn: state.sessions.loggedIn,
    isAdmin: state.sessions.isAdmin
  }
} 

const ParlorContainer = connect(mapStateToProps)(Parlor)

export default ParlorContainer
