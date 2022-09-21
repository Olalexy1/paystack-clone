import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo from '../../images/paystack-logo.svg'

import { FaQuestionCircle } from 'react-icons/fa';

import './style.scss'

const Login = () => {
    return ( 
        <Container fluid className='login-container py-5'>
            <Row className="justify-content-lg-center pt-2">
                <Col lg={12}>
                <img src={logo} width='' className='' alt="Paystack Logo"/>
                </Col>
                <Col className='justify-content-center pt-5 pb-3' lg={5}>
                    <div className='form-container px-4 pt-3 pb-5'>
                        <p className='pb-3'>Login</p>
                        <Form.Control className='input mb-3' type="email" placeholder="Email Address" />
                        <Form.Control className='input mb-3' type="password" placeholder="Password" />
                        <Button className='btn-login mb-3'>Login to your account</Button>
                    </div>
                </Col>
                <Col lg={12} className='sign-up-container'>
                    <div><span>New to PayStack?</span><a href="#">Sign up</a></div>
                    <a href="#">Forgot your password?</a>
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
 
export default Login;