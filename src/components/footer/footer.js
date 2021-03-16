import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
// import "./footer.css";

function Footer() {
  return (
    <>
        <footer className="bg-dark text-white newFooter">
        <div>
            <h1>Hi</h1>
        </div>

        <div>
          
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
        </div>
        
        </footer>
      
    </>
  );
}

export default Footer;
