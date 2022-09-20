import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ForEntrepreneurs from '../../images/For-Entrepreneurs.svg'
import ForBusinesses from '../../images/For-International-Businesses.svg'
import ForCorporations from '../../images/For-Large-Corporations.svg'
import Stripe from '../../images/Stripe-Logo-blue.png'
import Patrick from '../../images/patrick-collison-headshot.jpg'
import otto from '../../images/otto-williams.jpeg'
import micheal from '../../images/michael-siebel-headshot.jpeg'
import Visa from '../../images/Visa.png'
import ycombinator from '../../images/ycombinator-logo.png'

import { FaAngleRight } from 'react-icons/fa';

import './style.scss'


const CardDetails = [
    {
        id: 1,
        title: 'Paystack for Global Brands',
        subtitle: 'We help global brands accept payments from across Africa',
        Img: <img src="assets/images/Houseme.png" alt="HousemeImg" className="project-images" />,
        link: <a href='#'>Learn More</a>,
    },

    {
        id: 2,
        title: 'Paystack for Entrepreneurs',
        subtitle: 'From startup to scale-up, we can support you at every stage of your businesses’ growth',
        Img: <img src="assets/images/Houseme.png" alt="HousemeImg" className="project-images" />,
        link: <a href='#'>Learn More</a>,
    },

    {
        id: 3,
        title: 'Paystack for Large Organizations',
        subtitle: 'Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely',
        Img: <img src="assets/images/Houseme.png" alt="HousemeImg" className="project-images" />,
        link: <a href='#'>Learn More</a>,
    },
]

const TrustCards = () => {
    return ( 
        <Container fluid className='trust-container'>
            <Container>
                <Row>
                    <Col className='card-text' lg={12}>
                        <h1>Trusted by 70,000+ businesses</h1>
                        <p>Thousands of organizations of all sizes trust Paystack to grow their business.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='cards my-3' lg={4}>
                        <div className='cards-inner'>
                            <img src={ForBusinesses} width='110px' className="img-fluid" alt="For Entrepreneurs" />
                            <h1>Paystack for <br/> Global Brands</h1>
                            <p>
                                We help global brands accept payments from across Africa
                            </p>
                            <a href="#" className="learnmore">
                                <div className="caret-circle">
                                    <FaAngleRight className='icon'/>
                                </div>
                                Learn More
                            </a>
                        </div>
                    </Col>
                    <Col className='cards my-3' lg={4}>
                        <div className='cards-inner'>
                            <img src={ForEntrepreneurs} width='110px' className="img-fluid" alt="for intl business" />
                            <h1>Paystack <br/> for Entrepreneurs</h1>
                            <p>
                                From startup to scale-up, we can support you at every stage of your businesses’ growth
                            </p>
                            <a href="#" className="learnmore">
                                <div className="caret-circle">
                                    <FaAngleRight className='icon'/>
                                </div>
                                Learn More
                            </a>
                        </div>
                    </Col>
                    <Col className='cards my-3' lg={4}>
                    <div className='cards-inner'>
                        <img src={ForCorporations} width="120" className="img-fluid" alt="for intl business" />
                        <h1>Paystack for <br/> Large Organizations</h1>
                        <p>
                            Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.
                        </p>
                        <a href="#" className="learnmore">
                            <div className="caret-circle">
                                <FaAngleRight className='icon'/>
                            </div>
                            Learn More
                        </a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Container>
     );
}

const SponsorCards = () => {
    return ( 
        <Container fluid className='sponsor-container'>
            <Container>
                <Row>
                    <Col className='card-text' lg={12}>
                        <h1>Backed by strong global <br/> partners</h1>
                        <p>Paystack is backed by notable investors as well as some of the best <br/> payments companies on the planet.</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg={4}>
                        <div className='sponsor-cards'>
                            <img src={Stripe} width="70px" alt="stripe" />
                            <p className='sponsor-quote'>
                                Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.
                            </p>
                            <div className="person">
                                <div className="person-image patrick">
                                    <img src={Patrick}  width="50px" alt="stripe" />
                                </div>
                                <div className="person-text">
                                <h6>Patrick Collison</h6>
                                <p>CEO, Stripe</p>
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                    <Col lg={4}>
                        <div className='sponsor-cards'>
                            <img src={Visa} width="70px" alt="visa" />
                            <p className='sponsor-quote'>
                                Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem
                            </p>
                            <div className="person">
                                <div className="person-image otto">
                                    <img src={otto}  width="50px" alt="visa" />
                                </div>
                                <div className="person-text">
                                <h6>Otto Williams</h6>
                                <p>Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa</p>
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                    <Col lg={4}>
                        <div className='sponsor-cards'>
                            <img src={ycombinator} width="30px" height='30px' alt="Y combinator" />
                            <p className='sponsor-quote'>
                                As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.
                            </p>
                            <div className="person">
                                <div className="person-image micheal">
                                    <img src={micheal}  width="50px" alt="y combinator" />
                                </div>
                                <div className="person-text">
                                <h6>Michael Seibel</h6>
                                <p>CEO, Partner, Y Combinator</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

 
export {TrustCards, SponsorCards} ;