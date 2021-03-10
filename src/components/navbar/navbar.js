import { Button, Navbar, Nav, Form, FormControl, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from '../home/home';
import Login from '../student/login';
import SignUp from '../student/register';
import ContactUs from '../contact-us/contact-us';
import AboutUs from '../about-us/about-us';
import PrivacyPolicy from '../privacy-policy/privacy-policy';
import TermsCondition from '../terms-condition/terms-condition';

function NavBar(){
    return(
        <>
        <BrowserRouter>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/" style={{color: "yellow"}}>Easy Job Intern</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Jobs
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/" >Jobs By Industry</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/" >Jobs By Location</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/" >Jobs By Stream</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic" >
                                    Internship
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/" > By Industry</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/" > By Location</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/" > By Stream</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                        <Nav.Link  as={Link} to="/" className="my-auto" active >Other Programs</Nav.Link>
                        <Nav.Link as={Link} to="/" className="my-auto px-3" active >Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about-us" className="my-auto px-3" active >About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us" className="my-auto px-3" active >Contact Us</Nav.Link>
                    </Nav>
                    <Form inline>
                         <FormControl type="text" placeholder="Search" className="mr-sm-1"/>
                         <Button><Icon.Search/></Button>
                    </Form>
                    <Nav>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    <Icon.BoxArrowInRight /> Login
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/student-login" >Student</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/" >Employee</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                        <Nav.Link>
                            <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        <Icon.PersonPlus /> Signup
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/student-signup" >Student</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/" >Employee</Dropdown.Item>
                                    </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path="/" exact > <Home/> </Route>
                <Route path="/student-login" exact > <Login/> </Route>
                <Route path="/student-signup" exact > <SignUp/> </Route>
                <Route path="/about-us" exact > <AboutUs/> </Route>
                <Route path="/contact-us" exact > <ContactUs/> </Route>
                <Route path="/privacy-policy" exact > <PrivacyPolicy/> </Route>
                <Route path="/terms-conditions" exact > <TermsCondition/> </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default NavBar;
