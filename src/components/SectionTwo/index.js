import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import collection from '../../images/Collect-Payments-for-Multiple-Channels-1.1.gif'
import Abia from '../../images/Abia-State-University.svg'
import Airpeace from '../../images/Air-Peace.svg'
import Ariiya from '../../images/Ariiya.svg'
import Axamansard from '../../images/Axa-mansard.svg'
import Betway from '../../images/Betway-Plain.svg'
import Bolt from '../../images/Bolt-Stack-Blue.svg'
import Bulb from '../../images/bulb.svg'
import Carbon from '../../images/carbon-dark.svg'
import Cowry from '../../images/Cowrywise-dark.svg'
import Cup from '../../images/cup.svg'
import Dominos from '../../images/Dominos-Plain.svg'
import Filmhouse from '../../images/FilmHouse.svg'
import GIGM from '../../images/GIGM-Plain_180827_172142.svg'
import Ibomair from '../../images/Ibom-Air.svg'
import Irokotv from '../../images/IrokoTV-Plain.svg'
import Kuda from '../../images/IrokoTV-Plain.svg'
import Lagos from '../../images/Lagos-Internal-Revenue-Service.svg'
import MTN from '../../images/MTN-Plain.svg'
import Piggyvest from '../../images/Piggyvest.svg'
import Smile from '../../images/Smile-Plain.svg'

import './style.scss'

const SectionTwo = () => {
    return (
        <Container className='growth-container'>
            <Row>
                <Col className="growth-content" lg={12}>
                    <h1>Powering growth for amazing <br/> businesses</h1>
                    <p>Paystack is a growth engine for a new generation of innovative, <br/> forward-looking organizations operating in Africa.</p>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col className="mb-2" lg={2}><img src={Airpeace} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Filmhouse} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Piggyvest} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Ibomair} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Kuda} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Ariiya} width="120px" alt="Payment Collection" /></Col>
            </Row>

            <Row className='my-5'>
                <Col className="mb-2" lg={2}><img src={Dominos} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={MTN} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Lagos} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Bolt} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Betway} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Carbon} width="120px" alt="Payment Collection" /></Col>
            </Row>

            <Row className='my-5'>
                <Col className="mb-2" lg={2}><img src={Axamansard} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Abia} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={GIGM} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Irokotv} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Smile} width="120px" alt="Payment Collection" /></Col>
                <Col className="mb-2" lg={2}><img src={Cowry} width="120px" alt="Payment Collection" /></Col>
            </Row>
        </Container>
    );
}


const  SectionThree= () => {
    return ( 
        <Container fluid className='try-container my-5'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Row className='try-inner-container'>
                            <Col lg={6}>
                                <div className="try-left">
                                    <p>Try Paystack Now</p>
                                    <h1>Start accepting payments in <br/> just 30 minutes</h1>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="try-right">
                                    <Button className='btn2'>Create a free account</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        </Container>
     );
}
 

             
export {SectionTwo, SectionThree};