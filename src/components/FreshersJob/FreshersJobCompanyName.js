import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Col, Row, Spinner, Alert } from "react-bootstrap";

const FreshersJobCompanyName = () => {
  const history = useHistory();
  const [names, setNames] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/user/companyName-freshersjob`,
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
          console.log(res.data.FreshersJobs);
          setNames(res.data.FreshersJobs);
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
      <h1 className="companyHeading">Fresher's Jobs</h1>
      <Row>
        {names &&
          names.map((name) => (
            <Col className="col-10 col-md-6 COMPANYNAME">
              <div
                className="NAME-company"
                onClick={() =>
                  history.push(`/freshers/companyName/${name._id}`)
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

export default FreshersJobCompanyName;
