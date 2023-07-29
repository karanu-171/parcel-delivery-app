const nodemailer = require("nodemailer");
require("dotenv").config();


async function createTransporter(config) {
  
    let transporter = nodemailer.createTransport(config);
    return transporter
}

const defaultConfig = {
  host: process.env.HOST,
  port: process.env.PORTS,
  service: process.env.SERVICE,
  secure: Boolean(process.env.SECURE),
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
}

module.exports = {
  sendMail: async (email) => {
      const transporter = nodemailer.createTransport(defaultConfig);
      await transporter.sendMail(email);
    },
  }