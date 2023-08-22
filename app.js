const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const postRoutes = require("./routes/posts");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/posts", postRoutes);
// app.get("/", (req, res) => {
//   res.send("success");
// });
// app.get("/blog", (req, res) => {
//   res.send("blog");
// });

module.exports = app;
