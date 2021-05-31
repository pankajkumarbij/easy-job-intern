import axios from "axios";
import React, { useEffect, useContext, useState } from "react";

import { Spinner, Alert } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../../App";
import FresherJobCard from "../../utils/UI/FresherJobCard/FresherJobCard";
import InternshipCard from "../../utils/UI/InternshipCard/InternshipCard";
import JobsCard from "../../utils/UI/JobsCard/JobsCard";
import "./EmployerProfileScreen.css";

const EmployerProfileScreen = ({ history }) => {
  const { state, dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(state.user._id);
    axios({
      method: "get",
      url: `http://localhost:5000/employer/employerfetch/${state.user._id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);
  
  const deleteaccount = () => {
    axios({
      method: "delete",
      url: `http://localhost:5000/employer/deleteEmployer`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        // console.log(res.data);
        localStorage.removeItem("user");
        localStorage.removeItem("jwt");
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="w-100 h-100">
      {loading ? (
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          className="mt-5"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div
          className="row"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <div className="col-lg-4 col-md-12">
            <div
              className="employer-main-profile"
              style={{ borderRight: "1px solid yellow" }}
            >
              <div
                className="container"
                style={{
                  backgroundColor: "transparent",
                  opacity: 1,
                  width: "75%",
                }}
              >
                <h2 className="employer-profile-heading mb-5">My Profile</h2>
                <div className="employer-secondary-profile">
                  <ul>
                    <li>
                      <span>
                        <i class="fas fa-user"></i> Name :{" "}
                      </span>
                      {data.employer.personName && data.employer.personName}
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-id-card"></i> Contact :{" "}
                      </span>
                      {data.employer.contact && data.employer.contact}
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-envelope"></i> Email :{" "}
                      </span>
                      {data.employer.email}
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-building"></i> Company Name :{" "}
                      </span>
                      {data.employer.companyName}
                    </li>
                  </ul>
                </div>
                <div className="employer-secondary-profile-buttons mt-5">
                  <Link
                    to="/employer-update"
                    className="btn btn-outline-primary btn-block"
                  >
                    Edit Account
                  </Link>
                  <div
                    className="btn btn-outline-danger btn-block"
                    onClick={deleteaccount}
                  >
                    Delete Account
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 mt-5">
            <div className="row w-100 mb-5">
              <h3 className="mx-auto employer-profile-heading">
                My Created InternShips
              </h3>
            </div>
            <div className="row w-100 mb-5">
              {data.internships.length > 0 ? (
                data.internships.map((intern) => (
                  <div className="col-lg-6 col-md-12">
                    <InternshipCard
                      internship={intern}
                      userId={state.user._id}
                      key={intern._id}
                    />
                  </div>
                ))
              ) : (
                <Alert className="w-100" variant="primary">
                  No internship created by you
                </Alert>
              )}
            </div>
            <div className="row w-100 mb-5 ">
              <h3 className="mx-auto employer-profile-heading">
                My Created Jobs
              </h3>
            </div>
            <div className="row w-100 mb-5">
              {data.jobs.length > 0 ? (
                data.jobs.map((intern) => (
                  <div className="col-lg-6 col-md-12">
                    <JobsCard
                      job={intern}
                      userId={state.user._id}
                      key={intern._id}
                    />
                  </div>
                ))
              ) : (
                <Alert className="w-100" variant="primary">
                  No jobs created by you
                </Alert>
              )}
            </div>
            <div className="row w-100 mb-5">
              <h3 className="mx-auto employer-profile-heading">
                My Created FresherJobs
              </h3>
            </div>
            <div className="row w-100 mb-5">
              {data.fresherJobs.length > 0 ? (
                data.fresherJobs.map((intern) => (
                  <div className="col-lg-6 col-md-12">
                    <FresherJobCard
                      fresherjob={intern}
                      userId={state.user._id}
                      key={intern._id}
                    />
                  </div>
                ))
              ) : (
                <Alert className="w-100" variant="primary">
                  No fresherJobs created by you
                </Alert>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(EmployerProfileScreen);
