const express = require("express");
// const cors = require("cors");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`service running on port ${port}`);
});
