const nodemailer = require('nodemailer');

const email = (name, mail, mobile) => {
    const mailTransporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    
    const send = async subject => {
        // 1) define the email options
        const mailOptions = {
            from: 'Easy Job Intern',
            to: mail,
            subject,
            text: `Hello ${name}.\nWe welcome you to the Easy Job Intern.\n\nEasy Job Intern is a platform which provides the best job and internship opportunities. Companies can post here open application for jobs and internships so students can make their own profile and apply in multiple companies.\n\nYour account details are:\n
            Name: ${name}\nEmail: ${mail}\nMobile: ${mobile}\n\nWe’d love to hear what you think of Bunk Manager and if there is anything we can improve. If you have any questions, please reply to this email. We're always happy to help!\n\nEasy Job Intern Team`
        }; 
    
        // 2) create a transport and send email
        await mailTransporter.sendMail(mailOptions, (err,data) => {
            if(err) console.log(err);
            else console.log('Email sent successfully');
        });
    }
    
    //For sending welcome email anytime a new user sign up
    const sendWelcome = async () =>  {
        await send('Welcome to Easy Job Intern!');
    };

    //We can use this same function for more emails too
};

module.exports = email;