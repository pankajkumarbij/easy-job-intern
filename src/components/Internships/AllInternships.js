import React from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

import "./AllInternships.css";

const AllInternships = () => {
  return (
    <div className="internshipsOuterContainer">
      <Row className="justify-content-xl-start justify-content-lg-around justify-content-sm-center">
        <Col className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost">
          <Card className="cardPost">
            <Card.Body>
              <Card.Title className="titleOfPost">Google</Card.Title>
              <Card.Subtitle className="subtitleOfPost">
                New Delhi
              </Card.Subtitle>
              <Card.Text className="textPost">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                vitae aspernatur voluptates! Sed quaerat commodi neque incidunt
                nisi. Similique, veniam. Nam quisquam autem adipisci quibusdam
                praesentium natus obcaecati, neque repellendus.
              </Card.Text>
              <ListGroup>
                <ListGroupItem className="itemPost">Stipend: 20K</ListGroupItem>
                <ListGroupItem className="itemPost">
                  Duration: 2 months
                </ListGroupItem>
                <ListGroupItem className="itemPost">
                  Start Date: 15th April, 2021{" "}
                </ListGroupItem>
                <ListGroupItem className="itemPost">
                  End Date: 15th June, 2021{" "}
                </ListGroupItem>
                <ListGroupItem className="itemPost last">
                  Last Date to Apply: 11th April, 2021
                </ListGroupItem>
              </ListGroup>
              <div className="tech">
                <Card.Link className="TechStack">Node.js</Card.Link>
                <Card.Link className="TechStack">React.js</Card.Link>
                <Card.Link className="TechStack">Express.js</Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost">
          <Card className="cardPost">
            <Card.Body>
              <Card.Title className="titleOfPost">Google</Card.Title>
              <Card.Subtitle className="subtitleOfPost">
                New Delhi
              </Card.Subtitle>
              <Card.Text className="textPost">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                vitae aspernatur voluptates! Sed quaerat commodi neque incidunt
                nisi. Similique, veniam. Nam quisquam autem adipisci quibusdam
                praesentium natus obcaecati, neque repellendus.
              </Card.Text>
              <ListGroup>
                <ListGroupItem className="itemPost">Stipend: 20K</ListGroupItem>
                <ListGroupItem className="itemPost">
                  Duration: 2 months
                </ListGroupItem>
                <ListGroupItem className="itemPost">
                  Start Date: 15th April, 2021{" "}
                </ListGroupItem>
                <ListGroupItem className="itemPost">
                  End Date: 15th June, 2021{" "}
                </ListGroupItem>
                <ListGroupItem className="itemPost last">
                  Last Date to Apply: 11th April, 2021
                </ListGroupItem>
              </ListGroup>
              <div className="tech">
                <Card.Link className="TechStack">Node.js</Card.Link>
                <Card.Link className="TechStack">React.js</Card.Link>
                <Card.Link className="TechStack">Express.js</Card.Link>
                <Card.Link className="TechStack">Express.js</Card.Link>
                <Card.Link className="TechStack">MongoDB</Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost">
          <Card className="cardPost">
            <Card.Body>
              <Card.Title className="titleOfPost">Google</Card.Title>
              <Card.Subtitle className="subtitleOfPost">
                New Delhi
              </Card.Subtitle>
              <Card.Text className="textPost">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                vitae aspernatur voluptates! Sed quaerat commodi neque incidunt
                nisi. Similique, veniam. Nam quisquam autem adipisci quibusdam
                praesentium natus obcaecati, neque repellendus.
              </Card.Text>
              <ListGroup>
                <ListGroupItem className="itemPost">Stipend: 20K</ListGroupItem>
                <ListGroupItem className="itemPost">
                  Duration: 2 months
                </ListGroupItem>
                <ListGroupItem className="itemPost">
                  Start Date: 15th April, 2021{" "}
                </ListGroupItem>
                <ListGroupItem className="itemPost">
                  End Date: 15th June, 2021{" "}
                </ListGroupItem>
                <ListGroupItem className="itemPost last">
                  Last Date to Apply: 11th April, 2021
                </ListGroupItem>
              </ListGroup>
              <div className="tech">
                <Card.Link className="TechStack">Node.js</Card.Link>
                <Card.Link className="TechStack">React.js</Card.Link>
                <Card.Link className="TechStack">Express.js</Card.Link>
                <Card.Link className="TechStack">MERN</Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost">
          <Card className="cardPost">
            <Card.Body>
              <Card.Title className="titleOfPost">Google</Card.Title>
              <Card.Subtitle className="subtitleOfPost">
                New Delhi
              </Card.Subtitle>
              <Card.Text className="textPost">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                vitae aspernatur voluptates! Sed quaerat commodi neque incidunt
                nisi. Similique, veniam. Nam quisquam autem adipisci quibusdam
                praesentium natus obcaecati, neque repellendus.
              </Card.Text>
              <ListGroup>
                <ListGroupItem className="itemPost">Stipend: 20K</ListGroupItem>
                <ListGroupItem className="itemPost">
                  Duration: 2 months
                </ListGroupItem>
                <ListGroupItem className="itemPost">
                  Start Date: 15th April, 2021{" "}
                </ListGroupItem>
                <ListGroupItem className="itemPost">
                  End Date: 15th June, 2021{" "}
                </ListGroupItem>
                <ListGroupItem className="itemPost last">
                  Last Date to Apply: 11th April, 2021
                </ListGroupItem>
              </ListGroup>
              <div className="tech">
                <Card.Link className="TechStack">Node.js</Card.Link>
                <Card.Link className="TechStack">React.js</Card.Link>
                <Card.Link className="TechStack">Express.js</Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default AllInternships;
