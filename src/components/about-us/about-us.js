import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row } from "react-bootstrap";
import "./about-us.css";

export default function AboutUs() {
  return (
    <>
      <div class="aboutus">
        <h2 class="about-heading">About Us</h2>

        <div class="col d-flex justify-content-center">
          <Card
            style={{
              width: "80%",
              marginTop: "2%",
              opacity: "0.8",
              background: "#30363d",
              color: "white",
              paddingTop: "1.2rem",
              paddingBottom: "1.2rem",
              border: "2px solid white",
              boxShadow: "0 0 20px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Card.Body>
              <Row>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <img src="images/32.-Discussion.png" class="about-img" alt="images/32"></img>
                </div>
                <div
                  class="col-lg-6 col-md-12 col-sm-12  about-part"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    placeContent: "center",
                  }}
                >
                  Our main motive behind this project to provide the best jobs
                  and internship opportunities. Companies can post here open
                  application for job and internship so students can make own
                  profile and apply in multiple companies. We want to make this
                  website for the purpose of connecting students to companies .
                  You can explore the job and internship opportunities according
                  to your convience. We also have online trainings session for
                  you. We connect you and your requirements on the same page.
                  You can fill your application for your internship or your jobs
                  on the same place and get the response .
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <h2 class="about-heading1">What we offer ?</h2>

        <div style={{ padding: "0% 10% 0% 10%" }}>
          <Container fluid>
            <Row>
              <div class="col-lg-4 col-md-6 col-sm-12" id="offer-range1">
                <img src="images/INTERN SHIP.png" alt="images/INTERN"></img>

                <h4>Internships</h4>
                <p>
                  Are you looking for students internship? Find the best winter
                  & summer internships for college students in Engineering, MBA,
                  IT, Media, Finance & other streams.
                </p>

                <button class="btn-v">visit it</button>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12" id="offer-range2">
                <img src="images/INTERN SHIP (1).png" alt="images/INTERN"></img>
                <h4>Fresher's Jobs</h4>

                <p>
                  Are you a Fresher ? Go and explore it and start your journey
                  according to your requirements ,your choices .We all have for
                  you.
                </p>
                <button class="btn-v">visit it</button>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12" id="offer-range3">
                <img src="images/JOB - Logo - Google Chrome 27-03-2021 19_58_07 (2).png" alt="images/JOB"></img>
                <h4>Jobs</h4>
                <p class="para">
                  Are you looking for jobs ? Then it is the right place .Choose
                  your job according to your experience , your interest.Make the
                  wise choice .
                </p>
                <button class="btn-v">visit it</button>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
