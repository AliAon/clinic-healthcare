const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: process.env.MAIL_TRAP_HOST,
    port: process.env.MAIL_TRAP_PORT,
    auth: {
      user: process.env.MAIL_TRAP_USER_NAME,
      pass: process.env.MAIL_TRAP_USER_PASSWORD
    }
  });

// async..await is not allowed in global scope, must use a wrapper
exports.sendEmail=async(options)=>{
  // send mail with defined transport object
  const info = await transporter.sendMail(options);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

