import React from 'react'
import { connect } from 'react-redux'
import { showIceCream } from '../actions/iceCreams'

class IceCreamDetail extends React.Component {
  componentDidMount() {
    debugger
    this.props.dispatch(showIceCream(this.props.routeParams.id))
    //fetch all the related data for the ice cream
    // all the reviews
    // all the comments for the reviews?
  }

  render() {
    let iceCream = this.props.iceCream
    return(
      <div>
        {iceCream.title}
        {iceCream.parlor}
      </div>
    )
  }
}   

const mapStateToProps = (state) => {
  return {
    activeIceCream: state.activeIceCream
  }
}

IceCreamDetail = connect(mapStateToProps)(IceCreamDetail)

export default IceCreamDetail
