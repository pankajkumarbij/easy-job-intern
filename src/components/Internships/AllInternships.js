import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  ListGroup,
  ListGroupItem,
  Modal,
  Row,
} from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import * as Icon from "react-bootstrap-icons";

import "./AllInternships.css";
import { UserContext } from "../../App";
import { colors } from "@material-ui/core";

const AllInternships = () => {
  const { state, dispatch } = useContext(UserContext);
  const [internships, setInternships] = useState([]);
  console.log(internships);
  console.log(state);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/user/all-internships",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          console.log(res.data.error);
          // alert(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
        } else {
          console.log(res.data.internships);
          setInternships(res.data.internships);
          console.log(internships);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [internships]);

  if (internships && internships[4]) {
    console.log(internships[4]);
    const t = new Date(internships[4].startDate).toString("YYYY-MM-DD");
    console.log(t);
  }

  const GettingMonth = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const time =
      monthNames[new Date(date).getMonth()] +
      ", " +
      new Date(date).getFullYear();
    return time;
  };

  const GettingDate = (date) => {
    const time = new Date(date).getDate() + " " + GettingMonth(date);
    return time;
  };

  const GettingDuration = (time) => {
    const t = Math.floor(Number(time) / (3600 * 1000 * 24 * 30));
    console.log(t);
    return t > 1 ? t + " Months" : t + " Month";
  };

  const deletePost = (postId) => {
    axios({
      method: "delete",
      url: "http://localhost:5000/employer/delete-internship",
      data: {
        postId,
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          console.log(res.data.error);
          // alert(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
        } else {
          console.log(res.data.internships);
          setInternships(res.data.internships);
          console.log(internships);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  return (
    <div className="internshipsOuterContainer">
      <Toaster />
      <Row className="justify-content-xl-start justify-content-lg-around justify-content-sm-center">
        {internships &&
          internships.map((internship) => {
            // console.log(internship.createdBy._id, state.user._id);
            return (
              <Col
                key={internship._id}
                className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost"
              >
                <Card className="cardPost">
                  <Card.Body>
                    <Card.Title className="titleOfPost">
                      {internship.companyName}{" "}
                      {state &&
                        internship.createdBy &&
                        state.user._id == internship.createdBy._id && (
                          <Dropdown className="postOptions">
                            <Dropdown.Toggle
                              className="postOptionsBtn"
                              variant="success"
                              id="dropdown-basic"
                            >
                              <Icon.ThreeDotsVertical
                                style={{ fontSize: "1.4rem" }}
                              />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="optionMenu">
                              <Dropdown.Item
                                className="optionItem"
                                href={`/update-internship/${internship._id}`}
                              >
                                <Icon.PencilSquare className="optionsMenuIcon" />
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => deletePost(internship._id)}
                                className="optionItem"
                              >
                                <Icon.Trash className="optionsMenuIcon" />
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        )}
                    </Card.Title>
                    <Card.Subtitle className="subtitleOfPost">
                      {internship.location}
                    </Card.Subtitle>
                    <Card.Text className="textPost">
                      {internship.description}
                    </Card.Text>
                    <ListGroup>
                      <ListGroupItem className="itemPost">
                        Stipend: {internship.stipend}
                      </ListGroupItem>
                      <ListGroupItem className="itemPost">
                        Duration: {GettingDuration(internship.duration)}
                      </ListGroupItem>
                      <ListGroupItem className="itemPost">
                        Start Date: {GettingMonth(internship.startDate)}
                      </ListGroupItem>
                      <ListGroupItem className="itemPost">
                        End Date: {GettingMonth(internship.endDate)}
                      </ListGroupItem>
                      <ListGroupItem className="itemPost last">
                        Last Date to Apply: {GettingDate(internship.lastDate)}
                      </ListGroupItem>
                    </ListGroup>
                    <div className="tech">
                      {internship.techstack &&
                        internship.techstack.map((skill, i) => (
                          <Card.Link key={i} className="TechStack">
                            {skill}
                          </Card.Link>
                        ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default AllInternships;
