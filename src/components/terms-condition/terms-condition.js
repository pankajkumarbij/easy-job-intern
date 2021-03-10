import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";

export default function TermsAndConditions() {
    return (
        <>
            <div style={{background: 'linear-gradient(to bottom, #ccffff 3%, #ccccff 30%)'}}>
        <h2 style={{fontFamily:'revert', color:'#660066', textAlign:'center', paddingTop:'2%'}}>TERMS AND CONDITIONS</h2>
            <Container style={{width:'100%', background:"None", textAlign:'left'}}>
                <Row>
                    <Col class="col-6">
                        <h5 style={{color:'#660066'}}>LOREM IPSUM</h5> 
                        <ul style={{listStyle: 'none'}}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>                 
                    </Col>
                    <Col class="col-6">
                        <h5 style={{color:'#660066'}}>LOREM IPSUM</h5> 
                        <ul style={{listStyle: 'none'}}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>                 
                    </Col>
                    
                    </Row>
                    <Row>                
                    <Col class="col-12 col-md-12 col-sm-12">
                        <h5 style={{color:'#660066'}}>LOREM IPSUM</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                </Row>
            </Container>
         </div>
        </>
    )
}
