import { connect } from 'react-redux'
import IceCreamList from '../iceCreams/IceCreamList'

const mapStateToProps = (state) => {
  return {
    parlors: state.parlors,
    iceCreams: state.iceCreams,
    loggedIn: state.sessions.loggedIn
  }
}

const IceCreamListContainer = connect(mapStateToProps)(IceCreamList)

export default IceCreamListContainer
