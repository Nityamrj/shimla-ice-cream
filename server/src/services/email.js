import nodemailer from 'nodemailer';

const email = () => {
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'icecreamshimla@gmail.com',
      pass: 'icecreamshimla@273303'
    }
  });
  
  var mailOptions = {
    from: 'icecreamshimla@gmail.com',
    to: 'amarsharmamrj@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export default email;