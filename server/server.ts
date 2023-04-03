const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5002;
// middleware
app.use(cors());
app.use(express.json());
app.use("/book", require('./routes/bookRoutes'));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

