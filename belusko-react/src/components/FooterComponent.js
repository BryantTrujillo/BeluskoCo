import React, { Component } from 'react';
import { 
    Button,
    Col,
    Container, 
    Form, 
    InputGroup, 
    Nav, 
    Row 
} from 'react-bootstrap';

function FooterNav() {
    return(
        <Col md={{ span: 3, offset: 1}} className="mb-3">
            <Nav className="flex-column" defaultActiveKey="/home">
                <Nav.Item className="mb-2">
                    <Nav.Link as="h6" className="p-0" href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Nav.Link as="h6" className="p-0" eventKey="disabled" disabled>About</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Nav.Link as="h6" className="p-0" href="/brands">Brands</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Nav.Link as="h6" className="p-0" href="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
    )
}

function Mailchimp() {
    return(
        <Col md={4}>
            <Row>
                <Col xs={12} className="mb-3">
                    <div id="mc_embed_signup">
                        <Form action="https://josvbelusko.us20.list-manage.com/subscribe/post?u=d71eb88931cb022a7f5f4948d&amp;id=5701327d7f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll" />
                                <h5 className="text-nowrap">Keep up-to-date</h5>
                            <div>
                                <div className="mc-field-group">
                                    <InputGroup className="pt-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                            </svg>
                                        </InputGroup.Text>
                                        <Form.Control type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="name@domain.com" />
                                        <Button type="submit" id="mc-embedded-subscribe" variant="dark">Subscribe</Button>
                                    </InputGroup>
                                </div>
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{ display: "none" }} />
                                <div className="response" id="mce-success-response" style={{ display: "none" }} />
                            </div>
                            <div style={{ position: "absolute", left: "-5000px", ariaHidden: "true"}} >
                                <input type="text" name="b_d71eb88931cb022a7f5f4948d_5701327d7f" tabIndex="-1" />
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

function ContactBlurb() {
    return(
        <Col md={{ span: 3, offset: 1 }} className="mb-3">
            <Row>
                <Col xs={12}>
                    <address>
                        <h5>Jos. V. Belusko Co.</h5>
                        P.O. Box 33497<br />
                        Portland, OR 97294<br />
                        United States
                    </address>
                </Col>
                <div className="d-flex justify-content-start">
                    <div className="btn-group " role="group">
                        <a type="button" className="btn btn-outline-dark" href="tel:+15039136661">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                        </a>
                        <a type="button" className="btn btn-outline-dark" href="mailto:b.french@josvbelusko.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </Row>
        </Col>
    )
}

class SubFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: new Date().getFullYear()
        }
    }

    
    render() {
        return(

            <Col className="d-flex justify-content-between py-1 mt-1">
                <p>Jos. V. Belusko Co. © {this.state.year}</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://twitter.com/JosVBeluskoCo" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.linkedin.com/in/brian-french-82633290/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </Col>
        )
    }
}

export default function Footer() {
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="pt-5 mt-0">
                        <Row>
                            <FooterNav />
                            <Mailchimp />
                            <ContactBlurb />
                        </Row>
                        <hr />
                        <Row>
                            <SubFooter />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}