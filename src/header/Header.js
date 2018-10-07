import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fa
} from 'mdbreact'

import VisibilitySensor from 'react-visibility-sensor'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user,
      collapse: false,
      isWideEnough: false
    }
  }
  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    })
  }
  visibleChange = isVisible => {
    this.setState({ isWideEnough: !isVisible })
  }

  render() {
    const { user, collapse, isWideEnough } = this.state
    const authenticatedOptions = (
      <React.Fragment>
        <NavItem>
          <Dropdown size="md">
            <DropdownToggle nav caret>
              <Fa icon="cog" size="xs" />
            </DropdownToggle>
            <DropdownMenu right={isWideEnough}>
              <DropdownItem to="/change-password">
                Change Password
                <Fa className="ml-2" icon="exchange" size="xs" />
              </DropdownItem>
              <DropdownItem to="/sign-out">
                Sign Out
                <Fa className="ml-2" icon="sign-out" size="xs" />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </React.Fragment>
    )

    const unauthenticatedOptions = (
      <React.Fragment>
        <NavItem>
          <NavLink to="/sign-up">
            Sign Up
            <Fa className="ml-2" icon="level-up" size="xs" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sign-in">
            Sign In
            <Fa className="ml-2" icon="sign-in" size="xs" />
          </NavLink>
        </NavItem>
      </React.Fragment>
    )

    const alwaysOptions = (
      <React.Fragment>
        <NavItem>
          <NavLink className="HomeLink" to="/">
            <Fa icon="home" size="xs" />
          </NavLink>
        </NavItem>
      </React.Fragment>
    )

    return (
      <header className="main-header">
        <Navbar className="Navbar" dark expand="md" scrolling>
          <NavbarBrand>
            <strong>Uber</strong>
          </NavbarBrand>
          <VisibilitySensor onChange={this.visibleChange}>
            <NavbarToggler onClick={this.onClick} />
          </VisibilitySensor>
          <Collapse isOpen={collapse} navbar>
            <NavbarNav left>{alwaysOptions}</NavbarNav>
            <NavbarNav right>
              {user && <span>Welcome, {user.email}</span>}
              {user ? authenticatedOptions : unauthenticatedOptions}
            </NavbarNav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header
