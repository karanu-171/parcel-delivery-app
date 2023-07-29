const express = require("express");
const ejs = require("ejs");
const connection = require("./config/db")
const registerMail = require('./emailService/registration')

// connect to db
connection();

const app = express();

require("dotenv").config();

// send email after registration
registerMail();

app.use(express.json())
app.set('view engine', 'ejs')

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`service running on port ${port}`);
});
