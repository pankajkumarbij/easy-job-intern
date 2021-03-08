import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';


function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">E-J-I</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      

                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Jobs
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>

                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Internship
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>


                        <Nav.Link  href="#link3" className="my-auto">Other Programs</Nav.Link>
                        <Nav.Link href="#link3" className="my-auto px-3">Blogs</Nav.Link>
                        <Nav.Link href="/about" className="my-auto px-3">About Us</Nav.Link>
                        <Nav.Link href="/contact" className="my-auto px-3">Contact Us</Nav.Link>
                        
                    </Nav>
                
                    <Form inline className="searchbar">
                        
                         <FormControl type="text" placeholder="Search" className="mr-sm-1"/>
                         <Button className="searchbtn"><Icon.Search/></Button>
                         
                    </Form>
                
                    <Nav>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Login
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Student</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Employee</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                        <Nav.Link>
                            <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        Signup
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Student</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Employee</Dropdown.Item>
                                    </Dropdown.Menu>
                            </Dropdown>
                            
                        </Nav.Link>
                    </Nav>


                </Navbar.Collapse>


            </Navbar>

        </>
    )
}

export default NavBar;
