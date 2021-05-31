import React, { useEffect } from "react";
import "./profile.css";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Label from "./Label";
import Input from "./Input";

const Other = ({ Others, changeValue }) => {
  const [inputFields, setInputFields] = useState([{ Other: "" }]);

  useEffect(() => {
    changeValue(inputFields, "Other");
  }, [inputFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i, j) => {
      if (id === j) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { Other: "" }]);
  };

  const handleRemoveFields = (id) => {
    let values = [...inputFields];
    values = values.filter((val, j) => id != j);
    // values.splice(
    //   values.findIndex((value) => value.j === id),
    //   1
    // );
    setInputFields(values);
  };

  return (
    <form className="Other">
      <h2 className="subHeading">Other</h2>
      <Label value="Other" />
      <br />
      {inputFields.map((inputField, j) => (
        <div key={j}>
          <input
            name="Other"
            label="Other"
            value={inputField.Other}
            className="text-long"
            placeholder="Enter your Other"
            onChange={(event) => handleChangeInput(j, event)}
          ></input>
          <IconButton
            disabled={Others.length === 1}
            onClick={() => handleRemoveFields(j)}
          >
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={handleAddFields}>
            <AddIcon />
          </IconButton>
        </div>
      ))}

      <hr />
    </form>
  );
};

export default Other;
