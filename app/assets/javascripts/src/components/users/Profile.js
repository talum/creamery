import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import moment from 'moment'
import { connect } from 'react-redux'
import { oauthInstagram } from '../../adapters/creameryApi'
import { showUser, updateUser } from '../../actions/users'
import { showIceCreams } from '../../actions/iceCreams'
import { showParlors } from '../../actions/parlors'
import { addFavoriteProfile, removeFavoriteProfile } from '../../actions/favorites'
import ProfileForm from './ProfileForm'
import Modal from '../sharedComponents/Modal'
import Loader from '../sharedComponents/Loader'
import InstagramIcon from '../sharedComponents/InstagramIcon.js'
import IceCreamListItem from '../iceCreams/IceCreamListItem'

class Profile extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      modalIsVisible: false
    }
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this)
    this.connectInstagram = this.connectInstagram.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(showIceCreams())
    this.props.dispatch(showUser(this.props.routeParams.id))
    this.props.dispatch(showParlors())
  }

  toggleModalVisibility() {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible
    })
  }

  isCurrentUserProfile() {
    return (sessionStorage.currentUserId == this.props.routeParams.id )
  }

  connectInstagram() {
    oauthInstagram().then((response) => {
      let redirectUrl = response.data.redirect_url
      window.location.href = redirectUrl
    })
  }

  render() {
    const editProfileButton = (
      <button className="button button--color-black" onClick={this.toggleModalVisibility}>
        Edit Profile
      </button>
    )

    const connectInstagramButton = (
      <button className='button button--color-black button--has-icon' onClick={this.connectInstagram}>
        <div className='button__icon button__icon--s'>
          <InstagramIcon />
        </div>
        <div className='button__text'>
          Connect Instagram
        </div>
      </button>
    )

    if (this.props.currentProfile.isLoading || this.props.iceCreams.isLoading || this.props.parlors.isLoading) {
      return (<Loader />)
    } else if (this.props.currentProfile.errors.length > 0) {
      return (<div>User not found</div>)
    } else {
      let { first_name, last_name, date_of_birth } = this.props.currentProfile.userData.profile
      let { favorite_ice_creams, favorites } = this.props.currentProfile.userData
      let favoriteIceCreamIds = favorite_ice_creams.map((favorite_ice_cream) => favorite_ice_cream.id)
      let favoriteIceCreamListItems = favoriteIceCreamIds.map((id) => {
        let iceCream = this.props.iceCreams.byId[id]
        let parlor   = this.props.parlors.byId[iceCream.parlor_id]
        let favorite = favorites.find((favorite) => favorite.favoritable_id == id)

        return (
          <IceCreamListItem 
            key={id}
            iceCream={iceCream}
            parlor={parlor}
            loggedIn={this.props.loggedIn}
            handleAddFavorite={() => this.props.dispatch(addFavoriteProfile(id))}
            handleRemoveFavorite={() => this.props.dispatch(removeFavoriteProfile(favorite.id, id))}
          />
        )
      })
      return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
          <div>
            <div className="module">
              <div className="util--padding-ls">
                <div className="media-block media-block--alt-side">
                  <div className="media-block__media">
                    { this.isCurrentUserProfile() && editProfileButton }
                  </div>
                  <div className="media-block__content">
                    <h2 className="heading heading--level-1">{ first_name } { last_name }</h2>
                  </div>
                </div>
                <h3 className="heading heading--level-3 util--padding-ts">Birthday: { moment(date_of_birth, 'YYYY-MM-DD HH:mm').format('MMMM DD, YYYY') }</h3>
                <div className='module module--padding-flat'>
                  { this.isCurrentUserProfile() && connectInstagramButton }
                </div>
              </div>
            </div>
            <div className="module">
              <div className="util--padding-tl">
                <div className="module">
                  <h2 className="heading heading--level-2">Favorite Ice Creams</h2>
                </div>
                <div className="flex-grid flex-grid--thirds">
                  { favoriteIceCreamListItems }
                </div>
              </div>
            </div>
            <Modal
              isVisible={this.state.modalIsVisible}
              toggleModal={this.toggleModalVisibility}
              modalBody={
                <ProfileForm currentProfile={this.props.currentProfile} toggleModalVisibility={this.toggleModalVisibility} />
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
    currentProfile: state.currentProfile,
    iceCreams: state.iceCreams,
    parlors: state.parlors,
    loggedIn: state.sessions.loggedIn
  }
}

let UserProfile = connect(mapStateToProps)(Profile)

export default UserProfile
