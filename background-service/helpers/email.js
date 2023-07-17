const nodemailer = require("nodemailer");
require("dotenv").config();

async function createTransporter(email,subject,text) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.PORTS,
            service: process.env.SERVICE,
            secure: Boolean(process.env.SECURE),
            auth: {
              user: process.env.USER,
              pass: process.env.PASS
            }
          });
          await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
          })
          console.log("Email sent successfully")

    } catch (error) {
        console.log("email not sent", error)
    }
  
  
}

const defaultConfig = {
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
};
module.exports = {
  sendMail: async (email) => {
    const transporter = createTransporter(defaultConfig);
    await transporter.verify();
    await transporter.sendMail(email);
  },
};