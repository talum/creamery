import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { showParlors } from '../../actions/parlors'
import { showIceCreams } from '../../actions/iceCreams'
import { addFavorite, removeFavorite } from '../../actions/favorites'

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
    this.handleAddFavorite = this.handleAddFavorite.bind(this)
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this)
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

  handleAddFavorite(iceCreamId) {
    this.props.dispatch(addFavorite(iceCreamId))
  }

  handleRemoveFavorite(favoriteId, iceCreamId) {
    this.props.dispatch(removeFavorite(favoriteId, iceCreamId))
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
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            <div>
              <div className="module">
                <div className="media-block media-block--alt-side">
                  <div className="media-block__media">
                    {this.props.isAdmin && addIceCreamButton }
                  </div>
                  <div className="media-block__content">
                    <h1>{parlor.name}</h1>
                  </div>
                </div>
                <div className="heading util--padding-ts">
                  {parlor.street_address} | {parlor.city}, {parlor.state} {parlor.zip_code}
                </div>
              </div>
              <div className="flex-grid flex-grid--thirds">
                { iceCreams.map(iceCream => (<IceCreamListItem
                  key={iceCream.id}
                  iceCream={iceCream}
                  parlor={parlor} 
                  loggedIn={this.props.loggedIn}
                  handleAddFavorite={this.handleAddFavorite}
                  handleRemoveFavorite={this.handleRemoveFavorite}
                  />)) }
        
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
        </ReactCSSTransitionGroup>
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
