import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../images/paystack-logo.svg'
import NigFlag from '../../images/Nigeria.svg'

import Choose from '../../images/Why-choose-paystack-icon.svg'
import Success from '../../images/Success-rates-icon.svg'
import Demo from '../../images/Demo-icon.svg'
import Blog from '../../images/Blog-icon.svg'
import Guides from '../../images/Guides-icon.svg'
import Video from '../../images/play.svg'
import Decode from '../../images/d-sign.svg'
import Ghflag from '../../images/Ghana.svg'
import SouthAfricaflag from '../../images/South-Africa.svg'
import LogoSmall from '../../images/paystack-icon.svg'


import { FaCaretDown } from 'react-icons/fa';

import './style.scss'

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-color" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="/">
            <img
              src={logo}
              width="123"
              height="22"
              className="d-inline-block align-top"
              alt="Paystack logo"
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav me-auto">
            <Nav.Link className="links"  id="why-link" href="#features">Why Paystack <FaCaretDown/> 
            <ul className="dd_left animate__animated animate__backInUp">
            <li>
              <div>
                <ul>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Choose} />
                        </div>
                        <div className="item-text">
                          <h1>Why Choose Paystack</h1>
                          <p>
                            Over 70,000 businesses trust <br/> Paystack. Here’s why.
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Success} />
                        </div>
                        <div className="item-text">
                          <h1>Success Rates</h1>
                          <p>
                            Get the best transaction success <br/> rates in the
                            industry
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Demo} />
                        </div>
                        <div className="item-text">
                          <h1>Demo</h1>
                          <p>
                            See the Paystack Checkout Form <br/> and Dashboard in
                            action
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <div className="paystack-for">
                  <p>YOUR GROWTH STAGE</p>
                  <ul>
                    <li>
                      <a href="#">
                        <h2>For Entrepreneurs</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Corporates</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Global Brands</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Startups</h2>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="paystack-for">
                  <p>YOUR BUSINESS TYPE</p>
                  <ul>
                    <li>
                      <a href="#">
                        <h2>For Fintechs</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Schools</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>For Betting</h2>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
            </Nav.Link>

            

            <Nav.Link className="links" href="#pricing">Customers</Nav.Link>
            <Nav.Link className="links" href="#deets">Pricing</Nav.Link>
            <Nav.Link className="links" id="learn-link" href="#deets">Learn <FaCaretDown/>
            <ul className="dd_learn animate__animated animate__backInUp">
            <li>
              <div>
                <ul>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Blog} />
                        </div>
                        <div className="item-text">
                          <h1>Blog</h1>
                          <p>
                            Original lessons about making the internet work for
                            your business
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Guides} />
                        </div>
                        <div className="item-text">
                          <h1>Guides</h1>
                          <p>
                            Big ideas in payments, explained in simple English
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Video} />
                        </div>
                        <div className="item-text">
                          <h1>Video Tutorials</h1>
                          <p>Quick video tutorials on how to use Paystack</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="item">
                        <div className="item-icon">
                          <img src={Decode} />
                        </div>
                        <div className="item-text">
                          <h1>Decode Fintech</h1>
                          <p>
                            The trade email newsletter and podcast for leaders
                            in African fintech
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <div className="paystack-for">
                  <p>COMPANY</p>
                  <ul>
                    <li>
                      <a href="#">
                        <h2>About Us</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Subscribe</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Compliance</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Careers</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Brand</h2>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Media Kit</h2>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          </Nav.Link>
          </Nav>
          <Nav className='nav'>
            <Nav.Link className="links" href="#deets">Developers <FaCaretDown/>
              <ul className="dd_right animate__animated animate__backInUp">
              <li>
                <ul>
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Documentation</a>
                  </li>

                  <li>
                    <a href="#">Integrations</a>
                  </li>

                  <li>
                    <a href="#">Status Page</a>
                  </li>
                </ul>
              </li>
              </ul>
            </Nav.Link>

            

            <Nav.Link className="links" href="#deets">Support <FaCaretDown/>
              <ul className="dd_support animate__animated animate__backInUp">
              <li>
                <ul>
                  <li>
                    <a href="#">Quick Help</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Why was I <br/> debited?</a>
                  </li>
                </ul>
              </li>
            </ul>
            </Nav.Link>

            

          <Nav.Link className="links" href="/login">Login</Nav.Link>
          </Nav>

          <Button className='btn-nav' href="/signup">Create Free Account</Button>

          <Nav.Link className="links mt-2" href="deets">
            <a href="#">
            <img
                src={NigFlag}
                width="16"
                height="15"
                className="d-inline-block align-top"
                alt="Nigeria Flag"
            />
            </a>

            <ul className="flags dd_flag animate__animated animate__backInUp">
            <li>
              <ul>
                <li className='flag-direction'>
                  <a href="#">
                    <img src={Ghflag} alt="ghana" />
                    Ghana
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={SouthAfricaflag} alt="south africa" />
                    South Africa
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={LogoSmall} alt="paystack icon" />
                    Others
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          </Nav.Link>

          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavigationBar;