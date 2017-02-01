import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { showParlors } from '../../actions/parlors'
import { showIceCreams } from '../../actions/iceCreams'

import NewIceCreamForm from '../../components/iceCreams/NewIceCreamForm'

class Parlor extends React.Component {

  componentDidMount() {
    // probably just want to fetch the one parlor with associated ice creams
    if (!this.props.parlors.allIds.length || !this.props.iceCreams.allIds.length) {
      this.props.dispatch(showParlors())
      this.props.dispatch(showIceCreams())
    }
  }

  render() {
    const parlorId = this.props.routeParams.id
    const parlor = this.props.parlors.byId[parlorId]

    if (this.props.iceCreams.isLoading || this.props.parlors.isLoading) {
      return(<div>"loading"</div>)
    } else if (this.props.iceCreams.isLoading){
      return(<div>"error"</div>)
    }else {
      let iceCreams = parlor.ice_creams.map((iceCreamId) => { return this.props.iceCreams.byId[iceCreamId] })
      return(
        <div>
          <h1>
            {parlor.name}
          </h1>
          <ul>
            
            { iceCreams.map(iceCream => (<li key={iceCream.id}><Link to={`/ice-creams/${iceCream.id}`}>{iceCream.title}</Link></li>)) }
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
    iceCreams: state.iceCreams
  }
} 

const ParlorContainer = connect(mapStateToProps)(Parlor)

export default ParlorContainer
