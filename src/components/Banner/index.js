import React from 'react';

import './style.scss'
import Button from 'react-bootstrap/Button';
import domino from '../../images/Dominos-Plain.svg';
import mtn from '../../images/MTN-Plain.svg';
import bolt from '../../images/Bolt-Stack-Blue.svg'
import axa from '../../images/Axa-mansard.svg'
import play from '../../images/play.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPlay } from 'react-icons/fa';


function Banner() {
  return (
    <Container fluid className='banner-container px-0'>
        <Container className="intro-container px-0">
            <Row className="justify-content-lg-start">
                <Col lg={7}>
                    <div className="intro-inner-container animate__animated animate__backInLeft">
                        <h1>Modern online and offline payments for Africa</h1>
                        <p>
                            Paystack helps businesses in Africa get paid by anyone, <br/> anywhere in the world
                        </p>

                        <Button className='btn2'>Create a free account</Button>
                        <a href="#">or Contact Sales</a>
                    </div>
                </Col>
            </Row>
            
            <Row className='bottom-container'>
                <Col lg={6} className="intro-bottom-inner-container-one">
                    <p className="trusted-text">Trusted by over 60,000 businesses</p>
                    <div className="logo-container">
                        <img src={domino} alt="Domino's Logo" id="domino"/>
                        <img src={mtn} alt="MTN Logo" id="mtn" />
                        <img src={bolt} alt="Bolt Logo" id="bolt"/>
                        <img src={axa} alt="AXA Logo" id="axa"/>
                    </div>
                </Col>
                <Col lg={6}>
                    <Row className="intro-bottom-inner-container-two">
                        <Col lg={11} className="text-container">
                            <p className="trusted-text">
                                Watch MTN Chief Transformation Officer, Olubayo <br/> Adekanmbi, discuss
                                working with Paystack
                            </p>
                        </Col>

                        <Col lg={1} className="icon-container">
                            <div className='play-btn'>
                                <FaPlay className='icon'/>
                            </div>  
                        </Col>           
                    </Row>
                </Col>

            </Row>
        </Container>
    </Container>
  )
}

export default Banner;
