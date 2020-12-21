import emailjs from 'emailjs-com';
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import '../css/contactus.css';

const ContactUs = () =>{
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gf2rjzb', 'template_nb6e5to', e.target, 'user_y5lYBcFVmUkoUK1y2WKmj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    //   function cleanForm(e) {
    //     e.target.reset()
    //   }
    return(
        <div className="container_main">
            <div className="page-title">
                <h2>Contact Us</h2>
            </div>
            <Row>
                <Col>
                    <h4>Query</h4>
                    <Form onSubmit={ sendEmail }>
                        <Row form>
                            <Col md={6}>
                            <FormGroup>
                                {/* <Label for="personName">Full Name</Label> */}
                                <Input type="text" name="name" id="personName" placeholder="Full name" />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                {/* <Label for="personEmail">Email</Label> */}
                                <Input type="email" name="email" id="personEmail" placeholder="E-mail" />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                            <FormGroup>
                                {/* <Label for="personNumber">Mobile Number</Label> */}
                                <Input type="text" name="number" id="personNumber" placeholder="Mobile Number"/>
                            </FormGroup>
                            </Col>
                            <Col md={4} className="hide">
                                <Button className="contact-btn">Get OTP</Button>
                                <Button className="contact-btn hide">Re-send OTP</Button>
                            </Col>
                        </Row>
                        <Row className="hide">
                            <Col md={8}>
                            <FormGroup>
                                <Label for="exampleState">Confirm OTP</Label>
                                <Input type="text" name="state" id="exampleState"/>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                                <Button className="contact-btn">Confirm</Button>
                            </Col>
                        </Row>
                        <FormGroup>
                            {/* <Label for="personSubject">Subject</Label> */}
                            <Input type="text" name="subject" id="personSubject"  placeholder="Subject"/>
                        </FormGroup>
                        <FormGroup>
                            {/* <Label for="personQuery">Your Query</Label> */}
                            <Input type="textarea" name="message" id="personQuery" placeholder="Your query" />
                        </FormGroup>
                        <Button type="submit">Send</Button>
                        <Button type="reset" className="ml-2">Clear</Button>
                    </Form>
                </Col>
                <Col>
                    <h4>Permanent Address</h4>
                    <div className="contact-address">
                        <div className="address-title">Nisamani Bhawan</div>
                        <div className="address-des">
                            <div>Plot No. C-16/84 , Gangotri Nagar-3, Sisupalgarh, Old Town</div>
                            <div>Bhubaneswar, Odisha</div>
                            <div>Zip: 751002</div>
                        </div>
                    </div>
                    <br/>
                    <h5>Current Address</h5>
                    <div className="contact-address">
                        <div className="address-title">Laxmi Narashima House</div>
                        <div className="address-des">
                            <div>Flat no. B2, NGR Layout</div>
                            <div>Bangalore, Karnataka</div>
                            <div>Zip: 560068</div>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default ContactUs;