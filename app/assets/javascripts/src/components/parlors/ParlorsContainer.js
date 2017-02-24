import { connect } from 'react-redux'
import Parlors from '../parlors/Parlors'

const mapStateToProps = (state) => {
  return {
    parlors: state.parlors,
    loggedIn: state.sessions.loggedIn
  }
}

const ParlorsContainer = connect(mapStateToProps)(Parlors)

export default ParlorsContainer
