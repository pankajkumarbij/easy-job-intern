import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col} from "react-bootstrap";
import './about-us.css'

export default function AboutUs() {
    return(
        <>
            <div class="aboutus">
                <div class="col d-flex justify-content-center">
                    <Card style={{width: '80%', marginTop:'6%', opacity:'0.8', background:'#30363d', color:'white'}}>
                        <Card.Body>
                            <Card.Text>
                                <h2><u>About</u></h2>
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{padding:'0% 10% 0% 10%'}}>
                    <Container fluid>
                        <Row>
                            <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range1">
                                <img src="images/desktop.png" alt="img"></img>
                                <h4 >Lorem ipsum</h4>
                                <p>loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                            </Col>
                            <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range2">
                                <img src="images/inspiration.png" alt="img"></img>
                                <h4>Lorem ipsum</h4>
                                <p>loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                            </Col>
                            <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range3">
                                <img src="images/puzzle.png" alt="img"></img>
                                <h4>Lorem ipsum</h4>
                                <p>loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                            </Col>
                            <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range4">
                                <img src="images/studying.png" alt="img"></img>
                                <h4>Lorem ipsum</h4>
                                <p>loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
