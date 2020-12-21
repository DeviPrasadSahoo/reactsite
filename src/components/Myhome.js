import react from 'react';
import { Container } from 'reactstrap';
import MySlider from './Slider';
import '../css/myhome.css';
import { Row, Col, Button } from 'reactstrap';
import mybanner from '../images/prasad2.jpg';
import '../css/common.css';

const Myhome = () => {
    return(
        <>
            <MySlider/>
            <Container>
                <div className="aboutMe">
                <Row>
                        <Col  sm="8">
                            <p>
                                Hi! I’m Devi Sahoo, a freelance Website Designer
                                & developer from Bangalore, India. Using latest programming
                                techniques i design beautiful website's and ensure that it meets
                                all the web standards. Having experience of more than 5 years in the web platforms,
                                    i am a creative professional freelancer from bangalore, specialized in
                                    HTML5, CSS3 , JavaScript, JQurery, React and Photoshop.
                            </p>
                            <p>
                                All our websites are designed to not only be attractive but also to ensure that the purpose of the
                                site is to be quick and easy for your customers to access and use to generate an enquiry, whether
                                making a purchase or simply to provide clear and concise information.
                                We also offer long-term support, hosting, domains and advice on anything related.
                            </p>
                        </Col>
                        
                        <Col  sm="4" className="portfolioimg">
                                <span className="portfolioimg-bg circle_one"></span>
                                <span className="portfolioimg-bg circle_two"></span>
                                <span className="portfolioimg-bg circle_three"></span>
                                <img src={mybanner} className="mybanner" alt="banner" />
                        </Col>
                    </Row>
                </div>
                </Container>
        </>
    );
};

export default Myhome;
