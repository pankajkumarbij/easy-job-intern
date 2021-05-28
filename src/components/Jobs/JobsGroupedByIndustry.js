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
import JobsCard from "../../utils/UI/JobsCard/JobsCard";

const JobsGroupedByIndustry = () => {
  const { state, dispatch } = useContext(UserContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:5000/user/all-jobs",
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("jwt"),
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.error) {
  //         console.log(res.data.error);
  //         // alert(res.data.error);
  //         const notify = () => toast(res.data.error);
  //         notify();
  //       } else {
  //         // if (res && res.data) {
  //           console.log(res.data.jobs);
  //           setJobs(res.data.jobs);
  //           console.log(jobs);
  //         // }
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", err);
  //     });
  // }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/user/job/industry",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        // console.log(res);
        setLoading(false);
        if (res.data.error) {
          // console.log(res.data.error);
          // alert(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
        } else {
          // console.log(res.data.jobs);
          setJobs(res.data.jobs);
          // console.log(jobs);
        }
      })
      .catch((err) => {
        setLoading(false);
        // console.log("Error: ", err);
      });
  }, []);

  if (jobs && jobs[4]) {
    console.log(jobs[4]);
    const t = new Date(jobs[4].startDate).toString("YYYY-MM-DD");
    console.log(t);
  }

  const deletePost = (postId) => {
    axios({
      method: "delete",
      url: "http://localhost:5000/employer/delete-job",
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
      ) : jobs && !jobs.length > 0 ? (
        <Alert
          variant="danger"
          className="w-100"
          style={{
            backgroundColor: "#343A40",
            border: "none",
            color: "#ffc107",
          }}
        >
          No Jobs available right now
        </Alert>
      ) : (
        jobs &&
        jobs.map((catejob) => (
          <div key={catejob._id}>
            <h1 className="parameter">{catejob._id}</h1>
            <Row className="justify-content-xl-start justify-content-lg-around justify-content-sm-center">
              {catejob.jobs &&
                catejob.jobs.map((job) => {
                  return (
                    <Col
                      key={job._id}
                      className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost"
                    >
                      <JobsCard
                        job={job}
                        deletePost={deletePost}
                        key={job._id}
                        userId={state.user._id}
                      />
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
export default JobsGroupedByIndustry;
