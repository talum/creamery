import React from 'react'
import { connect } from 'react-redux'
import { showUser, updateUser } from '../../actions/users'
import { showIceCreams } from '../../actions/iceCreams'
import { showParlors } from '../../actions/parlors'
import { addFavoriteProfile, removeFavoriteProfile } from '../../actions/favorites'
import ProfileForm from './ProfileForm'
import Modal from '../sharedComponents/Modal'
import Loader from '../sharedComponents/Loader'
import IceCreamListItem from '../iceCreams/IceCreamListItem'

class Profile extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      modalIsVisible: false
    }
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this)
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

  render() {
    const editProfileButton = (
      <button className="button button--color-black" onClick={this.toggleModalVisibility}>
        Edit Profile
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
        <div>
          { (sessionStorage.currentUserId == this.props.routeParams.id ) && editProfileButton }
          <Modal
            isVisible={this.state.modalIsVisible}
            toggleModal={this.toggleModalVisibility}
            modalBody={
              <ProfileForm currentProfile={this.props.currentProfile} />
            }
          />
          <div className="module">
            <div>{ first_name }</div>
            <div>{ last_name }</div>
            <div>{ date_of_birth }</div>
            <h2>Favorite Ice Creams</h2>
            <div className="flex-grid flex-grid--thirds">
              { favoriteIceCreamListItems }
            </div>
          </div>
        </div>
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
