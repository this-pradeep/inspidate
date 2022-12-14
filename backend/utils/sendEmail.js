import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
const  sendEmail = async (token, type) => {
  try {
    // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let htmlbody = (type === 'changePassword' ? `<p>Visit this link to change your password: <a href="http://localhost:5000/api/users/passwordChangeLink/${token}" target="_blank">http://localhost:5000/api/users/passwordChangeLink/${token}</a> </p>`:`<p>Click the link to verify your account: <a href="http://localhost:5000/api/users/verifyAccount/${token}" target="_blank">http://localhost:5000/api/users/verifyAccount/${token}</a> </p>`)
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: htmlbody, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info;

  } catch (error) {
    console.log(error)
  }
}


export default sendEmail;