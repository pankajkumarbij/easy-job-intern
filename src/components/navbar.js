import { Button, Navbar, Nav, Form, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home" style={{color:'yellow'}}>Easy Job Intern</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link1">Jobs</Nav.Link>
                        <Nav.Link href="#link2">Internship</Nav.Link>
                        <Nav.Link href="#link3">Other Programs</Nav.Link>
                    </Nav>
                    <Form inline className="mr-sm-5">
                        <InputGroup>
                            <FormControl
                                placeholder="Search..."
                                aria-label="Username"
                                aria-describedby="search"
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text type="submit" id="search" style={{borderTopRightRadius:'3px',borderBottomRightRadius:'3px'}}><Icon.Search/></InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form>
                    <Nav>
                        <Nav.Link href="#login"><Button variant="success"><Icon.BoxArrowInRight/> Sign In</Button></Nav.Link>
                        <Nav.Link href="#signup"><Button variant="warning"><Icon.PersonPlus/> Sign Up</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;