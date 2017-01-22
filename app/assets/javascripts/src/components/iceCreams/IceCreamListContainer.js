import { connect } from 'react-redux'
import IceCreamList from '../iceCreams/IceCreamList'

const mapStateToProps = (state) => {
  return {
    iceCreams: state.iceCreams,
    loading: state.loading
  }
}


const IceCreamListContainer = connect(mapStateToProps)(IceCreamList)

export default IceCreamListContainer
