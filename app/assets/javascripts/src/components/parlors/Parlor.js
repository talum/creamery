import React from 'react'
import { connect } from 'react-redux'
import { showParlors } from '../../actions/parlors'

class Parlor extends React.Component {
  constructor(props) {
    super(props)
    if (!props.length) {
      props.dispatch(showParlors())
    }
  }

  render() {
    let parlor = this.props.parlors.find((parlor) => { debugger } )

    if (this.props.loading) {
      return(<div>"loading"</div>)
    } else {
      return(
        <div>
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
