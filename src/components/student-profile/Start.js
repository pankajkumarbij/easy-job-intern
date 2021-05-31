import React from "react";
import "./profile.css";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Label from "./Label";
import Skills from "./Skills";
import Input from "./Input";
import { Col, Row } from "react-bootstrap";

const Start = ({ General, handleChange }) => {
  const [inputFields, setInputFields] = useState([{ profileLink: "" }]);
  console.log(inputFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { profileLink: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  return (
    <>
      <form className="form-main" onSubmit={handleSubmit}>
        <h1 className="subHeading">General</h1>
        <Row className="justify-content-between px-3">
          <div className="side">
            <label className="label-text">
              First Name<span>*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your first name"
              className="text-long"
              onChange={(e) => handleChange(e)}
              value={General.FirstName.value}
              name="FirstName"
            ></input>
            <br />
          </div>

          <div className="side">
            <label className="label-text">
              Last Name<span>*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              className="text-long"
              onChange={(e) => handleChange(e)}
              value={General.LastName.value}
              name="LastName"
            ></input>
            <br />
          </div>
        </Row>

        <label className="label-text">
          Studnet Address<span>*</span>
        </label>
        <br />
        <input
          type="text"
          className="text-long"
          placeholder="Enter your student address"
          onChange={(e) => handleChange(e)}
          value={General.Address.value}
          name="Address"
        ></input>
        <br />

        <label className="label-text">
          Github Link<span>*</span>
        </label>
        <br />
        <input
          type="text"
          className="text-long"
          placeholder="Enter your github link"
          onChange={(e) => handleChange(e)}
          value={General.GithubLink.value}
          name="GithubLink"
        ></input>
        <br />

        <label className="label-text">
          LinkedIn Link<span>*</span>
        </label>
        <br />
        <input
          type="text"
          className="text-long"
          placeholder="Enter your linkedinlink"
          onChange={(e) => handleChange(e)}
          value={General.LinkedinLink.value}
          name="LinkedinLink"
        ></input>
        <br />

        <label className="label-text">
          Other Profile Link<span>*</span>
        </label>
        <br />
        {/* <input type="text" className="text-long" placeholder="Enter your other profile link"></input> */}

        {inputFields.map((inputField) => (
          <Row key={inputField.id} className="justify-content-between">
            <Col className="col-md-10 col-12">
              <input
                name="profileLink"
                label="Profile Link"
                value={inputField.profileLink}
                className="text-long"
                placeholder="Enter your other profile link"
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></input>
            </Col>
            <Col className="col-md-2 d-flex col-12">
              <IconButton
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </Col>
          </Row>
        ))}
        {/* </Row> */}
      </form>
      <hr></hr>
    </>
  );
};

export default Start;
