import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import collection from '../../images/Collect-Payments-for-Multiple-Channels-1.1.gif'
import RobustSuite from '../../images/Robust-Suite-of-APIs-Opt.png'
import FraudProtection from '../../images/Advanced-Fraud-Protection.mp4'
import Check from '../../images/check.svg'

import { FaAngleRight } from 'react-icons/fa';


import './style.scss'

const Section = () => {
    return (
        <Container className='section-container'>
            <Row className="section-title">
                <Col lg={12}>
                    <h1>Simple, easy payments</h1>
                    <p>Building a business is hard. Getting paid shouldn't be.</p>
                </Col>
            </Row>
            <Row className='collection-container'>
                <Col className='pt-4' lg={6}><img src={collection} width="100%" height="100%" alt="Payment Collection" /></Col>
                <Col className='collection-desc' lg={6}>
                    <Row>
                        <Col lg={12}>
                            <h1>Delight customers with a seamless payments experience</h1>
                            <p>
                                Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want.
                            </p>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col lg={6}>
                            <ul className="list ps-0">
                                <li> <span> <img src={Check} width='20px' alt="check" /> </span> Card </li>
                                <li> <span> <img src={Check} width='20px' alt="check" /> </span>Bank Account </li>
                                <li> <span> <img src={Check} width='20px' alt="check" /> </span>Bank Transfer </li>
                                <li> <span> <img src={Check} width='20px' alt="check" /> </span>USSD </li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <ul className="list ps-0">
                                <li> <span> <img src={Check} width='20px' alt="check" /> </span>Apple Pay </li>
                                <li> <span> <img src={Check} width='20px' alt="check" /> </span>Visa QR </li>
                                <li> <span> <img src={Check} width='20px' alt="check" /> </span>Mobile Money </li>
                                <li> <span> <img src={Check} width='20px' alt="check" /> </span>POS (Coming soon) </li> 
                            </ul>
                        </Col>       
                    </Row>
                    <Row>
                        <Col className='pt-5' lg={12}>
                            <h1>Enjoy phenomenal transaction success rates</h1>
                            <p>
                                We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                        <a href="#">
                            <div>
                                <FaAngleRight className='icon'/>
                            </div>
                            Find out how we achieve high success rates
                        </a>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row className='api-container'>
                <Col className='api-content' lg={6}>
                    <h1>Build custom payments experiences with well-documented APIs</h1>
                    <p>
                        Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack.
                    </p>
                    <ul className="list ps-0 mb-5">
                        <li> <span> <img src={Check} width='20px' alt="check" /> </span> Collect one-time and recurring payments from your app or website </li>
                        <li> <span> <img src={Check} width='20px' alt="check" /> </span> Make instant transfers</li>
                        <li> <span> <img src={Check} width='20px' alt="check" /> </span> Retrieve all your transaction and customer data </li>
                        <li> <span> <img src={Check} width='20px' alt="check" /> </span> Verify the identity of customers </li> 
                    </ul>
                    
                    <a href="#">
                        <div>
                            <FaAngleRight className='icon'/>
                        </div>
                        Paystack API Quickstart
                    </a>
                </Col>
                <Col className='robust-img' lg={6}>
                    <img src={RobustSuite} width="100%" className='img-fluid' alt="Payment API"/>
                </Col>
            </Row>

            <Row className='fraud-container'>
                <Col lg={6} className="p-0"> 
                    <video src={FraudProtection} autoPlay className='video' loop="true"></video> 
                </Col>
                <Col className='protect-content' lg={6}> 
                    <h1>Protect yourself and your customers with advanced fraud detection</h1>
                    <p>
                        Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.
                    </p>
                    
                    <h1>Detailed reporting for accounting, reconciliation, and audits</h1>
                    <p>
                        Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports.
                    </p>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Section;