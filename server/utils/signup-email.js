const nodemailer = require('nodemailer');
require('dotenv').config() 
exports.signupEmailFunc = async (name, mail, confirmationCode) => {

        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.EMAIL_USER,
                pass : process.env.EMAIL_PASSWORD
            },
            tls : {
                rejectUnauthorized : false
            }
            
        } )
        var mailOptions = {
          from: 'Easy-job-intern',
          to: mail,
          subject: 'Sending Email via Node.js',
          html : `<h1>Email Confirmation</h1>
                    <p>Hii ${name} </p>
                    <p>Please verify your account by clicking this link </p>
                    <a href=http://localhost:3000/confirm/${confirmationCode} > Click here </a> `          
        }
        
    
     let info =  await transporter.sendMail(mailOptions , (error , response )=> {
        if(error) console.log("Email not sent" , error);
        else console.log('Email sent successfully');
        } );

};

