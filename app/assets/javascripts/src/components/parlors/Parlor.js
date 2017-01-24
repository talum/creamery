import React from 'react'
import { connect } from 'react-redux'
import { showParlors } from '../../actions/parlors'
import { hideLoader } from '../../actions'
class Parlor extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.length) {
      this.props.dispatch(showParlors())
    } else {
      this.props.dispatch(hideLoader())
    }
  }

  render() {
    let parlor = this.props.parlors.find((parlor) => { return parlor.id === parseInt(this.props.routeParams.id) } )

    if (this.props.loading) {
      return(<div>"loading"</div>)
    } else {
      return(
        <div>
          <h1>
            { parlor.name }
          </h1>
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
