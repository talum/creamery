import React from 'react'
import { connect } from 'react-redux'
import { showParlors } from '../../actions/parlors'
import { hideLoader } from '../../actions'

import NewIceCreamForm from '../../components/iceCreams/NewIceCreamForm'

class Parlor extends React.Component {

  componentDidMount() {
    if (!this.props.length) {
      this.props.dispatch(showParlors())
    } else {
      this.props.dispatch(hideLoader())
    }
  }

  render() {
    let parlorId = this.props.routeParams.id
    let parlor = this.props.parlors.byId[parlorId]

    if (this.props.loading) {
      return(<div>"loading"</div>)
    } else {
      return(
        <div>
          <h1>
            { parlor.name }
          </h1>
          <NewIceCreamForm parlorId={parlor.id}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    parlors: state.parlors,
    loading: state.loading
  }
} 

const ParlorContainer = connect(mapStateToProps)(Parlor)

export default ParlorContainer
