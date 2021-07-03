import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";
import { UserContext } from "../../App";

const Home = () => {
  const { state } = useContext(UserContext);
  console.log(state);

  return (
    <>
      <div class="home">

        <div
          style={{ backgroundColor: "" }}
          
          class="col d-flex justify-content-center"
        >
          {!state && <Card
            style={{
              width: "100%",
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
          </Card>}
        </div>
        <div style={{ background: "", padding: "30px 0 80px 0" }}>
        
          <Container>
          
            <Row>
              <Col className="col-12 col-md-6" id="offer-range">
                <img src="images/industry.png" alt=""></img>
                <h4 style={{ marginTop: 15, marginBottom: 15 }}>
                  Internship By Industry
                </h4>
                <ListGroup>
                <a className="itemLink" href="/industry-internship/IT">
                <ListGroup.Item action variant="secondary">
                  IT
                </ListGroup.Item>
              </a>
                  <a className="itemLink" href="/industry-internship/Marketing">
                    <ListGroup.Item action variant="secondary">
                      Marketing
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/industry-internship/Design">
                    {" "}
                    <ListGroup.Item action variant="success">
                      Design
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/industry-internship/MBA">
                    {" "}
                    <ListGroup.Item action variant="danger">
                      MBA
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/industry-internship/Engineering">
                    {" "}
                    <ListGroup.Item action variant="warning">
                      Engineering
                    </ListGroup.Item>{" "}
                  </a>
                  <a className="itemLink" href="/industry-internship/Media">
                    {" "}
                    <ListGroup.Item action variant="info">
                      Media
                    </ListGroup.Item>{" "}
                  </a>
                  <a className="itemLink" href="/industry-internship/Teaching">
                    <ListGroup.Item action variant="success">
                      Teaching
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/industry-internship/Finance">
                    {" "}
                    <ListGroup.Item action variant="dark">
                      Finance
                    </ListGroup.Item>{" "}
                  </a>
                </ListGroup>
              </Col>
              <Col className="col-12 col-md-6" id="offer-range">
                <img src="images/location.png" alt=""></img>
                <h4 style={{ marginTop: 15, marginBottom: 15 }}>
                  {" "}
                  Internship By Location
                </h4>
                <ListGroup>
                  <a className="itemLink" href="/location-internship/Mumbai">
                  <ListGroup.Item action variant="secondary">
                  Mumbai
                </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/location-internship/Pune">
                    <ListGroup.Item action variant="secondary">
                      Pune
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/location-internship/Bangalore">
                    {" "}
                    <ListGroup.Item action variant="success">
                      Bangalore
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/location-internship/Chennai">
                    {" "}
                    <ListGroup.Item action variant="danger">
                      Chennai
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/location-internship/Kolkata">
                    {" "}
                    <ListGroup.Item action variant="warning">
                      Kolkata
                    </ListGroup.Item>{" "}
                  </a>
                  <a className="itemLink" href="/location-internship/Gugaon">
                    {" "}
                    <ListGroup.Item action variant="info">
                      Gugaon
                    </ListGroup.Item>{" "}
                  </a>
                  <a className="itemLink" href="/location-internship/Delhi">
                    <ListGroup.Item action variant="success">
                      Delhi
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/location-internship/India">
                    {" "}
                    <ListGroup.Item action variant="dark">
                      India
                    </ListGroup.Item>{" "}
                  </a>
                </ListGroup>
              </Col>
              <Col className="col-12 col-md-6" id="offer-range">
                <img src="images/stream.png" alt=""></img>
                <h4 style={{ marginTop: 15, marginBottom: 15 }}>
                  Internship By Stream
                </h4>
                <ListGroup>
                  <a className="itemLink" href="/stream-internship/Management">
                  <ListGroup.Item action variant="secondary">
                  Management
                </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/stream-internship/Manufacturing">
                    <ListGroup.Item action variant="secondary">
                      Manufacturing
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/stream-internship/Accounts">
                    {" "}
                    <ListGroup.Item action variant="success">
                      Accounts
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/stream-internship/Architecture">
                    {" "}
                    <ListGroup.Item action variant="danger">
                      Architecture
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/stream-internship/Machine Learning">
                    {" "}
                    <ListGroup.Item action variant="warning">
                      Machine Learning
                    </ListGroup.Item>{" "}
                  </a>
                  <a className="itemLink" href="/stream-internship/Data Science">
                    {" "}
                    <ListGroup.Item action variant="info">
                      Data Science
                    </ListGroup.Item>{" "}
                  </a>
                  <a className="itemLink" href="/stream-internship/Development">
                    <ListGroup.Item action variant="success">
                      Development
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/stream-internship/Design">
                    {" "}
                    <ListGroup.Item action variant="dark">
                      Design
                    </ListGroup.Item>{" "}
                  </a>
                </ListGroup>
              </Col>
              <Col className="col-12 col-md-6" id="offer-range">
                <img src="images/ot2.png" alt=""></img>
                <h4 style={{ marginTop: 15, marginBottom: 15 }}>
                  Online Trainings by Us
                </h4>
                <ListGroup>
                  <a className="itemLink" href="/#">
                  <ListGroup.Item action variant="secondary">
                  Programming with Python
                  </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/#">
                    <ListGroup.Item action variant="secondary">
                      Digital Marketing
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/#">
                    {" "}
                    <ListGroup.Item action variant="success">
                      Web Development
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/#">
                    {" "}
                    <ListGroup.Item action variant="danger">
                      Machine Learning
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/#">
                    {" "}
                    <ListGroup.Item action variant="warning">
                      Advanced Excel
                    </ListGroup.Item>{" "}
                  </a>
                  <a className="itemLink" href="/#">
                    {" "}
                    <ListGroup.Item action variant="info">
                      Ethical Hacking
                    </ListGroup.Item>{" "}
                  </a>
                  <a className="itemLink" href="/#">
                    <ListGroup.Item action variant="success">
                      AutoCAD
                    </ListGroup.Item>
                  </a>
                  <a className="itemLink" href="/#">
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
