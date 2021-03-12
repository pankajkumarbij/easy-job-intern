import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
        <footer className="bg-dark text-white newFooter">
          <ul>
            <li class="listHeading">
              <h5>Online Trainings</h5>
              <ul>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Advanced Excel
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Data Science and ML
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Core Java
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Digital Marketing
                  </Button>{" "}
                </li>
              </ul>
            </li>
            <li class="mob">
              <Button
                style={{
                  marginBottom: "5px",
                  borderColor: "#343a40",
                  padding: "2px 0.75rem",
                  fontSize: "0.8rem",
                }}
                variant="outline-warning"
                href="#"
              >
                Online Trainings
              </Button>{" "}
            </li>
            <li class="listHeading">
              <h5>Internship by Places</h5>
              <ul>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Mumbai
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Delhi
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Bangalore
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  {" "}
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    PAN India
                  </Button>{" "}
                </li>
              </ul>
            </li>
            <li class="mob">
              <Button
                style={{
                  marginBottom: "5px",
                  borderColor: "#343a40",
                  padding: "2px 0.75rem",
                  fontSize: "0.8rem",
                }}
                variant="outline-warning"
                href="#"
              >
                Internship by Places
              </Button>{" "}
            </li>
            <li class="listHeading">
              <h5>Internship by Stream</h5>
              <ul>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Computer Science
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Content Marketing
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Summer Research Fellowship
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  {" "}
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    href="#"
                  >
                    Electrical Engineering
                  </Button>{" "}
                </li>
              </ul>
            </li>
            <li class="mob">
              <Button
                style={{
                  marginBottom: "5px",
                  borderColor: "#343a40",
                  padding: "2px 0.75rem",
                  fontSize: "0.8rem",
                }}
                variant="outline-warning"
                href="#"
              >
                Internship by Stream
              </Button>{" "}
            </li>
            <li class="listHeading">
              <h5>About Easy Job Intern</h5>
              <ul>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    as={Link}
                    to="/about-us"
                  >
                    About Us
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    as={Link}
                    to="/contact-us"
                    variant="outline-warning"
                  >
                    Contact Us
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    as={Link}
                    to="/terms-conditions"
                    variant="outline-warning"
                  >
                    Terms and Condition
                  </Button>{" "}
                </li>
                <li class="listFooter">
                  {" "}
                  <Button
                    style={{
                      marginBottom: "5px",
                      borderColor: "#343a40",
                      padding: "2px 0.75rem",
                      fontSize: "0.8rem",
                    }}
                    variant="outline-warning"
                    as={Link}
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Button>{" "}
                </li>
              </ul>
            </li>
            <li class="mob">
              <Button
                style={{
                  marginBottom: "5px",
                  borderColor: "#343a40",
                  padding: "2px 0.75rem",
                  fontSize: "0.8rem",
                }}
                variant="outline-warning"
                href="#"
              >
                About Easy Job Intern
              </Button>{" "}
            </li>
          </ul>

          <div className="row  mx-auto">
            <div className="col-sm-12 mt-md-2  my-2">
              <p style={{ fontSize: "15px", marginBottom: "5px" }}>
                Connect With Us!
              </p>
              <a href="#">
                <Icon.Linkedin
                  style={{ color: "#ffc107" }}
                  className="mx-md-3 mx-2"
                ></Icon.Linkedin>{" "}
              </a>
              <a href="#">
                <Icon.Facebook
                  style={{ color: "#ffc107" }}
                  className="mx-md-3 mx-2"
                ></Icon.Facebook>
              </a>
              <a href="#">
                <Icon.Twitter
                  style={{ color: "#ffc107" }}
                  className="mx-md-3 mx-2"
                ></Icon.Twitter>
              </a>
              <a href="#">
                <Icon.Youtube
                  style={{ color: "#ffc107" }}
                  className="mx-md-3 mx-2"
                ></Icon.Youtube>{" "}
              </a>
              <br />
              <span style={{ fontSize: "8px" }}>
                &copy; 2021 - All right reserved - Easy Job Intern
              </span>
            </div>
          </div>
        </footer>
      
    </>
  );
}

export default Footer;
