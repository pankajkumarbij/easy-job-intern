import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() { 
  return (
    <>
        <footer className=" bg-dark text-white newFooter" style={{padding: "0px", margin:"0px", backgroundColor:"#1A2226"}}> 
       {/* <div className="container" style={{padding: "0px", margin:"0px", width:'100%'}}>*/}  {/*</div> */}
        <div className="row" style={{padding: "0px", width:'100%', marginLeft:'0px'}}>
               
              {/* Column 1 */}
        <div className="col-md-3 col-sm-6" style={{paddingRight: "1%", margin:"0px"}}>
          <h5 style={{paddingTop:'2%'}}>Online Trainings</h5>
          <ul className="list-unstyled" style={{borderBottom: '2px dotted #6c6c6c'}}>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                    Advanced Excel
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                    Data Science and ML
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                    Core Java
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                    Digital Marketing
                  </Button>{" "}</li>
          </ul>
        </div>

              {/* Column 2 */}
        <div className="col-md-3 col-sm-6" style={{paddingRight: "1%", margin:"0px"}}>
          <h5 style={{paddingTop:'2%'}}>Internship by Places</h5>
          <ul className="list-unstyled" style={{borderBottom: '2px dotted #6c6c6c'}}>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                   Mumbai
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                    Delhi
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                    Bangalore
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                    PAN India
                  </Button>{" "}</li>
          </ul>
        </div>

             {/* Column 3 */}
          <div className="col-md-3 col-sm-6" style={{paddingRight: "1%", margin:"0px"}}>
          <h5 style={{paddingTop:'2%'}}>Internship by Stream</h5>
          <ul className="list-unstyled" style={{borderBottom: '2px dotted #6c6c6c'}}>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                   Computer Science
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="/#" >
                    Content Marketing
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="#" >
                    Summer Research Fellowship
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  href="#" >
                    Electical Engineering
                  </Button>{" "}</li>
          </ul>
        </div>

              {/* Column 4 */}
          <div className="col-md-3 col-sm-6" style={{paddingRight: "1%", margin:"0px"}}>
          <h5 style={{paddingTop:'2%'}}>About Easy Job Intern</h5>
          <ul className="list-unstyled" style={{borderBottom: '2px dotted #6c6c6c'}}>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  as={Link} to="/about-us" >
                   About Us
                </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  as={Link} to="/contact-us" >
                  Contact Us
                  </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  as={Link} to="/terms-conditions" >
                  Terms and Condition
              </Button>{" "}</li>
            <li><Button style={{ marginBottom: "5px", borderColor: "#343a40", padding: "2px 0.75rem", fontSize: "0.8rem"}}  variant="outline-warning"  as={Link} to="/privacy-policy" >
                  Privacy Policy
                </Button>{" "}</li>
          </ul>
        </div>

          {/* Footer Bottom */}
          <div className="row  mx-auto">
            <div className="col-sm-12 mt-md-2  my-2">
              <p style={{ fontSize: "15px", marginBottom: "5px" }}>
                Connect With Us!
              </p>
              <a href="/#">
                <Icon.Linkedin
                  style={{ color: "#ffc107" }}
                  className="mx-md-3 mx-2 icons"
                ></Icon.Linkedin>{" "}
              </a>
              <a href="/#">
                <Icon.Facebook
                  style={{ color: "#ffc107" }}
                  className="mx-md-3 mx-2 icons"
                ></Icon.Facebook>
              </a>
              <a href="/#">
                <Icon.Twitter
                  style={{ color: "#ffc107" }}
                  className="mx-md-3 mx-2 icons"
                ></Icon.Twitter>
              </a>
              <a href="/#">
                <Icon.Youtube
                  style={{ color: "#ffc107" }}
                  className="mx-md-3 mx-2 icons"
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
