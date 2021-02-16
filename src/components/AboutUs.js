import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button} from "react-bootstrap";
import './AboutUs.css'

export default function AboutUs() {
    return(
        <>
            <div class="aboutus">
            <div class="col d-flex justify-content-center">
                <Card style={{width: '80%', marginTop:'6%', opacity:'0.8', background:'white', color:'black'}}>
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
<div style={{padding:'30px 0 80px 0',marginTop:"4%"}}>
            <Container >
                <Row>
                    <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                        <img src="images/desktop.png"></img>
                        <h4 >Lorem ipsum</h4>
                        <p>loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </Col>
                    <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                        <img src="images/inspiration.png"></img>
                        <h4>Lorem ipsum</h4>
                        <p>loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </Col>
                    <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                        <img src="images/puzzle.png"></img>
                        <h4>Lorem ipsum</h4>
                        <p>loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </Col>
                    <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                        <img src="images/studying.png"></img>
                        <h4>Lorem ipsum</h4>
                        <p>loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </Col>
                </Row>
            </Container>
            </div>


            </div>
        {/* <Footer   /> */}
        </>
    )
}
