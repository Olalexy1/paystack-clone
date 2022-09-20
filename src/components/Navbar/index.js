import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../images/paystack-logo.svg'
import NigFlag from '../../images/Nigeria.svg'
import { FaCaretDown } from 'react-icons/fa';

import './style.scss'

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-color" variant="light">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="123"
              height="22"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="links" href="#features">Why Paystack <FaCaretDown/> </Nav.Link>
            <Nav.Link className="links" href="#pricing">Customers</Nav.Link>
            <Nav.Link className="links" href="#deets">Pricing</Nav.Link>
            <Nav.Link className="links" href="#deets">Learn <FaCaretDown/></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="links" href="#deets">Developers <FaCaretDown/></Nav.Link>
            <Nav.Link className="links" href="#deets">Support <FaCaretDown/></Nav.Link>
            <Nav.Link className="links" href="#deets">Login</Nav.Link>
          </Nav>

          <Button className='btn'>Create Free Account</Button>

          <a href="#">
            <img
                src={NigFlag}
                width="16"
                height="15"
                className="d-inline-block align-top"
                alt="Nigeria Flag"
            />
          </a>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavigationBar;