const express = require("express");
const cors = require("cors");
const connection = require("./config/db")

// connect to db
connection();

const app = express();

require("dotenv").config();


app.use(express.json())

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`service running on port ${port}`);
});
