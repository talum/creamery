import { connect } from 'react-redux'
import IceCreamList from '../components/IceCreamList'

const mapStateToProps = (state) => {
  return {
    iceCreams: state.iceCreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIceCreamClick: (id) => {
      dispatch()
    }
  }
}

const IceCreamListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamList)

export default IceCreamListContainer
