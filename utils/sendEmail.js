const nodemailer = require("nodemailer");

const sendEmail = async () => {
  var servicer = nodemailer.createTransport({
    service: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  var mailMsg = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: "test@test.com",
    subject: "OTP",
    message: "message",
  };

  await servicer.sendMail(mailMsg, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email sent: ` + info.response);
    }
  });
};

module.exports = sendEmail;
