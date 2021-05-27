import React from "react";
import "./InternshipCard.css";
import * as Icon from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

const InternshipCard = ({ internship, deletePost, userId }) => {
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

  const GettingDuration = (time) => {
    const t = Math.floor(Number(time) / (3600 * 1000 * 24 * 30));
    console.log(t);
    return t > 1 ? t + " Months" : t + " Month";
  };
  return (
    <div className="card-custom mx-auto">
      <div className="primary-info">
        {internship.role && (
          <div className="primary-info-role">{internship.role}</div>
        )}
        {internship.company && (
          <div className="primary-info-company">{internship.company}</div>
        )}
        {(internship.industry || internship.stream) && (
          <div className="primary-info-indus-stream">
            {internship.industry}, {internship.stream}
          </div>
        )}
        <div className="primary-info-table">
          <ul>
            {internship.location && (
              <li>
                <i class="fas fa-map-marker-alt"></i> <span>Location:</span>
                {internship.location}
              </li>
            )}
            {internship.startDate && (
              <li>
                <i className="far fa-play-circle"></i> <span>Start Date:</span>
                {GettingMonth(internship.startDate)}
              </li>
            )}
            {internship.duration && (
              <li>
                <i class="fas fa-calendar-week"></i> <span>Duration:</span>
                {GettingDuration(internship.duration)}
              </li>
            )}
            {internship.stipend && (
              <li>
                <i class="far fa-money-bill-alt"></i> <span>Stipend:</span>₹
                {internship.stipend}
              </li>
            )}
            {internship.lastDate && (
              <li>
                <i class="fas fa-hourglass-start"></i> <span>Apply By:</span>
                {GettingDate(internship.lastDate)}
              </li>
            )}
          </ul>
        </div>
        {internship.techstack && internship.techstack.length > 0 && (
          <div className="primary-info-techstack">
            {internship.techstack.map((tech) => (
              <div>{tech}</div>
            ))}
          </div>
        )}
      </div>
      <div className="secondary-info">
        {internship.createdBy && userId && userId === internship.createdBy._id && (
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
                  href={`/update-internship/${internship._id}`}
                >
                  <Icon.PencilSquare className="optionsMenuIcon" />
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => deletePost(internship._id)}
                  className="optionItem"
                >
                  <Icon.Trash className="optionsMenuIcon" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        <div className="secondary-info-container">
          {internship.description && (
            <div className="secondary-info-description w-100">
              {internship.description}
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

export default InternshipCard;
