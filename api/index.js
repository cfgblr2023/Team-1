const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(express.json());

//Connecting to database present at mongodb atlas-----------starts
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongo"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", function (request, response) {
  response.send("Hello");
});
//starting application on port 1000
app.listen(1000, function () {
  console.log("Backend Running on port 1000");
});
