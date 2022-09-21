import React from 'react';

import './style.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../../components/Navbar";
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import {TrustCards, SponsorCards} from '../../components/Cards';
import {SectionTwo, SectionThree} from '../../components/SectionTwo';

import { FaLongArrowAltRight } from 'react-icons/fa'



const Home = () => {
    return ( 
        <Container fluid className='home-container px-0' >
            <Row fluid className='ad'>
                <Col lg={12}>
                    <span>New: Sell your digital products with Storefronts and Product Links</span> <FaLongArrowAltRight className='arrow-icon'/>
                </Col>
            </Row>
            <NavigationBar/>
            <Banner/>
            <Section/>
            <TrustCards/>
            <SectionTwo/>
            <SponsorCards/>
            <SectionThree/>
            <Footer/>
        </Container>
    );
}
 
export default Home;