import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logOutUser } from '../actions/sessions'  

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    this.props.dispatch(logOutUser())
  }

  loggedInLinks() {
    return (<li onClick={this.logOut}><a href="#">Logout</a></li>)
  }

  loggedOutLinks() {
    return (
      <span>
        <li><Link to='/users'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </span>
    )
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper deep-purple darken-4">
          <div className="brand-logo"><Link to='/'>Creamery</Link></div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/parlors'>Parlors</Link></li>
            { this.props.loggedIn ? this.loggedInLinks() : this.loggedOutLinks() }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.sessions.loggedIn
  }
}

Nav = connect(mapStateToProps)(Nav)

export default Nav
