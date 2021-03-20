import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div class="home">

        <div
          style={{ backgroundColor: "" }}
          
          class="col d-flex justify-content-center"
        >
          <Card
            style={{
              width: "75vh",
              marginTop: "6%",
              opacity: "0.8",
              background: "black",
              color: "white",
            }}
          >
            <Card.Body>
              <Card.Text>
                <h2>Easy Job Intern</h2>
                FIND BEST WINTER & SUMMER INTERNSHIPS FOR STUDENTS IN INDIA<br></br>
                Apply to 10,000+ internships for free!
              </Card.Text>
              <Button style={{color: '#000000',backgroundColor: '#ffc107',borderColor: 'white'}} variant="info" as={Link} to="/student-signup" >
                Get Started 
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div style={{ background: "", padding: "30px 0 80px 0" }}>
        
          <Container>
          
            <Row>
              <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                <img src="images/industry.png" alt=""></img>
                <h4 style={{ marginTop: 15, marginBottom: 15 }}>
                  Internship By Industry
                </h4>
                <ListGroup>
                  <a class="itemLink" href="#">
                    <ListGroup.Item variant="primary">IT</ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    <ListGroup.Item action variant="secondary">
                      Marketing
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="success">
                      Design
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="danger">
                      MBA
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="warning">
                      Engineering
                    </ListGroup.Item>{" "}
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="info">
                      Media
                    </ListGroup.Item>{" "}
                  </a>
                  <a class="itemLink" href="#">
                    <ListGroup.Item action variant="success">
                      Teaching
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="dark">
                      Finance
                    </ListGroup.Item>{" "}
                  </a>
                </ListGroup>
              </Col>
              <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                <img src="images/location.png" alt=""></img>
                <h4 style={{ marginTop: 15, marginBottom: 15 }}>
                  {" "}
                  Internship By Location
                </h4>
                <ListGroup>
                  <a class="itemLink" href="#">
                    <ListGroup.Item variant="primary">Mumbai</ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    <ListGroup.Item action variant="secondary">
                      Pune
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="success">
                      Bangalore
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="danger">
                      Chennai
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="warning">
                      Kolkata
                    </ListGroup.Item>{" "}
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="info">
                      Gugaon
                    </ListGroup.Item>{" "}
                  </a>
                  <a class="itemLink" href="#">
                    <ListGroup.Item action variant="success">
                      Delhi
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="dark">
                      India
                    </ListGroup.Item>{" "}
                  </a>
                </ListGroup>
              </Col>
              <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                <img src="images/stream.png" alt=""></img>
                <h4 style={{ marginTop: 15, marginBottom: 15 }}>
                  Internship By Stream
                </h4>
                <ListGroup>
                  <a class="itemLink" href="#">
                    <ListGroup.Item variant="primary">
                      Management
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    <ListGroup.Item action variant="secondary">
                      Manufacturing
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="success">
                      Accounts
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="danger">
                      Architecture
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="warning">
                      Machine Learning
                    </ListGroup.Item>{" "}
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="info">
                      Data Science
                    </ListGroup.Item>{" "}
                  </a>
                  <a class="itemLink" href="#">
                    <ListGroup.Item action variant="success">
                      Development
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="dark">
                      Design
                    </ListGroup.Item>{" "}
                  </a>
                </ListGroup>
              </Col>
              <Col class="col-lg-3 col-md-6 col-sm-12" id="offer-range">
                <img src="images/ot2.png" alt=""></img>
                <h4 style={{ marginTop: 15, marginBottom: 15 }}>
                  Online Trainings by Us
                </h4>
                <ListGroup>
                  <a class="itemLink" href="#">
                    <ListGroup.Item variant="primary">
                      Programming With Python
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    <ListGroup.Item action variant="secondary">
                      Digital Marketing
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="success">
                      Web Development
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="danger">
                      Machine Learning
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="warning">
                      Advanced Excel
                    </ListGroup.Item>{" "}
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="info">
                      Ethical Hacking
                    </ListGroup.Item>{" "}
                  </a>
                  <a class="itemLink" href="#">
                    <ListGroup.Item action variant="success">
                      AutoCAD
                    </ListGroup.Item>
                  </a>
                  <a class="itemLink" href="#">
                    {" "}
                    <ListGroup.Item action variant="dark">
                      Creative Writing
                    </ListGroup.Item>{" "}
                  </a>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
