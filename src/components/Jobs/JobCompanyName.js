import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Col, Row, Spinner, Alert } from "react-bootstrap";

const JobCompanyName = () => {
  const history = useHistory();
  const [names, setNames] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/user/companyName-Job`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          console.log(res.data.error);
          // alert(res.data.error);
          //   const notify = () => toast(res.data.error);
          //   notify();
        } else {
          console.log(res.data.Jobs);
          setNames(res.data.Jobs);
          console.log(names);
        }
      })
      .catch((err) => {
        // setLoading(false);
        console.log("Error: ", err);
      });
  }, []);

  console.log(names);
  return (
    <div>
      <h1 className="companyHeading">Jobs</h1>
      <Row>
        {names &&
          names.map((name) => (
            <Col className="col-10 col-md-6 COMPANYNAME">
              <div
                className="NAME-company"
                onClick={() =>
                  history.push(`/companyName-job/${name._id}`)
                }
              >
                {name._id}
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default JobCompanyName;
