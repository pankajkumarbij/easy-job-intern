import React, { useContext } from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

import './navbar.css';

function NavBar() {
  const { state } = useContext(UserContext);
  if(state) console.log(state.user.personName);
  
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/" style={{ color: "yellow" }}>
          Easy Job Intern
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic" className="navBTN">
                  Internship
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/all-internships">
                    {" "}
                    All Internship
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    {" "}
                    Internship By Industry
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    {" "}
                    Internship By Location
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    {" "}
                    Internship By Stream
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic" className="navBTN">
                  Jobs
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/all-jobs">
                    All Jobs 
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Jobs By Industry
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Jobs By Location
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Jobs By Stream
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link>
              <Dropdown className="navLINK">
                <Dropdown.Toggle variant="dark" id="dropdown-basic" className="navBTN">
                  Freshers Jobs
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/all-freshersjobs">
                    All Freshers Jobs 
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Freshers Jobs By Industry
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Freshers Jobs By Location
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Freshers Jobs By Stream
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              className="my-auto px-3"
              style={{ color: "white" }}
            >
              Blogs
            </Nav.Link>
          </Nav>
          <Form inline class="searchForm">
            <FormControl type="text" placeholder="Search" className="mr-sm-1 inputSearch" />
            <Button className="searchBtn">
              <Icon.Search />
            </Button>
          </Form>
          <Nav className="ml-auto">
            {(state && state.user) ? (
              <React.Fragment>
                <Nav.Link className="my-auto navLINK" style={{ color: "#fff" }}>
                  Welcome {state.user.personName}
                </Nav.Link>
                {state.userType === "employee" && <Nav.Link className="my-auto">
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic" className="navBTN">
                      Create
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/create-internship">
                        Internship
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/create-job">
                        Job
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/create-freshersjob">
                        Fresher's Job
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>}
                <Nav.Link
                  className="my-auto"
                  style={{ color: "#fff" }}
                  onClick={() => {
                    localStorage.removeItem("jwt");
                    localStorage.removeItem("user");
                    localStorage.removeItem("type");
                    window.location.reload(false);
                  }}
                >
                  signout
                </Nav.Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      <Icon.BoxArrowInRight /> Login
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/student-login">
                        Student
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/employer-login">
                        Employer
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>
                <Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      <Icon.PersonPlus /> Signup
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/student-signup">
                        Student
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/employer-signup">
                        Employer
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
