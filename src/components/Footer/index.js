import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.scss'

const Footer = () => {
    return ( 
        <Container className='footer-container'>
            <Row className='footer-container-one'>
                <Col sm={3}>
                    <h2>Why Paystack</h2>
                    <p><a href="#" target="_blank" className="">Why Choose Paystack</a></p>
                    <p><a href="#" target="_blank" className="">Success Rate</a></p>
                    <p><a href="#" target="_blank" className="">For Entrepreneurs </a></p>
                    <p><a href="#" target="_blank" className="">For Corporates</a></p>
                    <p><a href="#" target="_blank" className="">For International Companies</a></p>
                    <p><a href="#" target="_blank" className="">For Startups</a></p>
                    <p><a href="#" target="_blank" className="">For Fintechs</a></p>
                    <p><a href="#" target="_blank" className="">For Schools</a></p>
                    <p><a href="#" target="_blank" className="">For Betting</a></p>
                </Col>
                <Col sm={3}>
                    <h2>Pricing</h2>
                        <p><a href="#" target="_blank" className="">Nigeria</a></p>
                        <p><a href="#" target="_blank" className="">Ghana</a></p>
                        <p><a href="#" target="_blank" className="">South Africa</a></p>

                    <h2>Customers</h2>
                        <p><a href="#" target="_blank" className="">Testimonials</a></p>

                    <h2>Learn</h2>
                        <p><a href="#" target="_blank" className="">Blog</a></p>
                        <p><a href="#" target="_blank" className="">Guides</a></p>
                        <p><a href="#" target="_blank" className="">Video Tutorials</a></p>
                        <p><a href="#" target="_blank" className="">Decode Fintech</a></p>
                        <p><a href="#" target="_blank" className="">Commerce</a></p>
                </Col>
                <Col sm={3}>
                    <h2>Developers</h2>
                        <p><a href="#" target="_blank" className="">Overview</a></p>
                        <p><a href="#" target="_blank" className="">Documentation</a></p>
                        <p><a href="#" target="_blank" className="">Integrations</a></p>
                        <p><a href="#" target="_blank" className="">Status Page</a></p>
                    <h2>Community</h2>
                        <p><a href="#" target="_blank" className="">Nigeria Logos</a></p>
                    <h2>Support</h2>
                        <p><a href="#" target="_blank" className="">Help Desk</a></p>
                        <p><a href="#" target="_blank" className="">Contact Us</a></p>
                        <p><a href="#" target="_blank" className="">Why Was I Debited?</a></p>
                </Col>
                <Col sm={3}>
                    <h2>About</h2>
                        <p><a href="#" target="_blank" className="">Company</a></p>
                        <p><a href="#" target="_blank" className="">Subscribe</a></p>
                        <p><a href="#" target="_blank" className="">Compliance</a></p>
                        <p><a href="#" target="_blank" className="">Careers</a></p>
                        <p><a href="#" target="_blank" className="">Media Kit</a></p>
                        <p><a href="#" target="_blank" className="">Privacy & Terms</a></p>
                </Col>
            </Row>
            <Row className='footer-container-two'>
                <Col sm={3}>
                    <h2>Contact</h2>
                    <a href="mailto:hello@paystack.com" target="_blank" className="">hello@paystack.com</a>
                </Col>
                <Col sm={3}>
                    <h2>Lagos</h2>
                        <p>
                            126 Joel Ogunnaike Street,<br/>
                            Ikeja GRA, Ikeja,<br/>
                            Lagos, Nigeria<br/>
                            +234 163 16160<br/>
                        </p>

                    <h2>Accra</h2>
                        <p>
                            AfricaWorks, <br/>
                            35 Patrice Lumumba Road, <br/>
                            Airport Residential Area, <br/>
                            Accra, Ghana <br/>
                        </p>
                </Col>
                <Col sm={3}>
                    <h2>San Fransisco</h2>
                        <p>
                            354 Oyster Point Blvd.,<br/>
                            South San Francisco,<br/>
                            CA 94080<br/>
                            United State<br/>
                        </p>
                </Col>
                <Col sm={3}>
                    <h2>Cape Town</h2>
                        <p>
                            HOUSE_OF, <br/>
                            Elkay House (4th Floor),<br/>
                            186 Loop St, Cape Town City Centre,<br/>
                            Cape Town, 8001,<br/>
                            South Africa<br/>
                        </p>     
                </Col>
            </Row>
        </Container>
    );
};
 
export default Footer;