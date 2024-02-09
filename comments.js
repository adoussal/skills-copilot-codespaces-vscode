// Create web server
// npm install express
// npm install body-parser
// npm install cors
// npm install mongoose
// npm install nodemon
// npm install dotenv
// npm install jsonwebtoken
// npm install bcryptjs
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const commentsRoutes = require("./routes/comments");
const userRoutes = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/comments", commentsRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
