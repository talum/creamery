import React from 'react'
import { connect } from 'react-redux'
import { showUser } from '../../actions/users'
import ProfileForm from './ProfileForm'

class Profile extends React.Component{

  componentWillMount() {
    this.props.dispatch(showUser(this.props.routeParams.id))
  }

  render() {
    return(<ProfileForm currentProfile={this.props.currentProfile} />)
  }
}

const mapStateToProps = (state) => {
  return {
    currentProfile: state.currentProfile 
  }
}

let UserProfile = connect(mapStateToProps)(Profile)

export default UserProfile
