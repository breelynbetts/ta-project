import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

import Logo from '../images/logo.png'

function AppBar() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            {' '}
            <img
              src={Logo}
              height="60"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="restrooms">Find</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default withRouter(AppBar)
