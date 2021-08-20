import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";


export default function TermsAndConditions() {
    
    return (
        <>
        
        
            <div style={{background: 'black'}}> 
        <h2 style={{fontFamily:'revert', color:'white', textAlign:'center', paddingTop:'2%'}}>TERMS AND CONDITIONS</h2>
            <Container style={{width:'100%', background:"None", textAlign:'left'}}>
                <Row>
                    <Col class="col-6">
                    
                        <h5 style={{color:'white'}}> The Company may terminate the Services in case the Subscriber:</h5> 
                        <ul style={{color:'white'}}>
                            
                            <li>Commits any breach of these terms and condition, representation & warranties and Subscribers obligations as contemplated in this agreement.</li>
                            <li>Fails to make payments as per the terms & condition herein.</li>
                            <li>Uses the Services provided by the Company for any illegal, unlawful or immoral purposes or in any fraudulent manner or for purposes not authorized by the Company.</li>
                            <li>Commits violation of any IPR, rights of privacy, rights of publicity and/or any other rights of third party and shall not be violative of any provision of Law in force.</li>
                        </ul>                 
                    </Col>
                    <Col class="col-6">
                        <h5 style={{color:'white'}}>Subscribers Obligation</h5> 
                        <ul style={{color:'white'}}>
                            <li>All the creative for the package will be designed by Company; however, all the content (logo, pictures, text, etc.) shall be provided by the Subscriber.</li>
                            <li>The Subscriber shall by action of signing this agreement issue an implicit & binding warranty to not use/circulate/forward any candidate(s) resume hosted on the Company's website to the candidate (s) current employer as mentioned by the person in his/her resume.</li>
                            <li>The data provided by the Subscriber shall be deemed to have been voluntarily supplied, non-confidential and the Subscriber hereby discharges the Company of all obligations of confidentiality.</li>
                            <li>In case by misrepresentation or false postings the Subscriber takes away the data which is the intellectual property of the Company, then in addition to the rights available to the Company herein, the Company shall have the right to initiate appropriate legal action against the Subscriber.</li>
                        </ul>                 
                    </Col>
                    
                    </Row>
                    <Row>                
                    <Col class="col-12 col-md-12 col-sm-12">
                        <h5 style={{color:'white'}}>General Conditions</h5>
                            <li style={{color:'white'}}>These job postings may not be substituted with other job postings during this term without incurring additional charges. Any jobs posted by Subscriber on the website and in excess of the number of jobs provided for in this Agreement will be billed to the Subscriber and shall be payable by the Subscriber in accordance with the terms hereof, at the Company's then prevailing rate for such job postings on the Website.</li>
                            <li style={{color:'white'}}>The Company may, in its sole discretion, impose a interest equal to 18% per month on all overdue accounts.</li>
                            <li style={{color:'white'}}>Any re activation of a deleted or expired job posting and any refreshing of any job posting constitutes use of an additional job posting hereunder.</li>
                            <li style={{color:'white'}}>Website's resume database (each a "Resume Database") is a private database for use by Subscriber's only. A Subscriber is defined as one unique user with one unique password provided by the Company. If the Subscriber (including its employees or consultants) is found to share passwords with any third party, the Company may revoke all passwords forthwith and no refund will be given.</li>
                    </Col>
                </Row>
            </Container>
         </div>
         
        </>
    )
    }
