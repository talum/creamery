import React from 'react'
import { connect } from 'react-redux'
import { showUser, updateUser } from '../../actions/users'
import ProfileForm from './ProfileForm'
import Loader from '../sharedComponents/Loader'

class Profile extends React.Component{

  componentWillMount() {
    this.props.dispatch(showUser(this.props.routeParams.id))
  }

  render() {
    if (this.props.currentProfile.isLoading) {
      return (<Loader />)
    } else {
      return(<ProfileForm currentProfile={this.props.currentProfile} />)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentProfile: state.currentProfile 
  }
}

let UserProfile = connect(mapStateToProps)(Profile)

export default UserProfile
