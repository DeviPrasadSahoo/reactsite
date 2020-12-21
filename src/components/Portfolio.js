import React from 'react';
import mybanner from '../images/prasad2.jpg';
import colorbg from '../images/colorbg.png';
import imgbsh from '../images/Belhoul-Speciality-Hospital.jpg';
import imgcsh from '../images/csh1.jpg';
import imgalz from '../images/alz3.png';
import imgrak from "../images/rak6.png";
import '../css/common.css';
import { Container } from '@material-ui/core';
import { Row, Col, Button } from 'reactstrap';
import './Home'; 
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
    return(
        <div className="portfolio_main">
            <div className="portfolio-section">
                    <Row className="portfolio-row">
                        <Col sm="12">
                            <Row>
                                <Col sm="6">
                                    <img src={imgbsh} className="portfolio-img" alt="banner" />
                                </Col>
                                <Col sm="6">
                                    <img src={imgalz} className="portfolio-img" alt="banner" /> 
                                </Col>
                            </Row>
                        </Col>
                        <Col  sm="12" className="portfolioimg">
                            <Row>
                                <Col sm="3">
                                    <img src={imgcsh} className="portfolio-img" alt="banner" />
                                </Col>
                                <Col sm="3">
                                    <img src={imgrak} className="portfolio-img" alt="banner" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
        </div>
    );
};


export default Portfolio;