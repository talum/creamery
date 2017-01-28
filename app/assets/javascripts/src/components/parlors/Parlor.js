import React from 'react'
import { connect } from 'react-redux'
import { showParlors } from '../../actions/parlors'
import { hideLoader } from '../../actions'

import NewIceCreamForm from '../../components/iceCreams/NewIceCreamForm'

class Parlor extends React.Component {

  componentDidMount() {
    if (!this.props.parlors.allIds.length) {
      this.props.dispatch(showParlors())
    } else {
      this.props.dispatch(hideLoader())
    }
  }

  render() {
    const parlorId = this.props.routeParams.id
    const parlor = this.props.parlors.byId[parlorId]

    if (this.props.loading) {
      return(<div>"loading"</div>)
    } else {
      let iceCreams = parlor.ice_creams.map((iceCreamId) => { return this.props.iceCreams.byId[iceCreamId] })
      debugger
      return(
        <div>
          <h1>
            { parlor.name }
          </h1>
          <ul>
          </ul>
          <NewIceCreamForm parlorId={parlorId}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    parlors: state.parlors,
    iceCreams: state.iceCreams,
    loading: state.loading
  }
} 

const ParlorContainer = connect(mapStateToProps)(Parlor)

export default ParlorContainer
