import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Spinner, Alert } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../App";

import "../Internships/AllInternships.css";
import FresherJobCard from "../../utils/UI/FresherJobCard/FresherJobCard";
// import { Alert } from "bootstrap";

const FresherJobsGroupedByLocation = () => {
  const { state, dispatch } = useContext(UserContext);
  const [freshersJobs, setFreshersJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/user/freshersjob/location",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        // console.log(res);
        setLoading(false);
        if (res.data.error) {
          console.log(res.data.error);
          // alert(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
        } else {
          // console.log(res.data.freshersjobs);
          setFreshersJobs(res.data.freshersJobs);
          // console.log(freshersJobs);
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
              {catefresher.freshersJobs &&
                catefresher.freshersJobs.map((fresher) => {
                  // console.log(internship.createdBy._id, state.user._id);
                  return (
                    <Col
                      key={fresher._id}
                      className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost"
                    >
                      <FresherJobCard
                        fresherjob={fresher}
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
export default FresherJobsGroupedByLocation;
