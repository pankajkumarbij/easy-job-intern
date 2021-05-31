import React, { useContext } from "react";
import "../InternshipCard/InternshipCard.css";
import * as Icon from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";
import { UserContext } from "../../../App";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const FresherJobCard = ({ fresherjob, deletePost, userId }) => {
  const { state, dispatch } = useContext(UserContext);

  const bookMarkPost = (postId) => {
    axios({
      method: "post",
      url: `http://localhost:5000/student/bookmarkFresherJob/${postId}`,
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
          // setInternships(res.data.internships);
          // window.location.reload(false);
          console.log(res.data.message);
          const notify = () => toast(res.data.message);
          notify();
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

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
    <div className="card-custom mx-auto">
      <div className="primary-info">
        {fresherjob.role && (
          <div className="primary-info-role">{fresherjob.role}</div>
        )}
        {fresherjob.companyName && (
          <div className="primary-info-company">{fresherjob.companyName}</div>
        )}
        {(fresherjob.industry || fresherjob.stream) && (
          <div className="primary-info-indus-stream">
            {fresherjob.industry}, {fresherjob.stream}
          </div>
        )}
        <div className="primary-info-table">
          <ul>
            {fresherjob.location && (
              <li>
                <i class="fas fa-map-marker-alt"></i> <span>Location:</span>
                {fresherjob.location}
              </li>
            )}
            {fresherjob.salary && (
              <li>
                <i class="far fa-money-bill-alt"></i> <span>Salary:</span>₹
                {fresherjob.salary}
              </li>
            )}
            {fresherjob.startDate && (
              <li>
                <i className="far fa-play-circle"></i> <span>Start Date:</span>
                {GettingMonth(fresherjob.startDate)}
              </li>
            )}
            {fresherjob.lastDate && (
              <li>
                <i class="fas fa-hourglass-start"></i> <span>Apply By:</span>
                {GettingDate(fresherjob.lastDate)}
              </li>
            )}
          </ul>
        </div>
        {fresherjob.techstack && fresherjob.techstack.length > 0 && (
          <div className="primary-info-techstack">
            {fresherjob.techstack.map((tech) => (
              <div>{tech}</div>
            ))}
          </div>
        )}
      </div>
      <div className="secondary-info">
        {fresherjob.createdBy && userId && userId === fresherjob.createdBy._id && (
          <div className="dropdown-container">
            <Dropdown className="postOptions">
              <Dropdown.Toggle
                className="postOptionsBtn"
                variant="success"
                id="dropdown-basic"
              >
                <Icon.ThreeDotsVertical style={{ fontSize: "1.4rem" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="optionMenu">
                <Dropdown.Item
                  className="optionItem"
                  href={`/update-fresher/${fresherjob._id}`}
                >
                  <Icon.PencilSquare className="optionsMenuIcon" />
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => deletePost(fresherjob._id)}
                  className="optionItem"
                >
                  <Icon.Trash className="optionsMenuIcon" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        {state && state.userType === "student" && (
          <div className="dropdown-container">
            <Dropdown className="postOptions">
              <Dropdown.Toggle
                className="postOptionsBtn"
                variant="success"
                id="dropdown-basic"
              >
                <Icon.ThreeDotsVertical style={{ fontSize: "1.4rem" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="optionMenu">
                <Dropdown.Item
                  onClick={() => {
                    bookMarkPost(fresherjob._id);
                    console.log(fresherjob._id);
                  }}
                  className="optionItem"
                >
                  <Icon.Bookmark className="optionsMenuIcon" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        <div className="secondary-info-container">
          {fresherjob.description && (
            <div className="secondary-info-description w-100">
              {fresherjob.description}
            </div>
          )}
          <a href="#" className="btn btn-custom">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FresherJobCard;
