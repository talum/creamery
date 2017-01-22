import { connect } from 'react-redux'
import Parlors from '../parlors/Parlors'

const mapStateToProps = (state) => {
  return {
    parlors: state.parlors,
    loading: state.loading
  }
}

const ParlorsContainer = connect(mapStateToProps)(Parlors)

export default ParlorsContainer
