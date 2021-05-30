import React, { useContext } from "react";
import "../InternshipCard/InternshipCard.css";
import * as Icon from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";
import { UserContext } from "../../../App";

const JobsCard = ({ job, deletePost, bookMarkPost, userId }) => {
  const { state, dispatch } = useContext(UserContext);
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
        {job.role && <div className="primary-info-role">{job.role}</div>}
        {job.companyName && (
          <div className="primary-info-company">{job.companyName}</div>
        )}
        {(job.industry || job.stream) && (
          <div className="primary-info-indus-stream">
            {job.industry}, {job.stream}
          </div>
        )}
        <div className="primary-info-table">
          <ul>
            {job.location && (
              <li>
                <i class="fas fa-map-marker-alt"></i> <span>Location:</span>
                {job.location}
              </li>
            )}
            {job.experience && (
              <li>
                <i class="fas fa-briefcase"></i>
                <span>Experience:</span>
                {job.experience && "Atleast"} {job.experience}{" "}
                {job.experience === 1 && "yrs"} {job.experience > 1 && "yrs"}
              </li>
            )}
            {job.salary && (
              <li>
                <i class="far fa-money-bill-alt"></i> <span>Salary:</span>₹
                {job.salary}
              </li>
            )}
            {job.startDate && (
              <li>
                <i className="far fa-play-circle"></i> <span>Start Date:</span>
                {GettingMonth(job.startDate)}
              </li>
            )}
            {job.lastDate && (
              <li>
                <i class="fas fa-hourglass-start"></i> <span>Apply By:</span>
                {GettingDate(job.lastDate)}
              </li>
            )}
          </ul>
        </div>
        {job.techstack && job.techstack.length > 0 && (
          <div className="primary-info-techstack">
            {job.techstack.map((tech) => (
              <div>{tech}</div>
            ))}
          </div>
        )}
      </div>
      <div className="secondary-info">
        {job.createdBy && userId && userId === job.createdBy._id && (
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
                  href={`/update-job/${job._id}`}
                >
                  <Icon.PencilSquare className="optionsMenuIcon" />
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => deletePost(job._id)}
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
                    bookMarkPost(job._id);
                    console.log(job._id);
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
          {job.description && (
            <div className="secondary-info-description w-100">
              {job.description}
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

export default JobsCard;
