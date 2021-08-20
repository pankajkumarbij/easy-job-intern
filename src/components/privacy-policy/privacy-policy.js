import React from 'react';
import './privacy-policy.css';

export default function PrivacyPolicy() {
    return (
        <div className="content">
            <div className="heading">
                <p>Privacy Policy</p>
            </div>
            <div className="rules">
                <h3>Overview</h3>
                <p>We respect your privacy and strive to provide a safe, secure user experience. This privacy statement sets forth our online data collection and usage policies and practices. By using our services, you consent to the policies and practices described in this statement. Your data will be stored and processed on our servers which may be inside or outside India and your usage of the Services constitutes consent to the transfer of your data out of India. Our Services may contain links to other website over which we have no control and we are not responsible for the privacy policies or practices of other websites to which you navigate from our Services. We encourage you to review the privacy policies of these other websites so you can understand how they collect, use and share your information. This privacy statement applies solely to the information we collect on easy job intern.com and its sub-domains and not to information collected otherwise.</p>
                <h3>Sharing of Information</h3>
                <ul className="list">
                    <li>If you are an employer, information related to your internship and/or job post such as organisation name, URL, and description, job description, skills required etc. is published online and can be viewed by anyone visiting Easy Job Intern site. This information may also appear in search websites like Google. Further, we may share your personal information (including contact details) with students who apply to your internships and/or jobs or get hired by you through Easy Job Intern.</li>
                    <li>If you are an applicant, we may share your personal information with employers whose internships and/or jobs you apply to or whose internships and/or jobs we feel may be relevant for you or who may come across your profile through a search of our user base.</li>
                    <li>When we send you an email or SMS, we use a third party service. In this case, it becomes necessary to pass on your email address/ mobile number to the third party. While we only work with reputed service providers in this regard, we are not responsible for the use made by them of this information.</li>
                </ul>
                <h3>Security of Information</h3>
                <p>We have implemented generally accepted industry standards in terms of security measures to protect your information on Internshala. The third party payment service providers (payment gateways) are all validated as compliant with the payment card industry standard (generally referred to as PCI compliant service providers).

While we try our best to safeguard information, there may be factors beyond our control that may result in unwanted disclosure of information. We assume no liability or responsibility for disclosure of your information due to causes beyond our control.

In order to keep personal information secure, you must not share your password or other security information (for example, unique keys) of your Internshala account with anyone. If you are using a shared computer, please make sure you logout after every use. If we receive instructions using your email and password, we will consider that the instructions have been authorized by you.</p>
            </div>
        </div>
    )
}