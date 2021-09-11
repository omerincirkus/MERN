import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Watcha</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='omer '>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart' />
                Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user' /> Sıgn-In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
