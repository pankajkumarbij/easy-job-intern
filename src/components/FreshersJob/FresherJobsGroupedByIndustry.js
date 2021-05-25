import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Col,
  Dropdown,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
  Alert,
} from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../App";
import * as Icon from "react-bootstrap-icons";

import "../Internships/AllInternships.css";
// import { Alert } from "bootstrap";

const FresherJobsGroupedByIndustry = () => {
  const { state, dispatch } = useContext(UserContext);
  const [freshersJobs, setFreshersJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const deletePost = (postId) => {
    axios({
      method: "delete",
      url: "http://localhost:5000/employer/delete-freshersjob",
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
          // console.log(res.data.jobs);
          // setJobs(res.data.jobs);
          // console.log(jobs);
          window.location.reload(false);
          const notify = () => toast(res.data.message);
          notify();
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/user/freshersjob/industry",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.data.error) {
          console.log(res.data.error);
          // alert(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
        } else {
          console.log(res.data.freshersjobs);
          setFreshersJobs(res.data.freshersjobs);
          console.log(freshersJobs);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error: ", err);
      });
  }, []);

  if (freshersJobs && freshersJobs[4]) {
    console.log(freshersJobs[4]);
    const t = new Date(freshersJobs[4].startDate).toString("YYYY-MM-DD");
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

  return (
    <div className="internshipsOuterContainer">
      <Toaster />
      {loading ? (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center">
          <Spinner
            animation="border"
            variant="light"
            style={{
              borderColor: "#515b66",
              borderRightColor: "transparent",
            }}
          />
        </div>
      ) : freshersJobs && !freshersJobs.length > 0 ? (
        <Alert
          variant="danger"
          className="w-100"
          style={{
            backgroundColor: "#343A40",
            border: "none",
            color: "#ffc107",
          }}
        >
          No Fresher Jobs available right now
        </Alert>
      ) : (
        freshersJobs &&
        freshersJobs.map((catefresher) => (
          <div key={catefresher._id}>
            <h1 className="parameter">{catefresher._id}</h1>
            <Row className="justify-content-xl-start justify-content-lg-around justify-content-sm-center">
              {catefresher.freshersjobs &&
                catefresher.freshersjobs.map((fresher) => {
                  // console.log(internship.createdBy._id, state.user._id);
                  return (
                    <Col
                      key={fresher._id}
                      className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost"
                    >
                      <Card className="cardPost">
                        <Card.Body>
                          <Card.Title className="titleOfPost">
                            {fresher.companyName}
                            {state &&
                              fresher.createdBy &&
                              state.user._id == fresher.createdBy && (
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
                                      href={`/update-fresher/${fresher._id}`}
                                    >
                                      <Icon.PencilSquare className="optionsMenuIcon" />
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      onClick={() => deletePost(fresher._id)}
                                      className="optionItem"
                                    >
                                      <Icon.Trash className="optionsMenuIcon" />
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              )}
                          </Card.Title>
                          <Card.Subtitle className="subtitleOfPost">
                            {fresher.location}
                          </Card.Subtitle>
                          <Card.Subtitle className="subsubtitleOfPost">
                            {fresher.industry}{" "}
                            {fresher.industry && fresher.stream && ","}{" "}
                            {fresher.stream}
                          </Card.Subtitle>
                          <Card.Text className="textPost">
                            {fresher.description}
                          </Card.Text>
                          <ListGroup>
                            <ListGroupItem className="itemPost">
                              Salary: {fresher.salary}
                            </ListGroupItem>
                            <ListGroupItem className="itemPost">
                              Start Date: {GettingMonth(fresher.startDate)}
                            </ListGroupItem>
                            <ListGroupItem className="itemPost last">
                              Last Date to Apply:{" "}
                              {GettingDate(fresher.lastDate)}
                            </ListGroupItem>
                          </ListGroup>
                          <div className="tech">
                            {fresher.techstack &&
                              fresher.techstack.map((skill, i) => (
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
        ))
      )}
    </div>
  );
};
export default FresherJobsGroupedByIndustry;
