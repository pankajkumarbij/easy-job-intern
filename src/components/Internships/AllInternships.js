import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Spinner, Alert } from "react-bootstrap";

import toast, { Toaster } from "react-hot-toast";

import "./AllInternships.css";
import { UserContext } from "../../App";
import InternshipCard from "../../utils/UI/InternshipCard/InternshipCard";

const AllInternships = () => {
  const { state, dispatch } = useContext(UserContext);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(internships);
  // console.log(state);
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
        setLoading(false);
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
        setLoading(false);
        console.log("Error: ", err);
      });
  }, []);

  if (internships && internships[4]) {
    console.log(internships[4]);
    const t = new Date(internships[4].startDate).toString("YYYY-MM-DD");
    console.log(t);
  }

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
          // console.log(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
        } else {
          setInternships(res.data.internships);
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
      <Row className="justify-content-xl-start justify-content-lg-around justify-content-sm-center">
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
        ) : internships && !internships.length > 0 ? (
          <Alert
            variant="danger"
            className="w-100 "
            style={{
              backgroundColor: "#343A40",
              border: "none",
              color: "#ffc107",
            }}
          >
            No internships available right now
          </Alert>
        ) : (
          internships &&
          internships.map((internship) => {
            // console.log(internship.createdBy._id, state.user._id);
            return (
              <Col
                key={internship._id}
                className="col-xl-4 col-lg-5 col-md-6 col-sm-11 col-12 colPost"
              >
                <InternshipCard
                  internship={internship}
                  userId={state.user._id}
                  deletePost={deletePost}
                />
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
};
export default AllInternships;
