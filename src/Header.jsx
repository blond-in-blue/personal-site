import React, {Component} from 'react'
// import logo from './logo.svg'
import {Link, NavLink} from 'react-router-dom'
import {Nav, Navbar, NavbarBrand} from 'reactstrap'

const divStyle = {
  width: '100%',
  textAlign: 'center',
  alignContent: 'center'
}

/**
 * Contains logo and links to site sections.
 *
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand className="mx-auto" style={divStyle}>
            <Link to="/github-io/score-counter" className='navbar-brand'>
              Hunter Holder
            </Link>
          </NavbarBrand>
          <Nav className="mx-auto" bsstyle="pills">
            <NavLink to="/github-io/score-counter">score counter</NavLink>
            <NavLink to="/github-io/about">about me</NavLink>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header
