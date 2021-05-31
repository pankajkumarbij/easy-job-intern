import React from "react";
import "../../profile.css";
import { useState } from "react";

import { Col, Row } from "react-bootstrap";

const General = ({ general }) => {
  return (
    <React.Fragment>
      <h2 className="subHeading">Education</h2>
      <Row className="justify-content-between px-5 py-3">
        <Col className="col-12 col-md-5 py-3 ">
          <div className="div-1">First Name: </div>
          <div className="div-2">{general.FirstName}</div>
        </Col>
        <Col className="col-12 col-md-5 py-3 ">
          <div className="div-1">Last Name: </div>
          <div className="div-2">{general.LastName}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">Address: </div>
          <div className="div-2">{general.Address}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">Github Link: </div>
          <div className="div-2">{general.GithubLink}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">LinkedInLink: </div>
          <div className="div-2">{general.LinkedInLink}</div>
        </Col>
        <div className="div-1 pt-3 pb-2 px-3">Other Profile Link: </div>
        {general.OtherProfileLink &&
          general.OtherProfileLink.map((link) => (
            <Col className="col-12 col-md-12 py-3 ">
              <div className="div-2">{link && link.ProfileLink}</div>
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};

export default General;
