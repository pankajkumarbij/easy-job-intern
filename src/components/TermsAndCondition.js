import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";

export default function TermsAndConditions() {
    return (
        <>
            <Container style={{width:'100%', background:"#BDEDFF", textAlign:'center'}}>
            <h2 style={{fontFamily:'revert', color:'maroon'}}>TERMS AND CONDITIONS</h2>
            <br/>
                <Row>
                    <Col class="col-12 col-md-12 col-sm-12">
                    <h6 style={{fontFamily:'revert', color:'maroon'}}>LOREM IPSUM</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col class="col-6">
                    <h6 style={{fontFamily:'revert', color:'maroon'}}>LOREM IPSUM</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col class="col-6">
                    <h6 style={{fontFamily:'revert', color:'maroon'}}>LOREM IPSUM</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}
