import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo from '../../images/paystack-logo.svg'

import { FaQuestionCircle, FaCheck} from 'react-icons/fa';

import './style.scss'

const Signup = () => {
    return ( 
        <Container fluid className='signup-container py-5'>
            <Row className="justify-content-lg-center pt-2">
                <Col lg={12}>
                <img src={logo} width='' className='' alt="Paystack Logo"/>
                </Col>
                <Col className='justify-content-center pt-5 pb-3' lg={5}>
                    <div className='form-container px-4 pt-3 pb-5'>
                        <p className='title pb-3'>Create Your Account</p>
                        <Form.Group className="mb-3">
                        <div className='country-container'>
                            <Form.Label htmlFor="country">Country</Form.Label>
                            <span><a className="other-countries" href="">Other countries</a></span>
                        </div>
                        
                        <Form.Select id="country">
                            <option selected>Nigeria</option>
                            <option>Ghana</option>
                            <option>South Africa</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Row className="mb-3">

                        <Col lg={3} >
                            <Form.Group>
                                <Form.Label htmlFor="">Phone Number</Form.Label>
                                <Form.Select id="phone">
                                    <option selected>+234</option>
                                    <option>Ghana</option>
                                    <option>South Africa</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col lg={9}>
                            <Form.Group>
                            <Form.Label htmlFor=""></Form.Label>
                                <Form.Control className="tel" type="tel" placeholder="8021234567" />
                            </Form.Group>
                        </Col>
                            

                            
                        </Row>
                        
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className='input mb-3' type="email" placeholder="Email Address" />

                        <div className='check-div'>
                            <Form.Label>Password </Form.Label><span><FaCheck className='icon-check'/></span>
                        </div>
                        <Form.Control className='input mb-3' type="password" placeholder="Password" />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>What type of business do you own?</Form.Label>

                            <div className='check-div'>
                                <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <span>
                                    Starter Business <br/>
                                    I'm testing my ideas with real customers, and preparing to register my company
                                </span>
                            </div>

                            <div className='check-div'>
                                <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <span>
                                    Registered Business <br/>
                                    My business has the approval, documentation, and licences required to operate legally
                                </span>
                            </div>
                            
                        
                        </Form.Group>

                        <Row className='mb-3'>
                            <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Are you a software developer?</Form.Label>

                            <div className='radio-container'>
                                <Col lg={3}>

                                    <div className='radio-container'>
                                        <Form.Check
                                            type="radio"
                                            label=""
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            />
                                            <span>Yes, I am</span>
                                    </div>

                                </Col>

                                <Col lg={3}>

                                    <div className='radio-container'>
                                        <Form.Check
                                            type="radio"
                                            label=""
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            />
                                            <span>No, I'm not</span>
                                    </div>
                                        
                                </Col>
                            </div>
                                        
                            </Form.Group>
                        </Row>
                        

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col lg={12} className='check-div2'>
                            <Form.Check type="checkbox" />
                                <span>I consent to the collection and processing of my personal <br/> data in line with data regulations as described in the <br/> <a href="#">Paystack Privacy Policy</a></span>
                            </Col>
                        </Form.Group>


                        <Button className='btn-sign mb-3'>Create My Account</Button>

                        <p className='terms-text'>By clicking the “Create your account” button, you agree<br/>to Paystack’s <a href='#'>terms of acceptable use.</a> </p>
                    </div>
                </Col>
                <Col lg={12} className='sign-up-container'>
                    <div><span>Already have an account?</span><a href="#">Login</a></div>
                </Col>
                <Col lg={12} className='support-container mt-4'>
                    <div className='support'>
                        <a href="#"><FaQuestionCircle/> SUPPORT </a>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Signup;