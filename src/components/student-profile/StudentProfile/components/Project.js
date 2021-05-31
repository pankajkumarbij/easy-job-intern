import React from "react";
import "../../profile.css";
import { useState } from "react";

import { Col, Row } from "react-bootstrap";

const Project = ({ Project }) => {
  return (
    <React.Fragment>
      <h2 className="subHeading">Project</h2>
      {Project &&
        Project.map((edu) => (
          <Row className="justify-content-between px-5 py-3">
            <Col className="col-12 col-md-12 py-3 ">
              <div className="div-1">Company </div>
              <div className="div-2">{edu.ProjectTitle}</div>
            </Col>
            <Col className="col-12 col-md-12 py-3 ">
              <div className="div-1">Title: </div>
              <div className="div-2">{edu.ProjectLink}</div>
            </Col>
            <Col className="col-12 col-md-5 py-3 ">
              <div className="div-1">StartDate </div>
              <div className="div-2">{edu.StartDate}</div>
            </Col>
            <Col className="col-12 col-md-5 py-3 ">
              <div className="div-1">EndDate: </div>
              <div className="div-2">{edu.EndDate}</div>
            </Col>

            <Col className="col-12 col-md-12 py-3 ">
              <div className="div-1">Description: </div>
              <div className="div-2">{edu.Description}</div>
            </Col>
          </Row>
        ))}
    </React.Fragment>
  );
};

export default Project;
