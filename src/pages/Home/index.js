import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../../components/Navbar";
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import {TrustCards, SponsorCards} from '../../components/Cards';
import {SectionTwo, SectionThree} from '../../components/SectionTwo';

const Home = () => {
    return ( 
        <Container fluid className='home-container px-0' >
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