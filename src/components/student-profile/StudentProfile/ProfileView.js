import React, { useEffect } from "react";
import "../profile.css";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import Start from "../Start";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import { Col, Row } from "react-bootstrap";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

const ProfileView = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/student/buildprofile/get`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res);
        // setLoading(false);
        if (res.data.error) {
          console.log(res.data.error);
          // alert(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
        } else {
          // console.log(res.data.Jobs);
          // res.data.profile.General.OtherProfileLink =
          res.data.profile.General.OtherProfileLink.forEach((link) => {
            link._id = null;
          });
          setProfile(res.data.profile);
          console.log(profile);
        }
      })
      .catch((err) => {
        // setLoading(false);
        console.log("Error: ", err);
      });
  }, []);

  console.log(profile);

  return (
    <div className="pt-5">
      <Toaster />
      {profile && (
        <div className="main-box py-4 profile-box">
          <h1 className="ProfileBuilderheading">Student Profile</h1>
          {profile.General && <General general={profile.General} />}
          {profile.Education && <Education Education={profile.Education} />}
          {profile.Experience && <Experience Experience={profile.Education} />}
        </div>
      )}
    </div>
  );
};

export default ProfileView;
