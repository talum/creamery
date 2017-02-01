import React from 'react'
import { connect } from 'react-redux'
import { showIceCream } from '../../actions/iceCreams'

class IceCreamDetail extends React.Component {
  componentWillMount() {
    this.props.dispatch(showIceCream(this.props.routeParams.id))
  }

  render() {
    let iceCream = this.props.activeIceCream.iceCream
    let iceCreamReviews = iceCream.reviews

    if (iceCream.isLoading) {
      return (<div>Loading</div>)
    } else {
      return(
        <div>
          {iceCream.title}
          {iceCream.parlor}
        </div>
      )
    }
  }
}   

const mapStateToProps = (state) => {
  return {
    activeIceCream: state.activeIceCream
  }
}

IceCreamDetail = connect(mapStateToProps)(IceCreamDetail)

export default IceCreamDetail
