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
    return (
      <span className="nav__links">
        <li className="nav__link"><Link to={`/users/${sessionStorage.currentUserId}`}>My Profile</Link></li>
        <li className="nav__link" onClick={this.logOut}><a href="#">Logout</a></li>
      </span>
    )
  }

  loggedOutLinks() {
    return (
      <span className="nav__links">
        <li className="nav__link"><Link to='/users'>Sign Up</Link></li>
        <li className="nav__link"><Link to='/login'>Login</Link></li>
      </span>
    )
  }

  render() {
    return (
      <nav>
        <div className="nav">
          <div className="nav__inner">
            <div className="nav__logo"><Link to='/'>Creamery</Link></div>
            <ul className="nav__items">
              <li className="nav__link"><Link to='faq'>FAQ</Link></li>
              <li className="nav__link"><Link to='/parlors'>Parlors</Link></li>
              { this.props.loggedIn ? this.loggedInLinks() : this.loggedOutLinks() }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.sessions.loggedIn,
    isAdmin: state.sessions.isAdmin
  }
}

Nav = connect(mapStateToProps)(Nav)

export default Nav
