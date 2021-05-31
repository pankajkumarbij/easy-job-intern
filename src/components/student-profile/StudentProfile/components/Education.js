import React from "react";
import "../../profile.css";
import { useState } from "react";

import { Col, Row } from "react-bootstrap";

const Education = ({ Education }) => {
  return (
    <React.Fragment>
      <h2 className="subHeading">Education</h2>
      <Row className="justify-content-between px-5 py-3">
        <Col className="col-12 col-md-5 py-3 ">
          <div className="div-1">School </div>
          <div className="div-2">{Education.School}</div>
        </Col>
        <Col className="col-12 col-md-5 py-3 ">
          <div className="div-1">Degree: </div>
          <div className="div-2">{Education.Degree}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">FieldOfStudy: </div>
          <div className="div-2">{Education.FieldOfStudy}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">Github Link: </div>
          <div className="div-2">{Education.GithubLink}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">LinkedInLink: </div>
          <div className="div-2">{Education.LinkedInLink}</div>
        </Col>
        <div className="div-1 pt-3 pb-2 px-3">Other Profile Link: </div>
        {Education.OtherProfileLink &&
          Education.OtherProfileLink.map((link) => (
            <Col className="col-12 col-md-12 py-3 ">
              <div className="div-2">{link && link.ProfileLink}</div>
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};

export default Education;
